const router = require("express").Router();
const base = require("../repositories/base");

const userRoutes = require("./userRoutes");

router.get("/", async (req, res) => {
  const result = await new base().check();
  if (result.success) {
    res.status(200).send("Hi, welcome to Samurai Train Services.");
  } else {
    res.status(404).send("Cannot connect to Database");
  }
});

router.use("/users", userRoutes);

module.exports = router;
