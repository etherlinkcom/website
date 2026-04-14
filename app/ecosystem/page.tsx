import { Hero } from './Hero'
import { ProjectList } from './ProjectList'
import type { Metadata } from 'next'
import { fetchEcosystemProjects } from '../../utils/strapi/ecosystem'

export const metadata: Metadata = {
  title:
    'Etherlink Ecosystem | Discover dApps and integrations across DeFi, Gaming and NFTs',
  description: 'Discover dApps and integrations across DeFi, Gaming and NFTs',
  alternates: {
    canonical: '/ecosystem'
  }
}

const Ecosystem = async () => {
  const projects = await fetchEcosystemProjects()

  return (
    <div className='pt-6 md:pt-28 min-h-[70vh]'>
      <div className='mb-[20px] md:mb-[60px]'>
        <Hero />
      </div>
      <ProjectList projects={projects} />
    </div>
  )
}

export default Ecosystem
