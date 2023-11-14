import express from 'express';
import zodValidationHandler from '../../middlewares/zodValidationHandler.js';
import { authController } from './auth.controller.js';
import { createUser } from './auth.validation.js';

const router = express.Router();

router.post('/signup', zodValidationHandler(createUser), authController.signUp);
router.post('/sign-in', authController.signIn);

export const authRoutes = router;
