import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { checkAuth } from './utils/index.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import categoriesRoutes from './routes/categoriesRoutes.js';
import sellerRoutes from './routes/sellerRoutes.js';
import ordersRoutes from './routes/ordersRoutes.js';
import reviewsRoutes from './routes/reviewsRoutes.js';
import favoritesRoutes from './routes/favoritesRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
mongoose
  .connect(
    `mongodb+srv://${USER}:${PASSWORD}@cluster0.bcqajau.mongodb.net/market?retryWrites=true&w=majority&appName=Cluster0`,
  )
  .then(() => console.log('DB OK'))
  .catch((err) => console.log('DB error', err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.use('/auth', userRoutes);
app.use('/products', productsRoutes);
app.use('/categories', categoriesRoutes);
app.use('/seller', sellerRoutes);
app.use('/orders', ordersRoutes);
app.use('/reviews', reviewsRoutes);
app.use('/favorites', favoritesRoutes);

app.post('/upload', checkAuth, upload.array('images', 10), (req, res) => {
  const files = req.files.map((file) => `/uploads/${file.filename}`);
  res.json({
    urls: files,
  });
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server OK');
});
