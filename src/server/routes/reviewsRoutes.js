import express from 'express';
import { ReviewController } from '../controllers/index.js';

const router = express.Router();
router.get('/', ReviewController.getReviews);
router.post('/', ReviewController.createReview);
router.get('/:id', ReviewController.getReviewsForProduct);

export default router;