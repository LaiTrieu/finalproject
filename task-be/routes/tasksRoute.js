const router = require("express").Router();
const tasksController = require("../controllers/tasksController");
const authMiddleware = require("../middlewares/authMiddleware");
const multer = require("multer");

router.post("/create-task", authMiddleware, tasksController.createTask);
router.post("/get-all-tasks", authMiddleware, tasksController.getAllTasks);
router.post("/update-task", authMiddleware, tasksController.updateTask);
router.post("/delete-task", authMiddleware, tasksController.deleteTask);

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

router.post(
  "/upload-image",
  authMiddleware,
  multer({ storage: storage }).single("file"),
  tasksController.uploadImage
);

module.exports = router;
