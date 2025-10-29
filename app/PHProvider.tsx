'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

export default function PHProvider({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    posthog.init('phc_9mlNa6hpPaOYJ8gWJrxAyqc7ZCvrz5KUTuH0Mv7hY0J', {
      api_host: 'https://us.i.posthog.com'
    })
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
