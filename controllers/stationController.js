const Controller = require('./base');
const StationRepository = require('../repositories/stationRepository');
const stationRepository = new StationRepository();
const StopRepository = require('../repositories/stopRepository');
const stopRepository = new StopRepository();
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
    getStations = async (req, res) => {
        this.handleRequest(res, async () => {
            const result = await stationRepository.getStations();
            const data={
                stations:result.data
            
            }
            this.handleResponse(result, result.success?data:null, res, 200, 500);
        });
    }
    getStopsByStationId = async (req, res) => {
        this.handleRequest(res, async () => {
            const { station_id } = req.params;
            const result = await stopRepository.getStopsByStationId(station_id);
            const data={
                station_id:station_id,
                trains:result.data
            }

            this.handleResponse(result, result.success?data:null, res, 200, 500);
        });
    };
}

module.exports = StationController;