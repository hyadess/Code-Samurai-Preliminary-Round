const router = require("express").Router();
const TicketController = require("../controllers/ticketController");
const ticketController = new TicketController();

router.post("/", ticketController.purchaseTicket);
module.exports = router;
