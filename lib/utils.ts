import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const FLAG_BASE_URL = 'https://flagsapi.com/';
export const getCountryFlagUrl = (code: string) => {
  return `${FLAG_BASE_URL}${code.toUpperCase()}/flat/64.png`;
};
