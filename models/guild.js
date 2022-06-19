const mongoose = require("mongoose");

const guildSchema = mongoose.Schema({
  id: String,
  prefix: { type: String, default: "!" },
  logChannel: { type: String, default: "987038332263485500" },
  testChannel: { type: String, default: "987509460052344842" },
});

module.exports = mongoose.model("Guild", guildSchema);
