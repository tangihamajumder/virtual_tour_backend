import express from 'express';
import { authController } from './auth.controller.js';

const router = express.Router();

router.post('/signup', authController.signUp);
// router.post('/sign-in',  );


export const authRoutes = router;