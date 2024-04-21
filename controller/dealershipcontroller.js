const {getDealerships} = require('../service/dealershipService');


async function getDealershipsController(req, res) {
    try {
        const dealerships = await getDealerships();
        res.status(200).json(dealerships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getDealershipsController
};