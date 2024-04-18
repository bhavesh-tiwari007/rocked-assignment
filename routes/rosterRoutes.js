const router = require('express').Router();

const { addRoster, listRosters,listRostersById, updateRosterById } = require('../controller/rosterController');


router.post('/rosters', addRoster);
router.get('/allrosters', listRosters);
router.get('/rosters:id', listRostersById)
router.put('/rosters:id', updateRosterById)



module.exports = router;