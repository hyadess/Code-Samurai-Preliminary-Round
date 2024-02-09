const router = require('express').Router();
const TrainController = require('../controllers/trainController');
const trainController = new TrainController();

router.post('/', trainController.addTrain);

module.exports = router;