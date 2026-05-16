import "server-only";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  role: {
    required: true,
    type: String,
  },
  phone: {
    required: false,
    type: String,
  },
  bio: {
    type: String,
    default: "",
  },
  socialMedia: {
    github: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    twitter: {
      type: String,
      default: "",
    },

    portfolio: {
      type: String,
      default: "",
    },

    youtube: {
      type: String,
      default: "",
    },
  },
  profilePicture: {
    type: String,
    default: "https://i.pravatar.cc",
  },
  designation: {
    type: String,
    default: "",
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
