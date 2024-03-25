import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "All is good!" });
});

async function start() {
  try {
    await mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster0.bcqajau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    app.listen(PORT, () => console.log(`Server started on: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
