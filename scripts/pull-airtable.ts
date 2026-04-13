import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load .env
const envPath = resolve(__dirname, '..', '.env')
const envContent = readFileSync(envPath, 'utf-8')
for (const line of envContent.split('\n')) {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) {
    const key = match[1].trim()
    const val = match[2].trim().replace(/^["']|["']$/g, '')
    process.env[key] = val
  }
}

const AIRTABLE_ACCESS_TOKEN = process.env.AIRTABLE_ACCESS_TOKEN!
const ECOSYSTEM_BASE_ID = process.env.ECOSYSTEM_BASE_ID!
const ECOSYSTEM_TABLE_NAME = process.env.ECOSYSTEM_TABLE_NAME!

interface AirtableRecord {
  id: string
  createdTime: string
  fields: Record<string, unknown>
}

interface AirtableResponse {
  records: AirtableRecord[]
  offset?: string
}

async function fetchAllRecords(
  baseId: string,
  tableName: string,
  params: string = ''
): Promise<AirtableRecord[]> {
  const allRecords: AirtableRecord[] = []
  let offset: string | undefined

  do {
    const separator = params ? '&' : '?'
    const offsetParam = offset
      ? `${params ? '&' : separator}offset=${offset}`
      : ''
    const url = `https://api.airtable.com/v0/${baseId}/${tableName}${params}${offsetParam}`

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${AIRTABLE_ACCESS_TOKEN}` }
    })

    if (!res.ok) {
      throw new Error(
        `Airtable API error: ${res.status} ${res.statusText} — ${await res.text()}`
      )
    }

    const data: AirtableResponse = await res.json()
    allRecords.push(...data.records)
    offset = data.offset
    console.log(`  Fetched ${data.records.length} records (total: ${allRecords.length})${offset ? ', fetching next page...' : ''}`)
  } while (offset)

  return allRecords
}

async function main() {
  console.log('Pulling Airtable ecosystem data...')
  const records = await fetchAllRecords(
    ECOSYSTEM_BASE_ID,
    ECOSYSTEM_TABLE_NAME,
    '?sort%5B0%5D%5Bfield%5D=rank'
  )

  const projects = records.map(r => ({
    airtableId: r.id,
    name: (r.fields.Project as string)?.trim() ?? '',
    slug: (r.fields.Slug as string) ?? '',
    description: (r.fields.Description as string)?.trim() ?? '',
    website: (r.fields.Website as string) ?? '',
    email: (r.fields.Email as string) ?? '',
    twitter: (r.fields.Twitter as string) ?? '',
    tags: (r.fields.Tags as string[]) ?? [],
    logoFilename: ((r.fields.Logo as any[])?.[0]?.filename as string) ?? null,
    logoUrl: ((r.fields.Logo as any[])?.[0]?.url as string) ?? null,
    rank: r.fields.rank ?? null,
    approvalStatus: (r.fields.approval_status as string) ?? '',
    status: (r.fields.Status as string) ?? '',
    featured: (r.fields.Featured as boolean) ?? false,
    bypassUrlCheck: (r.fields.bypass_url_check as boolean) ?? false,
    date: (r.fields.Date as string) ?? '',
    tezosEtherlink: (r.fields.Tezos_Etherlink as string) ?? ''
  }))

  projects.sort((a, b) => a.slug.localeCompare(b.slug))

  const fs = await import('fs/promises')
  const outputPath = resolve(__dirname, '..', 'data', 'airtable-ecosystem.json')
  await fs.writeFile(outputPath, JSON.stringify(projects, null, 2))

  console.log(`\nDone! Saved ${projects.length} projects to data/airtable-ecosystem.json`)
  console.log(`  Approved: ${projects.filter(p => p.approvalStatus === 'approved').length}`)
  console.log(`  Etherlink: ${projects.filter(p => p.tezosEtherlink === 'Etherlink').length}`)
}

main().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
