const Campaign = require('../model/campaignModel');


async function createCampaign(req, res) {
    try {
        const campaign = await Campaign.create(req.body);
        res.status(201).json(campaign);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}   

async function getCampaigns(req, res) {
    try {
        const campaigns = await Campaign.findAll();
        if (!campaigns) {
            return res.status(404).json({ message: 'Campaigns not found' });
        }
        res.status(200).json(campaigns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    createCampaign,
    getCampaigns
};
