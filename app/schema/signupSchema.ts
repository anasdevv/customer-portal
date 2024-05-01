import { getCountries } from '@/lib/constants';
import { z } from 'zod';
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
export const signupSchema = z.object({
  name: z.string().trim().min(1, {
    message: 'Required',
  }),
  email: z.string().trim().email(),
  phoneNumber: z
    .string({
      required_error: 'phone number is required',
    })
    .trim()
    .regex(phoneRegex, 'Invalid phone number'),
  password: z.string().trim().min(6),
  country: z
    .string()
    .refine((value) => getCountries().find((c) => c.value === value), {
      message: 'Please select a valid country',
    }),
});
export type IUserSignup = z.infer<typeof signupSchema> & {
  countryFlag?: string;
};
