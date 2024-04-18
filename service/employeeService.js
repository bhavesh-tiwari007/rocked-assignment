const Employee = require('../model/employeeModel');

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

async function getEmployeesByDealershipId(req, res) {
    try {
        const employees = await Employee.findAll({
            where: {
                dealershipId: req.params.dealershipId
            }
        });
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createEmployee,
    getEmployees,
    getEmployeesByDealershipId    
};
