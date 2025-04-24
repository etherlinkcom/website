import type { Metadata } from 'next'
import { Hero } from './Hero'
import { Tutorials } from './Tutorials'

export const metadata: Metadata = {
  title: 'Etherlink DeFi',
  description:
    'A decentralized & EVM compatible Layer-2 blockchain that looks after its users.'
}

const DefiPage = async () => {
  return (
    <>
      <Hero />
      <Tutorials />
    </>
  )
}

export default DefiPage
