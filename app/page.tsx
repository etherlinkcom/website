import { ExperienceSection } from './components/pages/Home/ExperienceSection'
import type { Metadata } from 'next'
import { NewMain } from './components/pages/RevampHome/NewMain'
import { Partners } from './components/pages/RevampHome/Partners'
import { GetStarted } from './components/pages/RevampHome/GetStarted'
import { Speed } from './components/pages/RevampHome/Speed'
import { Evm } from './components/pages/RevampHome/Evm'
import { BottomCta } from './components/pages/RevampHome/BottomCta'

export const metadata: Metadata = {
  title: 'Etherlink Ecosystem | Discover dApps and Integrations | Etherlink',
  description:
    'A decentralized & EVM compatible Layer-2 blockchain that looks after its users.'
}

const Home = async () => {
  return (
    <>
      <NewMain />
      <Partners />
      <GetStarted />
      <Speed />
      <Evm />
      <ExperienceSection />
      <BottomCta />
    </>
  )
}

export default Home
