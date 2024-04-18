const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");
dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql', // Change this to the appropriate database dialect if using a different one
    });

sequelize.sync()

module.exports = sequelize;