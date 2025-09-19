'use client'

import { EventAction, trackPostHog } from '../../utils/trackPostHog'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const PageInitTracker = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    trackPostHog('$pageview', {
      action: EventAction.PAGEVIEW
    })
  }, [pathname, searchParams])

  return null
}
