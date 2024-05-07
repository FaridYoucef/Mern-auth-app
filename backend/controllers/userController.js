import asyncHandler from "express-async-handler";

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
  res.status(200).json({ message: "Register User " });
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
