import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  registerValidation,
  loginValidation,
  productCreateValidation,
} from "./validation.js";
import { UserController, ProductController } from "./controllers/index.js";
import { checkAuth, handleValidationErrors } from "./utils/index.js";
import cors from "cors";

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

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
app.get("/auth/me", checkAuth, UserController.getMe);

app.get("/products", ProductController.getAll);
app.get("/products/:id", ProductController.getOne);
app.post(
  "/products",
  checkAuth,
  productCreateValidation,
  handleValidationErrors,
  ProductController.create
);
app.delete("/products/:id", checkAuth, ProductController.remove);
app.patch(
  "/products/:id",
  checkAuth,
  productCreateValidation,
  handleValidationErrors,
  ProductController.update
);

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.listen(PORT, err => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
