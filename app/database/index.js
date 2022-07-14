const mongoose = require("mongoose");

const { urlDb } = require("../config");

mongoose.set("debug", true);
mongoose.connect(urlDb);

module.exports = mongoose.connection;
