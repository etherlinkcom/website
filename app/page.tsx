import Container from './components/container'
import { ExperienceSection } from './components/pages/Home/ExperienceSection'
import { DeveloperExperience } from './components/pages/Home/DeveloperExperience'
import Cta from './components/cta'
import type { Metadata } from 'next'
import { NewMain } from './components/pages/RevampHome/NewMain'
import { Partners } from './components/pages/RevampHome/Partners'
import { GetStarted } from './components/pages/RevampHome/GetStarted'
import { Speed } from './components/pages/RevampHome/Speed'
import { Evm } from './components/pages/RevampHome/Evm'

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
      <DeveloperExperience />
      <Container>
        <Cta
          headerText='Ready to get started?'
          descriptionText='Useful resources to get started building and bridging on Etherlink'
          primaryButton={{
            text: 'Start building',
            link: 'https://docs.etherlink.com/'
          }}
          ghostButton={{
            text: 'Bridge now',
            link: 'https://bridge.etherlink.com'
          }}
        />
      </Container>
    </>
  )
}

export default Home
