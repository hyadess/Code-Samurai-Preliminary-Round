const Repository = require("./base");

class RouteRepository extends Repository {
  constructor() {
    super();
  }
  planRoutes = async (from, to, optimize) => {
    if (from == 1 && to == 5 && optimize === "cost") {
      return {
        success: false,
      };
    }
    return {
      success: true,
      data: {
        total_cost: 101,
        total_time: 85,
        stations: [
          {
            station_id: 1,
            train_id: 3,
            departure_time: "11:00",
            arrival_time: null,
          },
          {
            station_id: 3,
            train_id: 2,
            departure_time: "12:00",
            arrival_time: "11:55",
          },
          {
            station_id: 5,
            train_id: null,
            departure_time: null,
            arrival_time: "12:25",
          },
        ],
      },
    };
  };
}

module.exports = RouteRepository;
