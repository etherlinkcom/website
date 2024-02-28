import ClientLayout from './ClientLayout'
import { Analytics } from '@vercel/analytics/react'
import FathomComponent from './components/fathom'
import Navbar from './components/navbar'
import Footer from './components/footer'

export const metadata = {
  metadataBase: new URL('https://etherlink.com')
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
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
        </ClientLayout>
      </body>
    </html>
  )
}
