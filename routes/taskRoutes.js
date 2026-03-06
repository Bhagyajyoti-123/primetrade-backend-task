const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const taskController = require("../controllers/taskController");

router.post("/", verifyToken, taskController.createTask);

router.get("/", verifyToken, taskController.getTasks);

router.put("/:id", verifyToken, taskController.updateTask);

router.delete("/:id", verifyToken, taskController.deleteTask);

module.exports = router;