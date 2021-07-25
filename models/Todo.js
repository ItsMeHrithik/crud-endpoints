const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Creating todo schema
const TodoSchema = new Schema({
  todotask: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Todo = mongoose.model("todos", TodoSchema);
