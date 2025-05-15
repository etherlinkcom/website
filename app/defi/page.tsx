import type { Metadata } from 'next'
import { DefiClient } from './DefiClient'

export const metadata: Metadata = {
  title: 'Etherlink DeFi',
  description:
    'A decentralized & EVM compatible Layer-2 blockchain that looks after its users.'
}

export default function DefiPage() {
  return <DefiClient />
}
