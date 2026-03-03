// Income Model for MySQL using Sequelize
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Define Income model
const Income = sequelize.define('Income', {
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
  // Income source (e.g., Salary, Freelance)
  source: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  // Income amount
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
      min: 0
    }
  },
  // Income date
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
  tableName: 'incomes',
  timestamps: true // Adds createdAt and updatedAt
});

module.exports = Income;
