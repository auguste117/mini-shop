const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const review = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  photo: {
    type: String,
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,
  },
  user: {
    type: String,
  },
  secret: {
    type: String,
  },
});

module.exports = mongoose.model("review", review);
