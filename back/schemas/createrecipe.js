const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipe = new Schema({
  title: {
    type: String,
  },
  photo: {
    type: String,
  },
  directions: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  user: {
    type: String,
  },
  secret: {
    type: String,
  },
});

module.exports = mongoose.model("recipe", recipe);
