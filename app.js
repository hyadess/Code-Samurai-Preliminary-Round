const express = require("express");
const app = express();

const cors = require("cors");

// const fileUpload = require("express-fileupload");
const appRoutes = require("./routes/appRoutes");

// app.use(cors());
app.use(express.json());

app.use("/api", appRoutes);

module.exports = { app };
