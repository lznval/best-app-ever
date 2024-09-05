import express from 'express';
import { registerValidation, loginValidation } from '../validation.js';
import { SellerController } from '../controllers/index.js';
import { checkAuth, handleValidationErrors } from '../utils/index.js';

const router = express.Router();
router.post('/login', loginValidation, handleValidationErrors, SellerController.login);
router.post('/register', registerValidation, handleValidationErrors, SellerController.register);
router.get('/me', checkAuth, SellerController.getMe);

export default router;
