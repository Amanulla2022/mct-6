const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    details: { type: String, required: true },
    status: { type: String, default: "Scheduled" },
    frequency: { type: String, required: true },
    recipientEmail: { type: String, required: true },
    lastExecuted: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
