const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const homeRoutes = require("./routes/index");
const movieRoutes = require("./routes/movies");

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use("/api/", homeRoutes);
app.use("/api/movies", movieRoutes);

module.exports = app;
