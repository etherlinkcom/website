import { Roboto } from "@next/font/google";
import localFont from 'next/font/local'
 
export const fivo_sans_heavy = localFont({ src: '../pages/FivoSans/FivoSans-Heavy.otf'})

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
