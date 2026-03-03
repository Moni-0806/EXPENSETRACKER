// Expense Controller for MySQL using Sequelize
const xlsx = require("xlsx");
const User = require("../models/User");
const Expense = require("../models/Expense");

// Add expense
exports.addExpense = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, category, amount, date } = req.body;

    // Validation: checking for missing fields
    if (!category || !amount || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Create new expense record (Sequelize create)
    const newExpense = await Expense.create({
      userId,
      icon: icon || '',
      category,
      amount,
      date: new Date(date),
    });

    res.status(200).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all expense records
exports.getAllExpense = async (req, res) => {
  try {
    // Find all expense records sorted by date descending (Sequelize query)
    const expense = await Expense.findAll({
      order: [['date', 'DESC']]
    });

    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: "Server error!" });
  }
};

// Delete expense resource
exports.deleteExpense = async (req, res) => {
  try {
    // Delete expense by primary key (Sequelize destroy)
    const deleted = await Expense.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({ message: "Expense not found!" });
    }

    res.json({ message: "Expense deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error!" });
  }
};

// Download expense data as Excel file
exports.downloadExpenseExcel = async (req, res) => {
  try {
    // Get all expense records sorted by date (Sequelize query)
    const expense = await Expense.findAll({
      order: [['date', 'DESC']]
    });

    // Prepare data for Excel
    const data = expense.map((item) => ({
      Category: item.category,
      Amount: item.amount,
      Date: new Date(item.date).toLocaleDateString(),
      Icon: item.icon || "N/A",
    }));

    // Create Excel workbook
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Expense");

    // Save file to backend folder
    const filePath = "expense_details.xlsx";
    xlsx.writeFile(wb, filePath);

    // Send file for download
    res.download(filePath, (err) => {
      if (err) {
        res.status(500).json({ message: "Error downloading file" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error." });
  }
};
