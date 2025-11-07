import type { Metadata } from 'next'
import { OnrampClient } from './OnrampClient'

export const metadata: Metadata = {
  title: 'Onramp funds to Etherlink | Etherlink',
  description:
    'Explore the available options to onramp your funds to Etherlink, including exchanges, bridges and fiat onramps.',
  twitter: {
    card: 'summary_large_image',
    site: '@etherlink',
    title: 'Onramp funds to Etherlink',
    description:
      'Explore the available options to onramp your funds to Etherlink, including exchanges, bridges and fiat onramps.',
    images: [
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/img/onramp/onramp-twitter-card.webp`
    ]
  },
  
  alternates: {
    canonical: '/onramp'
  }
}

export default function OnrampPage() {
  return <OnrampClient />
}
