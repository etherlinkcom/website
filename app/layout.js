import ClientLayout from "./ClientLayout"
import Link from "next/link";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <Link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
        <ClientLayout>
          {children}
        </ClientLayout>
        </body>
      </html>
    );
}



