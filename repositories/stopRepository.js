const Repository = require('./base');

class StopRepository extends Repository {
    constructor() {
        super();
    }

    addStop = async (train_id,station_id,arrival_time,departure_time,fare) => {
        const query = `
            INSERT INTO stops (train_id, station_id, arrival_time, departure_time,fare)
            VALUES ($1 ,$2, $3, $4, $5)
            RETURNING *;
            `;
        const params = [train_id, station_id, arrival_time, departure_time,fare];
        const result = await this.query(query, params);
        return result;
      };
    getStopsByStationId = async (station_id) => {
        const query = `
            SELECT train_id,arrival_time,departure_time
             FROM stops WHERE station_id = $1;
            `;
        const params = [station_id];
        const result = await this.query(query, params);
        return result;
    };

    





}

module.exports = StopRepository;