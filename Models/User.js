import {Schema, model } from "mongoose";

const userSchema = Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String},
    lastName: { type: String},
    photoURL: {
      type: String,
      default:
        "https://th.bing.com/th/id/OIP.kLmwq2m2gZFoelWigYk90wHaHa?pid=ImgDet&rs=1",
    },
    country: { type: String},
    verified: { type: Boolean, default: false},
  },
  {
    timestamps: true,
  }
);

const User = model('user', userSchema);

export default User;
