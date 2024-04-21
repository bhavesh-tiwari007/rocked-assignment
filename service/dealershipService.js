const sequelize = require('../db/db');


async function createDealership(req, res) {
    try {
        const dealership = await Dealership.create(req.body);
        res.status(201).json(dealership);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getDealerships = async () => {
    try {
        const dealerships = await sequelize.query("SELECT * FROM rpt_dealerships;");
        return dealerships;
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createDealership,
    getDealerships
};