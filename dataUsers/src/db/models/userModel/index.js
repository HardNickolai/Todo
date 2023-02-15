const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScheme = new Schema({
    login: String,
    password: String,
    dateRegistr: Date
  });

module.exports = User = mongoose.model('dataUsersTodo', userScheme);