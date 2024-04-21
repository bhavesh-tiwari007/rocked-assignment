const { getEmployeesByDealershipId } = require('../service/employeeService');

async function getEmployeesByDealershipIdController(req, res) {
    try {
        const employees = await getEmployeesByDealershipId(req.params.dealershipId);
        if (employees.length === 0) {
            res.status(404).json({ message: `No employees found for dealershipId ${req.params.dealershipId}` });
            return;
        }
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getEmployeesByDealershipIdController
};