import { ExperienceSection } from './components/pages/Home/ExperienceSection'
import type { Metadata } from 'next'
import { NewMain } from './components/pages/RevampHome/NewMain'
import { Partners } from './components/pages/RevampHome/Partners'
import { FeaturedSection } from './components/pages/RevampHome/FeaturedSection'
import { Speed } from './components/pages/RevampHome/Speed'
import { Evm } from './components/pages/RevampHome/Evm'
import { BottomCta } from './components/pages/RevampHome/BottomCta'
import { fetchFeaturedProjects } from '../utils/airtable/homeFeatured'

export const metadata: Metadata = {
  title: 'Etherlink Ecosystem | Discover dApps and Integrations | Etherlink',
  description:
    'A decentralized & EVM compatible Layer-2 blockchain that looks after its users.',
  alternates: {
    canonical: '/'
  }
}

const Home = async () => {
  const activeFeaturedProjects = await fetchFeaturedProjects()

  return (
    <>
      <NewMain />
      <Partners />
      <FeaturedSection featuredProjects={activeFeaturedProjects} />
      <Speed />
      <Evm />
      <ExperienceSection />
      <BottomCta />
    </>
  )
}

export default Home
