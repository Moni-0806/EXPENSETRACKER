# MySQL Migration Guide - Expense Tracker

## Overview
This guide documents the migration from MongoDB to MySQL for the Expense Tracker application.

## Backend Changes Completed

### 1. Database Configuration
- **File**: `backend/config/database.js` (NEW)
- Created Sequelize configuration for MySQL
- Auto-creates tables on startup

### 2. Environment Variables
- **File**: `backend/.env`
- Updated with MySQL credentials:
  ```
  DB_HOST=localhost
  DB_PORT=3306
  DB_NAME=expense_tracker
  DB_USER=root
  DB_PASSWORD=
  ```

### 3. Models Converted
- **User.js**: MongoDB schema → Sequelize model
  - `_id` → `id` (auto-increment)
  - Password hashing via beforeCreate/beforeUpdate hooks
  - `matchPassword()` method for authentication
  
- **Income.js**: MongoDB schema → Sequelize model
  - `_id` → `id` (auto-increment)
  - Foreign key `userId` references users table
  
- **Expense.js**: MongoDB schema → Sequelize model
  - `_id` → `id` (auto-increment)
  - Foreign key `userId` references expenses table

### 4. Controllers Updated
All controllers converted from Mongoose to Sequelize:

- **authController.js**
  - `User.findOne({ email })` → `User.findOne({ where: { email } })`
  - `User.findById()` → `User.findByPk()`
  - Returns `id` instead of `_id`

- **incomeController.js**
  - `Income.find()` → `Income.findAll()`
  - `.sort()` → `order: [['date', 'DESC']]`
  - `Income.findByIdAndDelete()` → `Income.destroy({ where: { id } })`

- **expenseController.js**
  - Same conversions as incomeController

- **dashboardController.js**
  - Aggregate queries → Sequelize aggregate functions
  - `$match` → `where` clause
  - `$sum` → `sequelize.fn('SUM')`

### 5. Middleware Updated
- **authMiddleware.js**
  - `User.findById()` → `User.findByPk()`

### 6. Server Configuration
- **server.js**
  - Import changed from `./config/db` to `./config/database`
  - Calls `connectDB()` to initialize MySQL connection

## Required Package Installation

Run in backend folder:
```bash
npm install mysql2 sequelize
npm uninstall mongoose
```

## Database Setup

### Option 1: Using XAMPP
1. Start XAMPP MySQL server
2. Open phpMyAdmin (http://localhost/phpmyadmin)
3. Create new database named `expense_tracker`
4. Tables will be created automatically when you start the server

### Option 2: Using MySQL Command Line
```sql
CREATE DATABASE expense_tracker;
USE expense_tracker;
```

## Frontend Changes Completed

All frontend files have been updated to use `id` instead of `_id`:

### Files Updated:
1. ✅ `frontend/expense-tracker/src/components/Income/IncomeList.jsx`
   - Changed `key={income._id}` → `key={income.id}`
   - Changed `onDelete(income._id)` → `onDelete(income.id)`

2. ✅ `frontend/expense-tracker/src/components/Expense/ExpenseList.jsx`
   - Changed `key={expense._id}` → `key={expense.id}`
   - Changed `onDelete(expense._id)` → `onDelete(expense.id)`

3. ✅ `frontend/expense-tracker/src/components/Dashboard/RecentTransaction.jsx`
   - Changed `key={item._id}` → `key={item.id}`

4. ✅ `frontend/expense-tracker/src/components/Dashboard/ExpenseTransaction.jsx`
   - Changed `key={expense._id}` → `key={expense.id}`

5. ✅ `frontend/expense-tracker/src/components/Dashboard/RecentIncome.jsx`
   - Changed `key={item._id}` → `key={item.id}`

## Testing Checklist

After migration, test:
- [ ] User registration
- [ ] User login
- [ ] Add income
- [ ] View income list
- [ ] Delete income
- [ ] Download income Excel
- [ ] Add expense
- [ ] View expense list
- [ ] Delete expense
- [ ] Download expense Excel
- [ ] Dashboard data display
- [ ] Logout functionality

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullName VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  profileImageUrl VARCHAR(500),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Incomes Table
```sql
CREATE TABLE incomes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  source VARCHAR(100) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  date DATETIME NOT NULL,
  icon VARCHAR(50),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);
```

### Expenses Table
```sql
CREATE TABLE expenses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  category VARCHAR(100) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  date DATETIME NOT NULL,
  icon VARCHAR(50),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);
```

## Rollback Plan

If you need to rollback to MongoDB:
1. Keep the old `backend/config/db.js` file as backup
2. Reinstall mongoose: `npm install mongoose`
3. Restore old model, controller, and middleware files
4. Update server.js to use MongoDB connection

## Notes
- All MongoDB `_id` fields are now `id` (integer, auto-increment)
- Sequelize automatically creates `createdAt` and `updatedAt` timestamps
- Foreign key constraints ensure data integrity
- Password hashing is handled by Sequelize hooks
- Tables are created automatically on first run
