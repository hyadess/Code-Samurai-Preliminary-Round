const Controller = require("./base");
const TrainRepository = require("../repositories/trainRepository");
const trainRepository = new TrainRepository();
const StopRepository = require("../repositories/stopRepository");
const stopRepository = new StopRepository();
class TicketController extends Controller {
  constructor() {
    super();
  }

  purchaseTicket = async (req, res) => {
    this.handleRequest(res, async () => {
      const { wallet_id, time_after, station_from, station_to } = req.body;
      // pending implementation
      const result = { success: true };
      if (result.success) {
        res.status(201).send({
          ticket_id: 101,
          balance: 43,
          wallet_id: 3,
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
              train_id: 2,
              departure_time: null,
              arrival_time: "12:25",
            },
          ],
        });
      } else {
        res
          .status(403)
          .send(
            `no ticket available for station: ${station_from} to station: ${station_to}`
          );
      }
    });
  };
}

module.exports = TicketController;
