import { z } from 'zod';

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const createUser = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'email is required',
      })
      .refine((email) => emailRegex.test(email), {
        message: 'Invalid email format',
      }),
    firstName: z.string({
      required_error: 'First name is required',
    }),
    lastName: z.string({
      required_error: 'Last name is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
    contactNo: z.string({
      required_error: 'contact no is required',
    }),
  }),
});