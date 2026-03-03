// MySQL Database Configuration using Sequelize
const { Sequelize } = require('sequelize');

// Create Sequelize instance with MySQL connection
const sequelize = new Sequelize(
    process.env.DB_NAME || 'expense_tracker', // Database name
    process.env.DB_USER || 'root',             // MySQL username
    process.env.DB_PASSWORD || '',             // MySQL password
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306,
        logging: false, // Set to console.log to see SQL queries
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

// Test database connection
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL Database connected successfully');

        // Sync all models with database (creates tables if they don't exist)
        await sequelize.sync({ alter: true });
        console.log('Database tables synchronized');
    } catch (error) {
        console.error('Unable to connect to MySQL database:', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
