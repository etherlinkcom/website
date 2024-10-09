import axios from 'axios'
import isReachable from 'is-reachable'

const BASE_ID = 'appwwoQ2MZEqD4o5T'
const TABLE_NAME = 'Etherlink_Ecosystem_Projects'
const AIRTABLE_ACCESS_TOKEN =
  'patPI8ICynExoTpA7.49947c46b1c3a8c2e48432040d217950770256ae6459ae5be9ef2e67e4076fa1'

export type ProjectStatus = Pick<Project, 'Status'>
export type RawProjectStatus = Omit<RawProject, 'createdTime' | 'fields'> & {
  fields: ProjectStatus
}

export interface RawProject {
  id: string
  createdTime: string
  fields: Project
}

export interface Project {
  approval_status: 'approved' | 'in_review' | 'rejected' | 'submitted'
  Description: string
  Website: string
  Status: 'active' | 'inactive'
  Tags: TagKeys[]
  Project: string
  Date: string
  Slug: string
  Logo: Array<{
    id: string
    url: string
    filename: string
    size: number
    type: string
  }>
  Logline: string
  Email: string
  Twitter: string
  rank: number
}

export const TAGS_MAP: Record<string, string> = {
  infra: 'Infrastructure',
  bridge: 'Bridges',
  'dev-tools': 'Dev Tools',
  'etherlink-infra': 'Etherlink Infra',
  'data-science': 'Data Science',
  'etherlink-dev-sdk': 'Etherlink Development SDK',
  oracle: 'Oracles',
  defi: 'DeFi',
  gaming: 'Gaming',
  payment: 'Payments',
  dapp: 'DApps',
  gamefi: 'GameFi',
  nfts: 'NFTs',
  social: 'Social',
  'ecosystem-partner': 'Ecosystem Partners',
  launchpad: 'Launchpads',
  rwa: 'Real World Assets',
  wallet: 'Wallets',
  kyc: 'KYC',
  health: 'Healthcare'
}

export type TagKeys = keyof typeof TAGS_MAP

const batchArray = (array: RawProjectStatus[], batchSize: number) => {
  const batches = []
  for (let i = 0; i < array.length; i += batchSize) {
    batches.push(array.slice(i, i + batchSize))
  }
  return batches
}

export const checkUrlStatus = async (urls: string[]) => {
  const results: boolean[] = []

  for (const url of urls) {
    try {
      const isUrlReachable = await isReachable(url)
      results.push(isUrlReachable)
    } catch (error) {
      console.error(`Error checking URL: ${url}`, error)
      results.push(false)
    }
  }

  return results
}

export const fetchAirtableData = async (filterAndSort: string = '') => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}${filterAndSort}`
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${AIRTABLE_ACCESS_TOKEN}`
    }
  }

  const responseAirtable = await fetch(url, options)

  if (!responseAirtable.ok) {
    throw new Error('The Airtable response was not ok')
  }

  const airtableData = await responseAirtable.json()
  return airtableData
}

export const updateAirtableRecords = async (
  recordsToUpdate: RawProjectStatus[]
) => {
  if (recordsToUpdate.length === 0) return

  const airtableApiUrl = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`
  const batchedRecords = batchArray(recordsToUpdate, 10)

  for (let i = 0; i < batchedRecords.length; i++) {
    const batch = batchedRecords[i]
    const statusUpdateRecords = batch.map(record => ({
      id: record.id,
      fields: {
        Status: record.fields.Status
      }
    }))

    try {
      const response = await axios.patch(
        airtableApiUrl,
        { records: statusUpdateRecords },
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
          }
        }
      )
    } catch (error: any) {
      console.error(
        `Error updating batch ${i + 1}:`,
        error?.response ? error?.response?.data : error?.message
      )
    }
  }
}

export const mapToProject = (rawProject: RawProject): Project => {
  const { fields } = rawProject

  return {
    Slug: fields.Slug,
    Date: fields.Date,
    Project: fields.Project,
    Logline: fields.Logline,
    Logo: fields.Logo,
    Tags: fields.Tags,
    Email: fields.Email,
    Website: fields.Website,
    Description: fields.Description,
    approval_status: fields.approval_status,
    Status: fields.Status,
    Twitter: fields.Twitter,
    rank: fields.rank
  }
}