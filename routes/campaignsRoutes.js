const { getCampaigns } = require('../service/campaignServices');
const router = require('express').Router();

router.get('/campaigns', getCampaigns);


module.exports = router;