const router = require("express").Router();
const notificationsController = require("../controllers/notificationsController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
  "/add-notification",
  authMiddleware,
  notificationsController.addNotification
);
router.get(
  "/all-notifications",
  authMiddleware,
  notificationsController.getAllNotifications
);
router.post(
  "/mark-as-read",
  authMiddleware,
  notificationsController.markAsRead
);
router.delete(
  "/remove-all-notifications",
  authMiddleware,
  notificationsController.deleteAllNotifications
);

module.exports = router;
