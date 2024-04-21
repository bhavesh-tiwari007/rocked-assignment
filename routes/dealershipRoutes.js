const router = require('express').Router();

const { getDealershipsController } = require('../controller/dealershipcontroller');

router.get('/dealerships', getDealershipsController);


module.exports = router;