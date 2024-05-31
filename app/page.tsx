import Container from './components/container'
import { Main } from './components/pages/Home/Main'
import { Partners } from './components/pages/Home/Partners'
import { Roadmap } from './components/pages/Home/Roadmap'
import Cta from './components/cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Layer 2 Blockchain Solutions | Tezos Smart Rollups Technology | Etherlink',
  description:
    'A decentralized & EVM compatible Layer-2 blockchain that looks after its users.'
}

const Home = () => {
  return (
    <>
      <Main />
      <Partners />
      <Container>
        <Roadmap />
        <Cta
          headerText='Start building on Etherlink today'
          descriptionText='Our step-by-step guides will help you get started'
          buttonText='Docs'
          buttonUrl='https://docs.etherlink.com/'
        />
      </Container>
    </>
  )
}

export default Home
