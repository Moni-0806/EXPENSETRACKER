// Income Controller for MySQL using Sequelize
const xlsx = require("xlsx");
const User = require("../models/User");
const Income = require("../models/Income");

// Add income source
exports.addIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, source, amount, date } = req.body;

    // Validation: checking for missing fields
    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Create new income record (Sequelize create)
    const newIncome = await Income.create({
      userId,
      icon: icon || '',
      source,
      amount,
      date: new Date(date),
    });

    res.status(200).json(newIncome);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all income records
exports.getAllIncome = async (req, res) => {
  try {
    // Find all income records sorted by date descending (Sequelize query)
    const income = await Income.findAll({
      order: [['date', 'DESC']]
    });

    res.json(income);
  } catch (error) {
    res.status(500).json({ message: "Server error!" });
  }
};

// Delete income resource
exports.deleteIncome = async (req, res) => {
  try {
    // Delete income by primary key (Sequelize destroy)
    const deleted = await Income.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({ message: "Income not found!" });
    }

    res.json({ message: "Income deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error!" });
  }
};

// Download income data as Excel file
exports.downloadIncomeExcel = async (req, res) => {
  try {
    // Get all income records sorted by date (Sequelize query)
    const income = await Income.findAll({
      order: [['date', 'DESC']]
    });

    // Prepare data for Excel
    const data = income.map((item) => ({
      Source: item.source,
      Amount: item.amount,
      Date: new Date(item.date).toLocaleDateString(),
      Icon: item.icon || "N/A",
    }));

    // Create Excel workbook
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Income");

    // Save file to backend folder
    const filePath = "income_details.xlsx";
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
