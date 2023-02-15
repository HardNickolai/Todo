const express = require("express");
const router = express.Router();

const {
  getDataUserTasks,
  createNewTask,
  changeTaskInfo,
  deleteTask,
} = require("../controllers/task.controller");

router.get("/tasks", getDataUserTasks);
router.post("/task", createNewTask);
router.put("/task", changeTaskInfo);
router.delete("/task", deleteTask);

module.exports = router;
