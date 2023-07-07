import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Noto_Sans } from '@next/font/google'

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={noto_sans.className}>
      <ChakraProvider
        theme={extendTheme({
          breakpoints: {
            sm: '570px', // Mobile -> Tablet
            md: '900px', // Tablet -> Desktop
            lg: '1440px', // Rest can for the most part be ignored
            xl: '1800px',
            '2xl': '2000px'
          }
        })}
      >
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  )
}
