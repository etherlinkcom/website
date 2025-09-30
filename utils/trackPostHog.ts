import posthog from 'posthog-js'

export enum EventAction {
  BUTTON_CLICK = 'button click',
  PAGEVIEW = 'pageview'
}

export type PostHogProps = {
  button_label?: string
  action: EventAction
  section?: string
}

export type EventProps = {
  name: string
  props: PostHogProps
}

export const trackPostHog = (event: string, props: PostHogProps) => {
  posthog.capture(event, props)
}
