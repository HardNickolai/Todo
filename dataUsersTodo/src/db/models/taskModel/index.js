const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskScheme = new Schema({
  login: String,
  checkBox: Boolean,
  textTask: String,
  date: Date,
});

module.exports = Task = mongoose.model("dataUsersTodo", taskScheme);
