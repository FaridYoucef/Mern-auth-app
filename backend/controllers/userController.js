import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// auth user
// route  POST /api/users/auth
// Public

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User hey" });
});

// register a new user
// route  POST /api/users/
// Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// logout  user
// route  POST /api/users/
// Public

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User " });
});

//Get user profile
// route  Get/api/users/profile
// Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

//update user profile
// route  PUT /api/users/profile
// Public

const updateUderProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Profile updated" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUderProfile,
};
