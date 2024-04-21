const { getCampaigns } = require('../service/campaignServices');

async function getCampaignsController(req, res) {
    try {
        const campaigns = await getCampaigns();
        res.status(200).json(campaigns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getCampaignsController
};