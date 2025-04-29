import { z } from "zod";

export const contactSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long." })
    .max(50, { message: "First name cannot exceed 50 characters." }),

  last_name: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long." })
    .max(50, { message: "Last name cannot exceed 50 characters." }),

  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(50, { message: "Email cannot exceed 50 characters." }),

  country: z.string().optional(),

  phone: z.string().optional(),

  budget: z.string(),

  service: z.enum(["Software Solution", "Graphic Design", "Full Package"], {
    message: "Please select a valid service.",
  }),

  details: z.string().optional(),
});
