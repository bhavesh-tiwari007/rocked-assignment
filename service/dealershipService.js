const Dealership = require('../model/dealershipModel');


async function createDealership(req, res) {
    try {
        const dealership = await Dealership.create(req.body);
        res.status(201).json(dealership);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getDealerships(req, res) {
    try {
        const dealerships = await Dealership.findAll();
        res.status(200).json(dealerships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createDealership,
    getDealerships
};