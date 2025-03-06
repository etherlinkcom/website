import { isAfter, isBefore, isSameDay, parseISO } from 'date-fns'

interface FeaturedRawProject {
  id: string
  createdTime: string
  fields: FeaturedProject
}

export interface FeaturedProject {
  Title: string
  Description: string
  Short_Description: string
  Project_Link: string
  Desktop_Image: Array<{
    id: string
    url: string
    filename: string
    size: number
    type: string
  }>
  Mobile_Image: Array<{
    id: string
    url: string
    filename: string
    size: number
    type: string
  }>
  Start_Date: string
  End_Date: string
}

export const fetchFeaturedProjects = async () => {
  const url = `https://api.airtable.com/v0/${process.env.FEATURED_BASE_ID}/${process.env.FEATURED_TABLE_NAME}`

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`
    }
    // cache: 'no-store' as RequestCache
  }

  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error('The Airtable response was not ok')
    }

    const airtableData = await response.json()

    const today = new Date()

    const activeProjects = airtableData.records
      .map(mapToFeaturedProject)
      .filter((project: FeaturedProject) => {
        const { Start_Date, End_Date } = project

        if (!Start_Date) return false

        const startDate = parseISO(Start_Date)
        const endDate = End_Date ? parseISO(End_Date) : null

        const hasStarted =
          isBefore(startDate, today) || isSameDay(startDate, today)

        const isStillActive = !endDate || isAfter(endDate, today)

        return hasStarted && isStillActive
      })

    return activeProjects
  } catch (error) {
    console.error('Error fetching featured projects:', error)
    throw error
  }
}

const mapToFeaturedProject = (
  rawProject: FeaturedRawProject
): FeaturedProject => {
  const { fields } = rawProject

  return {
    Title: fields.Title,
    Description: fields.Description,
    Short_Description: fields.Short_Description,
    Project_Link: fields.Project_Link,
    Desktop_Image: fields.Desktop_Image,
    Mobile_Image: fields.Mobile_Image,
    Start_Date: fields.Start_Date,
    End_Date: fields.End_Date
  }
}
