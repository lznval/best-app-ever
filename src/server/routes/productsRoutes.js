import express from 'express';
import {
  checkAuth,
  handleValidationErrors
} from '../utils/index.js';
import { productCreateValidation } from '../validation.js';
import {ProductController} from '../controllers/index.js'

const router = express.Router();

router.get('/products', ProductController.getAll);
router.get('/products/:id', ProductController.getOne);
router.post(
  '/products',
  checkAuth,
  productCreateValidation,
  handleValidationErrors,
  ProductController.create,
);
router.delete('/products/:id', checkAuth, ProductController.remove);
router.patch(
  '/products/:id',
  checkAuth,
  productCreateValidation,
  handleValidationErrors,
  ProductController.update,
);

export default router;