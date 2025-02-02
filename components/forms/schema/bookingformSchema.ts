import { addDays } from 'date-fns';
import { z } from 'zod';
const endDate = () => {
  const date = new Date();
  return new Date(date.setDate(date.getDate() + 30));
};
export const BookingformSchema = z.object({
  room: z.string(),
  descritption: z.string().trim().optional(),
  date: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .refine(
      (data) => data.from > addDays(new Date(), -1),
      'Start date must be in the future'
    ),
  numGuests: z.string().min(1),
  breakfastIncluded: z.boolean().optional(),
});
