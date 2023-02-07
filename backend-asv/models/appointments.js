const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  Titel: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },

  time: {
    type: String,
  },
  location: {
    type: String,
  },
});

module.exports = Appointments = mongoose.model("date", AppointmentSchema);
