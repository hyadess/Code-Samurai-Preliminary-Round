const router = require("express").Router();
const RouteController = require("../controllers/routeController");
const routeController = new RouteController();

router.get("/", routeController.planRoutes);
module.exports = router;
