'use client'

import { ThemeProvider } from 'next-themes'
import './global.css'

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      {children}
    </ThemeProvider>
  )
}
