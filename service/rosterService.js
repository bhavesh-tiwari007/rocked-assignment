const Roster = require('../model/rosterModel');


async function createRosterToDb({title, campaign, topics, dealer, training_data, status, attendees, trainer_id}) {
    try {
        const roster = await Roster.create({title, campaign, topics, dealer, training_data, status, attendees, trainer_id});
        res.status(201).json(roster);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getRosters(req, res) {
    try {
        const rosters = await Roster.findAll();
        res.status(200).json(rosters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getRosterById(id){
    try{
        const roster = await Roster.findOne({
            where: {
                id: id
            }
        });
        return roster;
    }catch(error){
        return error;
    }

}

async function updateRosterToDb({title, campaign, topics, dealer, training_data, status, attendees}, id){
    try{
        const roster = await Roster.update({title, campaign, topics, dealer, training_data, status, attendees}, {
            where: {
                id: id
            }
        });
        return roster;
    }catch(error){
        return error;
    }
}

module.exports = {
    createRosterToDb,
    getRosters,
    getRosterById,
    updateRosterToDb
};