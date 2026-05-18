const express = require("express");
const router = express.Router();

const tasks = require("../data/tasks");
const validateTask = require("../utils/taskValidation");

router.get("/", (req, res) => {
  return res.status(200).json(tasks);
});

router.post("/", (req, res) => {
  const { title } = req.body;

  const task = { title };

  if (!validateTask(task)) {
    return res.status(400).json({
      error: "Invalid task title",
    });
  }

  tasks.push(task);

  return res.status(201).json(task);
});

module.exports = router;