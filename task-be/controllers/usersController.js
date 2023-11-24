// controllers/userController.js

const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      throw new Error("User already exists");
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    // Save the user
    const user = new User(req.body);
    await user.save();
    res.send({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    // Check if the user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("User does not exist");
    }

    // Check if the password is correct
    const passwordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordCorrect) {
      throw new Error("Invalid password");
    }

    // Create and assign a token
    const token = jwt.sign({ userId: user._id }, process.env.jwt_secret, {
      expiresIn: "1d",
    });

    res.send({
      success: true,
      data: token,
      message: "User logged in successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getLoggedInUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });

    // Remove the password from the user object
    user.password = undefined;

    res.send({
      success: true,
      data: user,
      message: "User fetched successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getLoggedInUser,
};
