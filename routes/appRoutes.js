const router = require("express").Router();
const base = require("../repositories/base");


router.get("/", async (req, res) => {
  const result = await new base().check();
  if (result.success) {
    res.status(200).send("Hi, welcome to Bits Unplugged");
  } else {
    res.status(404).send("Cannot connect to Database");
  }
});


module.exports = router;
