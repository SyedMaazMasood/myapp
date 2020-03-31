const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
