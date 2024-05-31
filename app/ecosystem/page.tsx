import type { Metadata } from 'next'
import { Hero } from './Hero'
import { ProjectList } from './ProjectList'
import Cta from '../components/cta'
import { FooterBanner } from './FooterBanner'

export const metadata: Metadata = {
  title: 'Etherlink Ecosystem',
  description:
    'A decentralized & EVM compatible Layer-2 blockchain that looks after its users.'
}

const Ecosystem = () => {
  return (
    <div>
      <Hero />
      <ProjectList />
      <div className='px-8'>
        <Cta
          headerText='List a project on the Etherlink ecosystem'
          descriptionText='Submit your project to be listed on the Etherlink ecosystem today or request an update to an existing entry.'
          buttonText='Submit a Project'
          buttonUrl='https://tt-tezos.typeform.com/to/Z48NYwJr'
        />
      </div>
      {/* <div className='px-8'>
        <FooterBanner />
      </div> */}
    </div>
  )
}

export default Ecosystem
