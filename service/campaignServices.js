const sequelize = require('../db/db');


async function createCampaign(req, res) {
    try {
        const campaign = await Campaign.create(req.body);
        res.status(201).json(campaign);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}   

const getCampaigns = async () => {
    try {
        const campaigns = await sequelize.query("SELECT * FROM rpt_campaigns;");
        return campaigns;
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    createCampaign,
    getCampaigns
};
