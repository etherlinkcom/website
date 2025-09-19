import type { Metadata } from 'next'
import { DefiClient } from './DefiClient'

export const metadata: Metadata = {
  title: 'Make money with DeFi on Etherlink | Etherlink',
  description:
    'Explore the best ways to grow your portfolio with simple DeFi strategies for every risk level.',
  twitter: {
    card: 'summary_large_image',
    site: '@etherlink',
    title: 'Make money with DeFi on Etherlink',
    description:
      'Explore the best ways to grow your portfolio with simple DeFi strategies for every risk level.',
    images: [
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/img/defi/twitter-card.webp`
    ]
  }
}

export default function DefiPage() {
  return <DefiClient />
}
