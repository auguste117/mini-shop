const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product = new Schema({
  title: {
    type: String,
  },
  photo: {
    type: String,
  },
  secret: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("product", product);
