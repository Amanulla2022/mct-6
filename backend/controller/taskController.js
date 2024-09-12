const Task = require("../model/taskModel");
const cron = require("node-cron");
const sendEmail = require("../services/emailServices");

const scheduleTask = async (task) => {
  cron.schedule(task.frequency, async () => {
    console.log(`Scheduled task ${task.name} is running...`);
    try {
      await sendEmail(
        task.recipientEmail,
        "Task Reminder",
        `Task ${task.name} \n\n ${task.details} executed`
      );

      task.lastExecuted = new Date();
      task.status = "Executed";
      await task.save();
    } catch (error) {
      console.error(`Error executing task ${task.name}: ${error.message}`);
    }
  });
};

const addTask = async (req, res) => {
  try {
    const { name, details, frequency, recipientEmail } = req.body;

    if (!name || !details || !recipientEmail) {
      return res.status(400).json({
        message: "Name, details, and recipient email are required!",
      });
    }

    const newTask = new Task({
      name,
      details,
      frequency,
      recipientEmail,
      status: "Pending",
    });

    await newTask.save();
    scheduleTask(newTask);

    res.status(200).json({
      message: "New task added successfully!",
      newTask,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      message: "All tasks!",
      tasks,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getATaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({
      message: "Fetched task by ID",
      task,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { addTask, getTasks, getATaskById };
