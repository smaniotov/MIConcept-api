const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

exports.TodoSchema = mongoose.model('Todo', TodoSchema)