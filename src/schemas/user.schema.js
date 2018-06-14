const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    min: 8,
    max: 20,
    required: true,
    unique: true,
    index: true
  },
  name: {
    type: String,
    min: 5,
    max: 50,
    required: true
  },
  lastName: {
    type: String,
    min: 5,
    max: 5,
    required: true
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
    lowercase: true
  }
})

module.exports = mongoose.model("User", UserSchema)