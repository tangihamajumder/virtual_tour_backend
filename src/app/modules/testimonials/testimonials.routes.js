import express from 'express';
import { testimonialController } from './testimonials.controller.js';

const router = express.Router();

router.post(
  '/add-testimonial',
  testimonialController.addTestimonials
);
router.get('/all-testimonials', testimonialController.getAllTestimonials);


export const testimonialRoutes = router;