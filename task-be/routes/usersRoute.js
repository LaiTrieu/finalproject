// routes/userRoutes.js

const router = require("express").Router();
const userController = require("../controllers/usersController");
const authMiddleware = require("../middlewares/authMiddleware");

// Register a new user
router.post("/register", userController.registerUser);

// Login a user
router.post("/login", userController.loginUser);

// Get logged in user
router.get("/get-logged-in-user", authMiddleware, userController.getLoggedInUser);

module.exports = router;
