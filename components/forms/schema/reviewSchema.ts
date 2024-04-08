import { z } from 'zod';

export const reviewSchema = z.object({
  rating: z.string(),
  review: z.string().trim().nullable(),
});
