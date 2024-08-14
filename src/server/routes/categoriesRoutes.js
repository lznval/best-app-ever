import express from 'express';
import { handleValidationErrors } from '../utils/index.js';
import { CategoriesController } from '../controllers/index.js';
import { categoryCreateValidation } from '../validation.js';
const router = express.Router();

router.get('/', CategoriesController.getCategories);
router.post(
  '/',
  categoryCreateValidation,
  handleValidationErrors,
  CategoriesController.createCategories,
);

export default router;
