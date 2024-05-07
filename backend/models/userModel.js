import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ElementInternals: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: trusted,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
