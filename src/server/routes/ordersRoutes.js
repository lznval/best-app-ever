import express from 'express';
import { OrderController } from '../controllers/index.js';
import { checkAuth, handleValidationErrors } from '../utils/index.js';

const router = express.Router();

router.get('/', checkAuth, handleValidationErrors, OrderController.getOrders);
router.post(
  '/',
  checkAuth,
  handleValidationErrors,
  OrderController.createOrder,
);

export default router;
