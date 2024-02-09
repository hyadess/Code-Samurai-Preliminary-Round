
const Repository = require('./base');


class StationRepository extends Repository {
    constructor() {
        super();
    }
    addStation = async (station_id, station_name,longitude,latitude) => {
        const query = `
            INSERT INTO stations (station_id, station_name, longitude, latitude)
            VALUES ($1 ,$2, $3, $4)
            RETURNING *;
            `;
        const params = [station_id, station_name, longitude, latitude];
        const result = await this.query(query, params);
        return result;
    };
    
}

module.exports = StationRepository;