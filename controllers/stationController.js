const Controller = require('./base');
const StationRepository = require('../repositories/stationRepository');
const stationRepository = new StationRepository();

class StationController extends Controller {
    constructor() {
        super();
    }

    addStation = async (req, res) => {
       this.handleRequest(res, async () => {
            const { station_id, station_name, longitude, latitude } = req.body;
            const result = await stationRepository.addStation(station_id, station_name, longitude, latitude);
            this.handleResponse(result, result.success?result.data[0]:null, res, 201, 500);
        }
        );
        
        
    };
}

module.exports = StationController;