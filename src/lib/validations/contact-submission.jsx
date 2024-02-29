import { z } from 'zod';

export const contactSubmissionSchema = z.object({
  name: z
    .string()
    .max(60, { message: "Name cannot be longer than 60 characters" })
    .refine(
      (value) => {
        if (value) {
          return true;
        }
        return false;
      },
      { message: "Name is required" }
    ),
  email: z.string().email(),
  message: z
    .string()
    .max(1800, { message: "Message cannot be longer than 1800 characters" })
    .refine(
      (value) => {
        if (value) {
          return true;
        }
        return false;
      },
      { message: "Message is required" }
    ),
  phone: z
    .string()
    .refine(value => {
      if (value) {
        return /^\+(?:[0-9] ?){6,14}[0-9]$/g.test(value);
      }
      return true;
    }, { message: "Invalid phone number format" })
    .optional(), // Phone is optional
});

