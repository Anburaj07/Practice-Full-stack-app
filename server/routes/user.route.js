const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.model");

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new UserModel({ name, email, password:hash });
      await user.save();
      res.status(200).json({ msg: "A new user has been registered " });
    });
  } catch (error) {
    console.log("error:", error);
    res.status(400).json({ error });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          let token = jwt.sign(
            { userID: user._id, userName: user.name },
            process.env.JWT_KEY
          );
          res.status(200).json({ msg: "Login Successfull !", token: token });
        }
      });
    } else {
      res.status(200).json({ msg: "Invalid  email or password !" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = { userRouter };
