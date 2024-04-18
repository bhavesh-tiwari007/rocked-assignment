const Topic = require('../model/topicsModel');

async function createTopic(req, res) {
    try {
        const topic = await Topic.create(req.body);
        res.status(201).json(topic);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getTopics(req, res) {
    try {
        const topics = await Topic.findAll();
        res.status(200).json(topics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getTopicsByCampaignId(req, res) {
    try {
        const topics = await Topic.findAll({
            where: {
                campaignId: req.params.campaignId
            }
        });
        res.status(200).json(topics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createTopic,
    getTopics,
    getTopicsByCampaignId
};