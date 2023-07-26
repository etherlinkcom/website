import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Head from 'next/head'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import localFont from 'next/font/local'

const fivo_sans = localFont({ src: './FivoSans/FivoSans-Medium.otf' })

export default function App({ Component, pageProps }: AppProps) {
  const SITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL

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
        <Head>
          <title>Etherlink</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta
            name='description'
            content='Built on the robust Tezos blockchain, Etherlink empowers businesses
          and developers to create a new era of open, secure, and scalable
          applications.'
          />
          <link rel='icon' href='/Favicon_144w.png' sizes='any' />
          <link
            rel='canonical'
            href='https://www.etherlink.com'
            key='canonical'
          />
          <meta key='og.url' property='og:url' content={SITE_URL} />
          <meta
            key='og.site_name'
            property='og:site_name'
            content='Etherlink'
          />
        </Head>

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
