// routes/notificationRoutes.js

const router = require("express").Router();
const notificationController = require("../controllers/notificationsController");
const authMiddleware = require("../middlewares/authMiddleware");

// Add a notification
router.post("/add-notification", authMiddleware, notificationController.addNotification);

// Get all notifications
router.get("/get-all-notifications", authMiddleware, notificationController.getAllNotifications);

// Mark notification as read
router.post("/mark-as-read", authMiddleware, notificationController.markAsRead);

// Delete all notifications
router.delete("/delete-all-notifications", authMiddleware, notificationController.deleteAllNotifications);

module.exports = router;
