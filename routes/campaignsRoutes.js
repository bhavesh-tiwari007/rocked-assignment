const { getCampaignsController } = require('../controller/campaignController');
const router = require('express').Router();

router.get('/campaigns', getCampaignsController);


module.exports = router;