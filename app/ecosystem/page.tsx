import { Hero } from './Hero'
import { ProjectList } from './ProjectList'
import type { Metadata } from 'next'

import {
  checkUrlStatus,
  fetchAirtableData,
  mapToProject,
  RawProject,
  RawProjectStatus,
  updateAirtableRecords
} from '../../utils/airtable/ecosystem'

const Ecosystem = async () => {
  const airtableData = await fetchAirtableData(`?sort[0][field]=rank`)

  const rawProjects: RawProject[] = airtableData?.records || []

  const recordsToUpdate: RawProjectStatus[] = []
  const updatedProjects: RawProject[] = []

  for (const rawProject of rawProjects) {
    const { Website, bypass_url_check } = rawProject.fields

    const isReachable = bypass_url_check || (await checkUrlStatus([Website]))[0]

    recordsToUpdate.push({
      id: rawProject.id,
      fields: {
        Status: isReachable ? 'active' : 'inactive'
      }
    })

    if (isReachable && rawProject.fields.approval_status === 'approved') {
      updatedProjects.push(rawProject)
    }
  }

  await updateAirtableRecords(recordsToUpdate)

  return (
    <div className='pt-6 md:pt-28 min-h-[70vh]'>
      <div className='mb-[20px] md:mb-[60px]'>
        <Hero />
      </div>
      <ProjectList
        projects={updatedProjects.map((table: RawProject) =>
          mapToProject(table)
        )}
      />
    </div>
  )
}

export default Ecosystem
