import type { Metadata } from 'next'
import { OnrampClient } from './OnrampClient'

export const metadata: Metadata = {
  title: 'Etherlink Onramp',
  description:
    'Find out how to onramp your funds to Etherlink, a decentralized & EVM compatible Layer-2 blockchain that looks after its users.',
  alternates: {
    canonical: '/onramp'
  }
}

export default function OnrampPage() {
  return <OnrampClient />
}
