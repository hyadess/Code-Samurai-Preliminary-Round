const router = require('express').Router();
const StationController = require('../controllers/stationController');
const stationController = new StationController();

router.post('/', stationController.addStation);

module.exports = router;