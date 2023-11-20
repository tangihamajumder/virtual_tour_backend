import express from 'express';
import { instructorController } from './instructor.controller.js';

const router = express.Router();

router.post(
  '/add-instructor',
  instructorController.addInstructor
);
router.get('/all-instructors', instructorController.getAllInstructors);
router.get('/:id', instructorController.getInstructorById);
router.patch('/update-instructor/:id', instructorController.updateInstructorDetails);
router.delete('/:id', instructorController.deleteInstructorById);

export const instructorRoutes = router;