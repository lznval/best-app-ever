import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { registerValidation } from "./validations/auth.js";

import checkAuth from "./utils/checkAuth.js";

import * as UserController from "./controllers/UserController.js";

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

app.post("/auth/login", UserController.login);

app.post("/auth/register", registerValidation, UserController.register);

app.get("/auth/me", checkAuth, UserController.getMe);

app.listen(PORT, err => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
