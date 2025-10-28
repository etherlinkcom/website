'use client'

import { trackPostHog } from '../../utils/trackPostHog'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const PageInitTracker = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    trackPostHog('$pageview')
  }, [pathname, searchParams])

  return null
}
