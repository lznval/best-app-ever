import express from 'express';
import { OrderController } from '../controllers/index.js';

const router = express.Router();

router.get('/', OrderController.getOrders);
router.post('/', OrderController.createOrder);

export default router;