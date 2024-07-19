import express from 'express';
import {
  checkAuth,
  handleValidationErrors
} from '../utils/index.js';
import { productCreateValidation } from '../validation.js';
import {ProductController} from '../controllers/index.js'

const router = express.Router();

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getOne);
router.post(
  '/',
  checkAuth,
  productCreateValidation,
  handleValidationErrors,
  ProductController.create,
);
router.delete('/:id', checkAuth, ProductController.remove);
router.patch(
  '/:id',
  checkAuth,
  productCreateValidation,
  handleValidationErrors,
  ProductController.update,
);

export default router;