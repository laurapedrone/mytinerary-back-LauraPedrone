import User from "../Models/User.js";
import bcrypt from "bcryptjs";

const authController = {
  signUp: async (req, res, next) => {
    let success = true;

    try {
      const passwordHash = bcrypt.hashSync(req.body.password, 10);
      console.log(passwordHash);
      let body = {...req.body}
      req.body.password = passwordHash;

      const newUser = await User.create(body);

      return res.status(201).json({
        userData: newUser,
        success,
        message: "Sign up successfully",
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
};

export default authController;
