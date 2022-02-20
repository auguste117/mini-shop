const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  secret: {
    type: String,
  },
});

module.exports = mongoose.model("user", user);
