import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import localFont from 'next/font/local'

const fivo_sans = localFont({ src: './FivoSans/FivoSans-Medium.otf' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      style={{
        backgroundColor: '  #F3F3E9'
      }}
      className={fivo_sans.className}
    >
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
