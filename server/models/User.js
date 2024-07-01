const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  value: { type: String, required: true },
}, { _id: true });

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ }, 
  password: { type: String, required: true },
  tasks: {
    todo: [taskSchema],
    inProgress: [taskSchema],
    done: [taskSchema]
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
