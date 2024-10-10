import { Hero } from './Hero'
import { ProjectList } from './ProjectList'
import Cta from '../components/cta'
import {
  checkUrlStatus,
  fetchAirtableData,
  mapToProject,
  RawProject,
  RawProjectStatus,
  updateAirtableRecords
} from '../../utils/airtable/ecosystem'

const Ecosystem = async () => {
  const airtableData = await fetchAirtableData()

  const rawProjects: RawProject[] = airtableData?.records || []

  const recordsToUpdate: RawProjectStatus[] = []
  const updatedProjects: RawProject[] = []

  for (const rawProject of rawProjects) {
    const { Website } = rawProject.fields
    const isReachableStatus = await checkUrlStatus([Website])

    recordsToUpdate.push({
      id: rawProject.id,
      fields: {
        Status:
          isReachableStatus[0] || rawProject.fields.bypass_url_check
            ? 'active'
            : 'inactive'
      }
    })

    if (
      (isReachableStatus[0] || rawProject.fields.bypass_url_check) &&
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
