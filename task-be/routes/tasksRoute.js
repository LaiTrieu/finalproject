// routes/taskRoutes.js

const router = require("express").Router();
const taskController = require("../controllers/tasksController");
const authMiddleware = require("../middlewares/authMiddleware");
const multer = require("multer");

// Create a task
router.post("/create-task", authMiddleware, taskController.createTask);

// Get all tasks
router.post("/get-all-tasks", authMiddleware, taskController.getAllTasks);

// Update task
router.post("/update-task", authMiddleware, taskController.updateTask);

// Delete task
router.post("/delete-task", authMiddleware, taskController.deleteTask);

// Create multer storage
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// Upload image
router.post("/upload-image", authMiddleware, multer({ storage: storage }).single("file"), taskController.uploadImage);

module.exports = router;
