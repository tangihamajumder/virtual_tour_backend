import { z } from 'zod';

const createCourse = z.object({
  body: z.object({
    imgURL: z.string({ required_error: 'course image is required' }),
    title: z.string({ required_error: 'course title is required' }),
    prof: z.string({ required_error: 'course prof name is required' }),
    students: z.string({ required_error: 'course student number is required' }),
    desc: z.string({ required_error: 'course description is required' }),
  }),
});

export default createCourse;
