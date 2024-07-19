import express from 'express';
import { FavoriteController } from '../controllers/index.js';
import { checkAuth } from '../utils/index.js';
const router = express.Router();
router.post('/', checkAuth, FavoriteController.addFavorite);
router.delete('/:id', checkAuth, FavoriteController.removeFavorite);
router.get('/', checkAuth, FavoriteController.getFavorites);

export default router;