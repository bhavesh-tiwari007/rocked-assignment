const sequelize = require('../db/db');

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

const getTopicsByCampaignId = async (campaignId) => {
    try {
        const topics = await sequelize.query(`SELECT * FROM rpt_topics WHERE campaign_id = ${campaignId};`);
        return topics;
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createTopic,
    getTopics,
    getTopicsByCampaignId
};