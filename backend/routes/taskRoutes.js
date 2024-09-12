const express = require("express");
const {
  addTask,
  getTasks,
  stopScheduledTask,
} = require("../controller/taskController");
const router = express.Router();

router.post("/task", addTask);

router.get("/tasks", getTasks);

router.put("/task/:taskid", stopScheduledTask);

module.exports = router;
