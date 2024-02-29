import Main from './components/main'
import Features from './components/features'
import Roadmap from './components/roadmap'
import Cta from './components/cta'
import Partners from './components/partners'

export const metadata = {
  title: 'Etherlink',
  description:
    'A decentralized & EVM compatible Layer-2 blockchain that looks after its users.'
}

const Home = () => {
  return (
    <>
      <Main />
      <Features />
      <Partners />
      <Roadmap />
      <Cta
        headerText='Ready to learn more about Etherlink?'
        descriptionText='Our step-by-step guides will help you get started'
        buttonText='Read the Docs'
        buttonUrl='https://docs.etherlink.com'
      />
    </>
  )
}

export default Home
