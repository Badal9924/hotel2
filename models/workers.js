const mongoose = require("mongoose");
require('../db');
const workersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  age: {
    type: Number,
    require: true,
  },

  work: {
    type: String,
    enum: ["sef", "waiter", "manager"],
  },

  mobile: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },

  salary: {
    type: Number,
    require: true,
  },
});

const workers = mongoose.model("workers", workersSchema);

module.exports = workers;
