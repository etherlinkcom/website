import ClientLayout from "./ClientLayout"
import { GeistSans } from "geist/font/sans";

import { Analytics } from '@vercel/analytics/react';
import FathomComponent from "./components/fathom";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Analytics />
        <ClientLayout>
          <FathomComponent />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}



