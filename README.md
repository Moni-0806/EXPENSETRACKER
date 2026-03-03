# 💰 Expense Tracker Application

A comprehensive full-stack financial management system designed to help users track, analyze, and visualize their income and expenses. Built with modern web technologies, this application provides real-time analytics, interactive data visualizations, and intuitive financial management capabilities.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-19.x-blue.svg)
![MySQL](https://img.shields.io/badge/mysql-8.x-orange.svg)
![Express](https://img.shields.io/badge/express-5.x-lightgrey.svg)
![Vite](https://img.shields.io/badge/vite-7.x-646CFF.svg)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [Security Features](#security-features)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Contact & Support](#contact--support)

---

## 🎯 Overview

The Expense Tracker Application is an enterprise-grade financial management solution that enables users to:

- **Track Financial Transactions**: Record and categorize income and expenses with detailed metadata
- **Visualize Financial Data**: Interactive charts and graphs powered by Recharts for comprehensive insights
- **Analyze Spending Patterns**: Identify trends and patterns in financial behavior over time
- **Manage User Profiles**: Secure authentication with customizable user profiles and avatar support
- **Export Financial Reports**: Generate Excel reports for income and expense data
- **Real-time Dashboard**: Monitor financial health with live statistics and recent transaction feeds

This application is ideal for individuals seeking to gain better control over their personal finances through data-driven insights and intuitive user interfaces.

---

## ✨ Key Features

### Financial Management
- ✅ **Income Tracking**: Record multiple income sources with categories, amounts, and descriptions
- ✅ **Expense Management**: Track expenses with categorization, receipt uploads, and detailed notes
- ✅ **Transaction History**: Comprehensive view of all financial transactions with filtering and sorting
- ✅ **Category Management**: Organize transactions by customizable categories

### Analytics & Visualization
- 📊 **Interactive Dashboard**: Real-time overview of financial status with key metrics
- 📈 **Line Charts**: Visualize income and expense trends over time
- 📉 **Bar Charts**: Compare spending across different categories
- 🥧 **Pie Charts**: Understand expense distribution at a glance
- 📅 **30-Day Analysis**: Detailed breakdown of recent financial activity

### User Experience
- 🔐 **Secure Authentication**: JWT-based authentication with bcrypt password hashing
- 👤 **User Profiles**: Customizable profiles with emoji avatar selection
- 📱 **Responsive Design**: Fully responsive UI built with Tailwind CSS
- 🎨 **Modern Interface**: Clean, intuitive design with smooth animations
- 🔔 **Toast Notifications**: Real-time feedback for user actions

### Data Management
- 📤 **File Uploads**: Support for receipt and document attachments via Multer
- 📥 **Excel Export**: Generate downloadable Excel reports for financial data
- 💾 **Persistent Storage**: MySQL database with Sequelize ORM for reliable data management
- 🔄 **Real-time Updates**: Instant synchronization across all components

---

## 🛠 Technology Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI framework for building interactive interfaces |
| **Vite** | 7.3.1 | Next-generation frontend build tool |
| **Tailwind CSS** | 4.2.0 | Utility-first CSS framework for styling |
| **React Router DOM** | 7.13.0 | Client-side routing and navigation |
| **Recharts** | 3.7.0 | Composable charting library for data visualization |
| **Axios** | 1.13.5 | HTTP client for API communication |
| **React Hot Toast** | 2.6.0 | Toast notification system |
| **React Icons** | 5.5.0 | Icon library for UI elements |
| **Emoji Picker React** | 4.18.0 | Emoji selection for user avatars |
| **Moment.js** | 2.30.1 | Date manipulation and formatting |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | ≥14.0.0 | JavaScript runtime environment |
| **Express** | 5.2.1 | Web application framework |
| **MySQL** | 8.x | Relational database management system |
| **Sequelize** | 6.37.5 | Promise-based ORM for MySQL |
| **JWT** | 9.0.3 | JSON Web Token for authentication |
| **bcryptjs** | 3.0.3 | Password hashing library |
| **Multer** | 2.0.2 | Middleware for file uploads |
| **XLSX** | 0.18.5 | Excel file generation and parsing |
| **CORS** | 2.8.6 | Cross-Origin Resource Sharing middleware |
| **dotenv** | 17.3.1 | Environment variable management |

### Development Tools
- **ESLint**: Code linting and quality assurance
- **Nodemon**: Auto-restart development server
- **Vite Plugin React**: Fast refresh and JSX support

---

## 🏗 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  React Frontend (Vite + Tailwind CSS)                │  │
│  │  - Dashboard, Income, Expense Pages                  │  │
│  │  - Authentication (Login/Signup)                     │  │
│  │  - Charts & Visualizations (Recharts)               │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↕ HTTP/HTTPS (Axios)
┌─────────────────────────────────────────────────────────────┐
│                      API Layer (REST)                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Express.js Server                                    │  │
│  │  - Authentication Routes (/api/v1/auth)              │  │
│  │  - Income Routes (/api/v1/income)                    │  │
│  │  - Expense Routes (/api/v1/expense)                  │  │
│  │  - Dashboard Routes (/api/v1/dashboard)              │  │
│  │  - JWT Middleware & File Upload Handler             │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↕ Sequelize ORM
┌─────────────────────────────────────────────────────────────┐
│                      Data Layer                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  MySQL Database                                       │  │
│  │  - Users Table (Authentication & Profiles)           │  │
│  │  - Income Table (Income Transactions)                │  │
│  │  - Expenses Table (Expense Transactions)             │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 Prerequisites

Before installing the application, ensure your system meets the following requirements:

### Required Software
- **Node.js**: Version 14.0.0 or higher ([Download](https://nodejs.org/))
- **npm**: Version 6.0.0 or higher (comes with Node.js)
- **MySQL**: Version 8.0 or higher ([Download](https://dev.mysql.com/downloads/))
- **Git**: For cloning the repository ([Download](https://git-scm.com/))

### System Requirements
- **Operating System**: Windows 10/11, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: At least 500MB free space
- **Network**: Internet connection for package installation

### Recommended Tools
- **MySQL Workbench**: For database management and visualization
- **Postman**: For API testing and development
- **VS Code**: Recommended IDE with ESLint extension

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd expense-tracker
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
copy .env.example .env  # Windows
# OR
cp .env.example .env    # macOS/Linux
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend/expense-tracker

# Install dependencies
npm install
```

### 4. Database Setup

#### Option A: Using MySQL Workbench
1. Open MySQL Workbench
2. Create a new connection to your MySQL server
3. Execute the following SQL:
```sql
CREATE DATABASE expense_tracker;
```

#### Option B: Using Command Line
```bash
mysql -u root -p
CREATE DATABASE expense_tracker;
EXIT;
```

### 5. Database Migration

The application uses Sequelize ORM which will automatically create tables on first run. Alternatively, refer to `MYSQL_MIGRATION_GUIDE.md` for manual schema setup.

---

## ⚙️ Configuration

### Backend Environment Variables

Create a `.env` file in the `backend` directory with the following configuration:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=expense_tracker
DB_USER=root
DB_PASSWORD=your_mysql_password

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
JWT_EXPIRE=7d

# Client Configuration
CLIENT_URL=http://localhost:5173

# File Upload Configuration
MAX_FILE_SIZE=5242880  # 5MB in bytes
UPLOAD_PATH=./uploads
```

### Frontend Configuration

The frontend uses Vite's environment variable system. Create `.env` file in `frontend/expense-tracker`:

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

### Security Considerations

⚠️ **Important**: 
- Never commit `.env` files to version control
- Use strong, unique values for `JWT_SECRET` in production
- Change default database credentials
- Enable HTTPS in production environments
- Implement rate limiting for API endpoints

---

## 🎮 Running the Application

### Development Mode

#### Start Backend Server
```bash
cd backend
npm run dev
```
The backend server will start on `http://localhost:5000`

#### Start Frontend Development Server
```bash
cd frontend/expense-tracker
npm run dev
```
The frontend will start on `http://localhost:5173`

### Production Mode

#### Build Frontend
```bash
cd frontend/expense-tracker
npm run build
```

#### Start Backend in Production
```bash
cd backend
npm start
```

### Accessing the Application

1. Open your browser and navigate to `http://localhost:5173`
2. Create a new account using the Sign Up page
3. Log in with your credentials
4. Start tracking your income and expenses!

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api/v1
```

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "avatar": "😊"
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "😊"
  }
}
```

### Income Endpoints

#### Get All Income
```http
GET /income
Authorization: Bearer <token>
```

#### Add Income
```http
POST /income
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Salary",
  "amount": 5000,
  "category": "Employment",
  "description": "Monthly salary",
  "date": "2026-03-01"
}
```

#### Update Income
```http
PUT /income/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "amount": 5500
}
```

#### Delete Income
```http
DELETE /income/:id
Authorization: Bearer <token>
```

### Expense Endpoints

#### Get All Expenses
```http
GET /expense
Authorization: Bearer <token>
```

#### Add Expense
```http
POST /expense
Authorization: Bearer <token>
Content-Type: multipart/form-data

{
  "title": "Groceries",
  "amount": 150,
  "category": "Food",
  "description": "Weekly shopping",
  "date": "2026-03-02",
  "receipt": <file>
}
```

#### Update Expense
```http
PUT /expense/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "amount": 175
}
```

#### Delete Expense
```http
DELETE /expense/:id
Authorization: Bearer <token>
```

### Dashboard Endpoints

#### Get Dashboard Summary
```http
GET /dashboard/summary
Authorization: Bearer <token>
```

**Response:**
```json
{
  "totalIncome": 15000,
  "totalExpense": 8500,
  "balance": 6500,
  "recentTransactions": [...],
  "monthlyData": [...]
}
```

---

## 📁 Project Structure

```
expense-tracker/
│
├── backend/
│   ├── config/
│   │   └── database.js           # MySQL connection configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── incomeController.js   # Income CRUD operations
│   │   ├── expenseController.js  # Expense CRUD operations
│   │   └── dashboardController.js # Dashboard analytics
│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT verification
│   │   └── uploadMiddleware.js   # File upload handling
│   ├── models/
│   │   ├── User.js               # User model (Sequelize)
│   │   ├── Income.js             # Income model
│   │   └── Expense.js            # Expense model
│   ├── routes/
│   │   ├── authRoutes.js         # Authentication routes
│   │   ├── incomeRoutes.js       # Income routes
│   │   ├── expenseRoutes.js      # Expense routes
│   │   └── dashboardRoutes.js    # Dashboard routes
│   ├── uploads/                  # User-uploaded files
│   ├── .env                      # Environment variables
│   ├── package.json              # Backend dependencies
│   └── server.js                 # Express server entry point
│
├── frontend/expense-tracker/
│   ├── public/                   # Static assets
│   ├── src/
│   │   ├── assets/               # Images and icons
│   │   ├── components/
│   │   │   ├── Cards/            # Reusable card components
│   │   │   ├── Charts/           # Chart components (Recharts)
│   │   │   ├── Dashboard/        # Dashboard-specific components
│   │   │   ├── Expense/          # Expense management components
│   │   │   ├── Income/           # Income management components
│   │   │   ├── Inputs/           # Form input components
│   │   │   └── layouts/          # Layout components
│   │   ├── context/
│   │   │   └── userContext.jsx   # Global user state management
│   │   ├── hooks/
│   │   │   └── useUserAuth.jsx   # Authentication hook
│   │   ├── pages/
│   │   │   ├── Auth/             # Login and SignUp pages
│   │   │   └── Dashboard/        # Dashboard pages
│   │   ├── utils/
│   │   │   ├── apiPaths.js       # API endpoint constants
│   │   │   ├── axiosInstance.js  # Configured Axios instance
│   │   │   ├── data.js           # Static data and constants
│   │   │   ├── helper.js         # Utility functions
│   │   │   └── uploadImage.js    # Image upload utilities
│   │   ├── App.jsx               # Main application component
│   │   ├── main.jsx              # Application entry point
│   │   └── index.css             # Global styles
│   ├── .gitignore
│   ├── eslint.config.js          # ESLint configuration
│   ├── index.html                # HTML template
│   ├── package.json              # Frontend dependencies
│   ├── vite.config.js            # Vite configuration
│   └── README.md
│
├── MYSQL_MIGRATION_GUIDE.md      # Database migration instructions
├── NEXT_STEPS.md                 # Development roadmap
├── README.md                     # This file
└── .gitignore                    # Git ignore rules
```

---

## 🗄 Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  avatar VARCHAR(10) DEFAULT '😊',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Income Table
```sql
CREATE TABLE incomes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);
```

### Expenses Table
```sql
CREATE TABLE expenses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  receipt VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);
```

---

## 🔒 Security Features

### Implemented Security Measures

1. **Password Security**
   - Passwords hashed using bcryptjs with salt rounds
   - No plain-text password storage

2. **Authentication**
   - JWT-based stateless authentication
   - Token expiration and refresh mechanisms
   - Protected routes with middleware validation

3. **Data Validation**
   - Input sanitization on all endpoints
   - SQL injection prevention via Sequelize ORM
   - XSS protection through React's built-in escaping

4. **CORS Configuration**
   - Restricted origin access
   - Controlled HTTP methods
   - Secure header management

5. **File Upload Security**
   - File type validation
   - Size limitations (5MB default)
   - Secure file storage with unique naming

### Recommended Production Enhancements

- Implement rate limiting (express-rate-limit)
- Add helmet.js for HTTP header security
- Enable HTTPS with SSL/TLS certificates
- Implement refresh token rotation
- Add request logging and monitoring
- Set up database backups and disaster recovery
- Implement CSRF protection for state-changing operations

---

## 🤝 Contributing

We welcome contributions from the community! To contribute:

### Getting Started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR
- Keep PRs focused on a single feature or bug fix

### Code Style

- **Frontend**: Follow React best practices and ESLint rules
- **Backend**: Use consistent naming conventions and modular structure
- **Comments**: Write clear comments for complex logic
- **Formatting**: Use Prettier or similar formatter

### Reporting Issues

When reporting bugs, please include:
- Detailed description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details (OS, Node version, etc.)

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Database Connection Errors

**Problem**: `SequelizeConnectionError: Access denied for user`

**Solution**:
```bash
# Verify MySQL credentials in .env file
# Ensure MySQL service is running
# Windows:
net start MySQL80

# macOS:
brew services start mysql

# Linux:
sudo systemctl start mysql
```

#### Port Already in Use

**Problem**: `Error: listen EADDRINUSE: address already in use :::5000`

**Solution**:
```bash
# Find and kill the process using the port
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:5000 | xargs kill -9
```

#### Frontend Build Errors

**Problem**: `Module not found` or dependency errors

**Solution**:
```bash
# Clear node_modules and reinstall
cd frontend/expense-tracker
rm -rf node_modules package-lock.json
npm install
```

#### JWT Token Errors

**Problem**: `JsonWebTokenError: invalid token`

**Solution**:
- Clear browser localStorage
- Verify JWT_SECRET matches between sessions
- Check token expiration settings
- Re-login to generate new token

#### File Upload Issues

**Problem**: Files not uploading or 413 Payload Too Large

**Solution**:
- Check MAX_FILE_SIZE in .env
- Verify uploads directory exists and has write permissions
- Ensure file type is supported
- Check network payload limits

### Getting Help

If you encounter issues not covered here:

1. Check existing GitHub Issues
2. Review the `MYSQL_MIGRATION_GUIDE.md` for database-specific problems
3. Consult the `NEXT_STEPS.md` for known limitations
4. Open a new issue with detailed information

---

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2026 Expense Tracker Application

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact & Support

### Project Maintainers

For questions, suggestions, or support:

- **GitHub Issues**: [Create an issue](https://github.com/your-repo/expense-tracker/issues)
- **Email**: support@expensetracker.com
- **Documentation**: See `MYSQL_MIGRATION_GUIDE.md` and `NEXT_STEPS.md`

### Additional Resources

- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Sequelize ORM](https://sequelize.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts Documentation](https://recharts.org/)

---

## 🙏 Acknowledgments

- React team for the amazing frontend framework
- Express.js community for the robust backend framework
- Recharts for beautiful data visualization components
- Tailwind CSS for the utility-first CSS framework
- All contributors and users of this application

---

<div align="center">

**Built with ❤️ for better financial management**

⭐ Star this repository if you find it helpful!

[Report Bug](https://github.com/your-repo/expense-tracker/issues) · [Request Feature](https://github.com/your-repo/expense-tracker/issues) · [Documentation](https://github.com/your-repo/expense-tracker/wiki)

</div