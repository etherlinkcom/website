import ClientLayout from './ClientLayout'
import { Analytics } from '@vercel/analytics/react'
import FathomComponent from './components/fathom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/footer'
import { GoogleTagManager } from '@next/third-parties/google'
import { CookieBanner } from './components/CookieBanner'

export const metadata = {
  metadataBase: new URL('https://etherlink.com')
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <GoogleTagManager gtmId='GTM-MQ8V746L' />
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <Analytics />
        <ClientLayout>
          <FathomComponent />
          <Navbar />
          {children}
          <Footer />
          {/* <CookieBanner /> */}
        </ClientLayout>
      </body>
    </html>
  )
}
