const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require('cors');

const employeeRoute = require("./routes/employeeRoute");
const scheduleRoute = require("./routes/scheduleRoute");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/employee", employeeRoute);
app.use("/api/schedule", scheduleRoute);

// database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
