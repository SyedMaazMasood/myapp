const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  avatarColor: {
    type: Number,
    required: true
  },
  bio: {
    type: String
  },
  createdAt: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  },
  followers: {
    type: [String]
  },
  following: {
    type: [String]
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  passwordConfirm: {
    type: String,
    required: true
  },
  showEmail: {
    type: Boolean,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
