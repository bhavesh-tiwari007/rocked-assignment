const Roster = require('../model/rosterModel');
const sequelize = require('../db/db');
const {createRosterToDb, getRosters, getRosterById, updateRosterToDb} = require('../service/rosterService');

async function addRoster(req, res) {
    try {
        const token = req.headers['x-trainer-id']
        const {title, campaign, topics, dealer, training_data, status, attendees} = req.body;
        const roster = await createRosterToDb({title, campaign, topics, dealer, training_data, status, attendees});
        res.status(201).json(roster);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function listRosters(req, res) {
    try {
        const rosters = await getRosters();
        res.status(200).json(rosters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function listRostersById (req,res){
    try{
        const roster = await getRosterById(req.params.id);
        if(!roster) res.status(404).json({message: "Roster not found"});
        res.status(200).json(roster);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

async function updateRosterById(req, res) {
    try {
        const token = req.headers['x-trainer-id']
        const roster = await getRosterById(req.params.id);
        if(!roster) res.status(404).json({message: "Roster not found"});
        const {title, campaign, topics, dealer, training_data, status, attendees} = req.body;
        roster = await updateRosterToDb({title, campaign, topics, dealer, training_data, status, attendees}, req.params.id);
        res.status(201).json(roster);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    addRoster,
    listRosters,
    listRostersById,
    updateRosterById
};
