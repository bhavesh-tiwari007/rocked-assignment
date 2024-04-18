const {DataTypes} = require('sequelize');
const sequelize = require('../db/db');

const Dealership = sequelize.define('rpt_dealerships', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Dealership;