import Container from './components/container'
import { Main } from './components/pages/Home/Main'
import { ExperienceSection } from './components/pages/Home/ExperienceSection'
import { DeveloperExperience } from './components/pages/Home/DeveloperExperience'
import { ExploreEcosystem } from './components/pages/Home/ExploreEcosystem'
import Cta from './components/cta'
import type { Metadata } from 'next'
import {
  fetchAirtableData,
  mapToProject,
  RawProject
} from '../utils/airtable/ecosystem'

export const metadata: Metadata = {
  title: 'Etherlink Ecosystem | Discover dApps and Integrations | Etherlink',
  description:
    'A decentralized & EVM compatible Layer-2 blockchain that looks after its users.'
}

const Home = async () => {
  const airtableData = await fetchAirtableData(
    `?filterByFormula=AND(NOT({rank} = 0), {rank} != '')&sort[0][field]=rank`
  )

  const rawProjects = airtableData?.records || []
  return (
    <>
      <Main />
      <ExploreEcosystem
        projects={rawProjects.map((table: RawProject) => mapToProject(table))}
      />
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
