import { Roboto } from '@next/font/google'
import localFont from 'next/font/local'

export const fivo_sans_heavy = localFont({
  src: '../pages/FivoSans/FivoSans-Heavy.otf'
})

export const fivo_sans_medium = localFont({
  src: '../pages/FivoSans/FivoSans-Medium.otf'
})

export const fivo_sans_light = localFont({
  src: '../pages/FivoSans/FivoSans-Light.otf'
})

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})
