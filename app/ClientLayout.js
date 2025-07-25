'use client'

import { ThemeProvider } from 'next-themes'
import './global.css'
import { TagsContext } from '../utils/airtable/TagsContext'

export default function ClientLayout({ children, tagsMap }) {
  return (
    <TagsContext.Provider value={tagsMap}>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        {children}
      </ThemeProvider>
    </TagsContext.Provider>
  )
}
