// src/fonts/index.ts
import { Baloo_2, Signika } from 'next/font/google';

export const baloo2 = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo-2',
});

export const signika = Signika({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-signika',
});
