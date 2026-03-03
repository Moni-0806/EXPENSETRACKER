// Expense Model for MySQL using Sequelize
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Define Expense model
const Expense = sequelize.define('Expense', {
  // Primary key (auto-increment)
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  // Foreign key to User
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  // Expense category (e.g., Rent, Food, Transport)
  category: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  // Expense amount
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
      min: 0
    }
  },
  // Expense date
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  // Optional icon/emoji
  icon: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: ''
  }
}, {
  tableName: 'expenses',
  timestamps: true // Adds createdAt and updatedAt
});

module.exports = Expense;
