import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import jwt from "jsonwebtoken";
import { registerValidation } from "./validations/auth.js";
import { validationResult } from "express-validator";
import UserModel from "./models/User.js";
import bcrypt from "bcryptjs";

dotenv.config();

const PORT = process.env.PORT || 3000;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
mongoose
  .connect(
    `mongodb+srv://${USER}:${PASSWORD}@cluster0.bcqajau.mongodb.net/market?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("DB OK"))
  .catch(err => console.log("DB error", err));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/auth/register", registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      passwordHash,
      avatarUrl: req.body.avatarUrl,
    });

    const user = await doc.save();

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось зарегистрироваться",
    });
  }
});

app.listen(PORT, err => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
