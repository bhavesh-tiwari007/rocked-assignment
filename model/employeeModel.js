const {DataTypes} = require('sequelize');
const sequelize = require('../db/db');
const Dealership = require('./dealershipModel');

const Employee = sequelize.define('rpt_employees', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dealership_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    profile_pic: {
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

Dealership.hasMany(Employee, {
    foreignKey: 'dealership_id'
});
Employee.belongsTo(Dealership);

module.exports = Employee;