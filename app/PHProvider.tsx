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
    posthog.init(process.env.PH_API_KEY!, {
      api_host: process.env.PH_API_HOST!
    })
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
