const router = require('express').Router();

const { getEmployeesByDealershipIdController } = require('../controller/employeeController');

router.get('/employees/:dealershipId', getEmployeesByDealershipIdController);

module.exports = router;