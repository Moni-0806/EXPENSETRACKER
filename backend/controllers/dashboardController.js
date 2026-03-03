// Dashboard Controller for MySQL using Sequelize
const Income = require("../models/Income");
const Expense = require("../models/Expense");
const { Op } = require("sequelize");
const { sequelize } = require("../config/database");

// Get dashboard data
exports.getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch total income using Sequelize aggregate
    const totalIncomeResult = await Income.findOne({
      attributes: [[sequelize.fn('SUM', sequelize.col('amount')), 'total']],
      where: { userId },
      raw: true
    });
    const totalIncome = parseFloat(totalIncomeResult?.total) || 0;

    // Fetch total expense using Sequelize aggregate
    const totalExpenseResult = await Expense.findOne({
      attributes: [[sequelize.fn('SUM', sequelize.col('amount')), 'total']],
      where: { userId },
      raw: true
    });
    const totalExpense = parseFloat(totalExpenseResult?.total) || 0;

    // Get income transactions in the last 60 days
    const sixtyDaysAgo = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000);
    const last60DaysIncomeTransactions = await Income.findAll({
      where: {
        userId,
        date: { [Op.gte]: sixtyDaysAgo }
      },
      order: [['date', 'DESC']]
    });

    // Calculate total income for last 60 days
    const incomeLast60Days = last60DaysIncomeTransactions.reduce(
      (sum, transaction) => sum + parseFloat(transaction.amount),
      0
    );

    // Get expense transactions in the last 30 days
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const last30DaysExpenseTransaction = await Expense.findAll({
      where: {
        userId,
        date: { [Op.gte]: thirtyDaysAgo }
      },
      order: [['date', 'DESC']]
    });

    // Calculate total expense for last 30 days
    const expensesLast30Days = last30DaysExpenseTransaction.reduce(
      (sum, transaction) => sum + parseFloat(transaction.amount),
      0
    );

    // Fetch last 5 income transactions
    const lastIncomeTransactions = await Income.findAll({
      where: { userId },
      order: [['date', 'DESC']],
      limit: 5
    });

    // Fetch last 5 expense transactions
    const lastExpenseTransactions = await Expense.findAll({
      where: { userId },
      order: [['date', 'DESC']],
      limit: 5
    });

    // Combine and sort recent transactions
    const lastTransaction = [
      ...lastIncomeTransactions.map(txn => ({
        ...txn.toJSON(),
        type: "income"
      })),
      ...lastExpenseTransactions.map(txn => ({
        ...txn.toJSON(),
        type: "expense"
      }))
    ].sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending

    // Final response
    res.json({
      totalBalance: totalIncome - totalExpense,
      totalIncome: totalIncome,
      totalExpense: totalExpense,
      last30DaysExpenses: {
        total: expensesLast30Days,
        transaction: last30DaysExpenseTransaction,
      },
      last60DaysIncome: {
        total: incomeLast60Days,
        transaction: last60DaysIncomeTransactions,
      },
      recentTransaction: lastTransaction,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
