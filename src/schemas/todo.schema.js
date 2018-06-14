const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
    min: 0,
    max: 50
  },
  stars: {
    type: Number,
    default: 0
  },
  content: {
    type: String,
    required: true,
    min: 0,
    max: 255
  },
  createdAt: {
    default: Date.now(),
    type: Date
  }
})

exports.TodoSchema = mongoose.model('Todo', TodoSchema)