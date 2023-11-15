import express from 'express';
import { blogController } from './blogs.controller.js';

const router = express.Router();

router.post(
  '/add-blog',
  blogController.addBlogs
);
router.get('/all-blogs', blogController.getAllBlogs);

export const blogsRoutes = router;