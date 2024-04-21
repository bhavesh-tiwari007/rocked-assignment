const { getTopicsByCampaignId } = require('../service/topicsService');

async function getTopicsByCampaignIdController(req, res) {
    try {
        const topics = await getTopicsByCampaignId(req.params.campaignId);
        if (topics.length === 0) {
            res.status(404).json({ message: `No topics found for campaignId ${req.params.campaignId}` });
            return;
        }
        res.status(200).json(topics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getTopicsByCampaignIdController
};