import { Hero } from './Hero'
import { ProjectList } from './ProjectList'
import Cta from '../components/cta'
import {
  checkUrlStatus,
  fetchAirtableData,
  mapToProject,
  RawProject,
  RawProjectStatus,
  TAGS_MAP,
  updateAirtableRecords
} from '../../utils/airtable/ecosystem'

// Airtable Image URLs expire every 2 hours, so in order to get always up to date images
// but not having to request them at every refresh of the page we can use the revalidate option instead.
export const revalidate = 1000
// Set the duration for regenerating the page to 1000 to cater for the Airtable's checkUrlStatus
export const maxDuration = 1000

const Ecosystem = async () => {
  const airtableData = await fetchAirtableData()

  const rawProjects = airtableData?.records || []

  const recordsToUpdate: RawProjectStatus[] = []
  const updatedProjects: RawProject[] = []

  for (const rawProject of rawProjects) {
    const { Website } = rawProject.fields
    const isReachableStatus = await checkUrlStatus([Website])

    recordsToUpdate.push({
      id: rawProject.id,
      fields: {
        Status: isReachableStatus[0] ? 'active' : 'inactive'
      }
    })

    if (
      isReachableStatus[0] &&
      rawProject.fields.approval_status === 'approved'
    ) {
      updatedProjects.push(rawProject)
    }
  }

  await updateAirtableRecords(recordsToUpdate)

  return (
    <div>
      <Hero />
      <ProjectList
        projects={updatedProjects.map((table: RawProject) =>
          mapToProject(table)
        )}
      />
      <div className='px-8'>
        <Cta
          headerText='List a project on the Etherlink ecosystem'
          descriptionText='Submit your project to be listed on the Etherlink ecosystem today or request an update to an existing entry.'
          primaryButton={{
            text: 'Submit a Project',
            link: 'https://tt-tezos.typeform.com/to/Z48NYwJr'
          }}
        />
      </div>
    </div>
  )
}

export default Ecosystem
