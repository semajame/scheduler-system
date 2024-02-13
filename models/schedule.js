// models/schedule.js
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  subject: String,
  location: String,
  description: String,
  id: String,
  // from: Date,
  // to: Date,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
