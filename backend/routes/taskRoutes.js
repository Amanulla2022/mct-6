const express = require("express");
const {
  addTask,
  getTasks,
  getATaskById,
} = require("../controller/taskController");
const router = express.Router();

router.post("/task", addTask);

router.get("/tasks", getTasks);

router.get("/tasks/:taskid", getATaskById);

module.exports = router;
