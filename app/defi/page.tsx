import type { Metadata } from 'next'
import { Hero } from './Hero'

export const metadata: Metadata = {
  title: 'Etherlink DeFi',
  description:
    'A decentralized & EVM compatible Layer-2 blockchain that looks after its users.'
}

const DefiPage = async () => {
  return (
    <>
      <Hero />
    </>
  )
}

export default DefiPage
