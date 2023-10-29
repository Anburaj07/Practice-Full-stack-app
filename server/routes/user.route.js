const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

userRouter.post("/register", async (req, res) => {
    const {name,email,password}=req.body
  try {
    res.status(200).json({ msg: "A new user has been registered " });
  } catch (error) {
    res.status(400).json({ error });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    res.status(200).json({ msg: "Login Successfull !" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = { userRouter };
