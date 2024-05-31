import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  registerValidation,
  loginValidation,
  productCreateValidation,
} from "./validation.js";

import checkAuth from "./utils/checkAuth.js";

import * as UserController from "./controllers/UserController.js";
import * as ProductController from "./controllers/ProductController.js";

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

app.post("/auth/login", loginValidation, UserController.login);
app.post("/auth/register", registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

app.get("/products", ProductController.getAll);
app.get("/products/:id", ProductController.getOne);
app.post(
  "/products",
  checkAuth,
  productCreateValidation,
  ProductController.create
);
app.delete("/products/:id", checkAuth, ProductController.remove);
app.patch("/products/:id", ProductController.update);

app.listen(PORT, err => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
