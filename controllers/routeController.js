const Controller = require("./base");
const RouteRespository = require("../repositories/routeRepository");
const routeRepository = new RouteRespository();

class RouteController extends Controller {
  constructor() {
    super();
  }

  planRoutes = async (req, res) => {
    this.handleRequest(res, async () => {
      const { from, to, optimize } = req.query;
      const result = await routeRepository.planRoutes(from, to, optimize);
      if (result.success) {
        res.status(200).send(result.data);
      } else {
        res
          .status(403)
          .send(`no routes available for station: ${from} to station: ${to}`);
      }
    });
  };
}

module.exports = RouteController;
