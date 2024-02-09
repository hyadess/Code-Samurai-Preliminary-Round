const Controller = require('./base');
const TrainRepository = require('../repositories/trainRepository');
const trainRepository = new TrainRepository();
const StopRepository = require('../repositories/stopRepository');
const stopRepository = new StopRepository();
class TrainController extends Controller {
    constructor() {
        super();
    }

    addTrain = async (req, res) => {
        this.handleRequest(res, async () => {
            const { train_id, train_name,capacity,stops } = req.body;
            const result = await trainRepository.addTrain(train_id, train_name,capacity);
            if (result.success) {
                for (let i = 0; i < stops.length; i++) {
                    const {station_id,arrival_time,departure_time,fare} = stops[i];
                    await stopRepository.addStop(train_id,station_id,arrival_time,departure_time,fare);
                }
            }
            const data = { 
                train_id: result.data[0].train_id,
                train_name: result.data[0].train_name,
                capacity: result.data[0].capacity,
                service_start: stops[0].departure_time,
                service_ends: stops[stops.length-1].arrival_time,
                num_stations: stops.length

            }
            this.handleResponse(result, result.success?data:null, res, 201, 500);
        }
        );
        
        
    };

    
}

module.exports = TrainController;