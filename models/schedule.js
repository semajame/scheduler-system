// models/schedule.js
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  subject: String,
  location: String,
  description: String,
  // start: Date,
  // end: Date,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
