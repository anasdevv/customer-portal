import { z } from 'zod';

export const reviewSchema = z.object({
  rating: z.string(),
  comment: z.string().trim().nullable(),
});
