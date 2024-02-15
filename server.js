const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/schedRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const dbURI =
  "mongodb+srv://jamesanquillano:aquarios123@nodetuts.cianuxm.mongodb.net/sched-api?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(5174, () => {
      console.log("Server is running on port 5174");
    });
  })
  .catch((err) => console.log(err));

app.use("/", router);
