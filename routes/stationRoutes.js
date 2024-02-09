const router = require('express').Router();
const StationController = require('../controllers/stationController');
const stationController = new StationController();

router.post('/', stationController.addStation);
router.get('/', stationController.getStations);
router.get('/:station_id/trains', stationController.getStopsByStationId);

module.exports = router;