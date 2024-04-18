const router = require('express').Router();

const { getEmployeesByDealershipId } = require('../service/employeeService');

router.get('/employees/:dealershipId', getEmployeesByDealershipId);

module.exports = router;