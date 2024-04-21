const sequelize = require('../db/db');  

async function createEmployee(req, res) {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getEmployees(req, res) {
    try {
        const employees = await Employee.findAll();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getEmployeesByDealershipId = async (dealershipId) => {
    try {
        const employees = await sequelize.query(`SELECT * FROM rpt_employees WHERE dealership_id = ${dealershipId};`);
        return employees;
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createEmployee,
    getEmployees,
    getEmployeesByDealershipId    
};
