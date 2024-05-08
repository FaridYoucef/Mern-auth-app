import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const generateToken = (res, userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
  } catch (error) {
    res.status(500).send("Failed to generate token");
  }
};

export default generateToken;
