import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import localFont from 'next/font/local'

const fivo_sans = localFont({ src: './FivoSans/FivoSans-Medium.otf' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      style={{
        backgroundColor: '#F3F3E9'
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
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-4JXNEND0PX'
        ></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4JXNEND0PX');
          `}
        </Script>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  )
}
