import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const authController = {
  signUp: async (req, res, next) => {
    let success = true;

    try {
      const passwordHash = bcrypt.hashSync(req.body.password, 10);
      console.log(passwordHash);
      let body = { ...req.body };
      body.password = passwordHash;

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
  signIn: async (req, res, next) => {
    try {
      let { email: emailBody, password } = req.body;

      const userInDB = await User.findOne({ email: emailBody });

      if (!userInDB) {
        throw new Error("No user exists with this email");
      }

      let passwordValidated = bcrypt.compareSync(password, userInDB.password);

      if (!passwordValidated) {
        throw new Error("The email/password is incorrect");
      }

      let { email, photoURL, country } = userInDB;
      const token = jwt.sign({ email, photoURL }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });

      return res.status(200).json({
        success: true,
        userData: { email, photoURL, country },
        token: token,
        message: "Sign In successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error:err})
    }
  },
  loginWithToken: async(req, res) =>{
    console.log(req.user)

    res.status(200).json({
      success: true,
      userData: req.user,
      message: "Sign In successfully",

    });
  }
};

export default authController;
