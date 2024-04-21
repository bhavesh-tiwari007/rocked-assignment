const { getTopicsByCampaignIdController } = require('../controller/topicController');
const router = require('express').Router();
const {authenticate} = require('../middleware/aunthenticate');

router.get('/topics/:campaignId',authenticate, getTopicsByCampaignIdController);


module.exports = router;