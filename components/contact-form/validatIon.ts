import { z } from "zod";
export const leadSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 characters long"),
    course: z.string().min(2, "Course must be at least 2 characters long"),
});
export type LeadFormValues = z.infer<typeof leadSchema>;
