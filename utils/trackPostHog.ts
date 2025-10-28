import posthog from 'posthog-js'

export type EventProps = {
  name: string
}

export const trackPostHog = (event: string) => {
  posthog.capture(event)
}
