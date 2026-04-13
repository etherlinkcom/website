import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load .env
const envPath = resolve(__dirname, '..', '.env')
const envContent = readFileSync(envPath, 'utf-8')
for (const line of envContent.split('\n')) {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) {
    process.env[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, '')
  }
}

const STRAPI_URL = process.env.STRAPI_URL!.replace(/\/$/, '')
const STRAPI_TOKEN = process.env.STRAPI_TOKEN!
const AIRTABLE_TOKEN = process.env.AIRTABLE_ACCESS_TOKEN!
const ECOSYSTEM_BASE_ID = process.env.ECOSYSTEM_BASE_ID!
const ECOSYSTEM_TABLE_NAME = process.env.ECOSYSTEM_TABLE_NAME!

interface AirtableProject {
  airtableId: string
  name: string
  slug: string
  description: string
  website: string
  email: string
  twitter: string
  tags: string[]
  logoFilename: string | null
  logoUrl: string | null
  rank: string | null
  approvalStatus: string
  status: string
  featured: boolean
  bypassUrlCheck: boolean
  date: string
  tezosEtherlink: string
  responsible: string
}

interface TagMapping {
  slug: string
  documentId: string
}

function mimeFromFilename(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase()
  const mimeMap: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    webp: 'image/webp',
    gif: 'image/gif'
  }
  return mimeMap[ext || ''] || 'application/octet-stream'
}

// Step 1: Download image from Airtable and upload to Strapi
async function uploadLogoToStrapi(
  imageUrl: string,
  filename: string
): Promise<number> {
  // Download image from Airtable (signed CDN URLs, no auth needed)
  const imgRes = await fetch(imageUrl)
  if (!imgRes.ok) {
    throw new Error(`Failed to download image: ${imgRes.status}`)
  }
  const buffer = await imgRes.arrayBuffer()
  const contentType = imgRes.headers.get('content-type') || mimeFromFilename(filename)

  // Upload to Strapi via multipart form (into Etherlink folder, ID=3)
  const formData = new FormData()
  const blob = new Blob([buffer], { type: contentType })
  formData.append('files', blob, filename)
  // Note: folder assignment requires admin JWT, not API token
  // Files upload to root — move to Etherlink folder manually in Strapi admin

  const uploadRes = await fetch(`${STRAPI_URL}/api/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`
    },
    body: formData
  })

  if (!uploadRes.ok) {
    const text = await uploadRes.text()
    throw new Error(`Failed to upload image: ${uploadRes.status} — ${text}`)
  }

  const uploaded = await uploadRes.json()
  return uploaded[0].id
}

// Step 2: Create project in Strapi
async function createProject(
  project: AirtableProject,
  tagDocumentIds: string[],
  logoId: number | null
): Promise<string> {
  // Map Airtable enum values to Strapi enum values
  const networkMap: Record<string, string> = {
    'Etherlink': 'etherlink',
    'Tezos + Etherlink': 'tezos_etherlink'
  }
  const network = networkMap[project.tezosEtherlink] || 'etherlink'

  // Map Airtable status to Strapi publication status
  // active -> published, inactive -> draft
  const publishStatus = project.status === 'inactive' ? 'draft' : 'published'

  const approvalMap: Record<string, string> = {
    'approved': 'approved',
    'in_review': 'in_review',
    'rejected': 'rejected',
    'submitted': 'submitted'
  }
  const approvalStatus = approvalMap[project.approvalStatus] || 'submitted'

  // Generate slug from name: lowercase, replace non-alphanumeric with hyphens, collapse multiples
  const slug = project.name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  const data: Record<string, unknown> = {
    name: project.name.trim(),
    slug,
    description: project.description.trim(),
    website: project.website,
    twitter: project.twitter || null,
    email: project.email || null,
    rank: project.rank ? parseInt(project.rank, 10) : 0,
    approvalStatus,
    featured: project.featured,
    bypassUrlCheck: project.bypassUrlCheck ?? false,
    responsible: project.responsible || null,
    network,
    date: project.date || null,
    tags: tagDocumentIds
  }

  if (logoId) {
    data.logo = logoId
  }

  const res = await fetch(`${STRAPI_URL}/api/etherlink-ecosystem-projects?status=${publishStatus}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${STRAPI_TOKEN}`
    },
    body: JSON.stringify({ data })
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Failed to create project: ${res.status} — ${text}`)
  }

  const json = await res.json()
  return json.data.documentId
}

// Fetch fresh data from Airtable (image URLs expire)
async function fetchFreshAirtableData(): Promise<AirtableProject[]> {
  const allRecords: any[] = []
  let offset: string | undefined

  do {
    const offsetParam = offset ? `&offset=${offset}` : ''
    const url = `https://api.airtable.com/v0/${ECOSYSTEM_BASE_ID}/${ECOSYSTEM_TABLE_NAME}?sort%5B0%5D%5Bfield%5D=rank${offsetParam}`
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` }
    })
    const data = await res.json()
    allRecords.push(...data.records)
    offset = data.offset
  } while (offset)

  return allRecords.map(r => ({
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
    tezosEtherlink: (r.fields.Tezos_Etherlink as string) ?? '',
    responsible: (r.fields.Responsible as string) ?? ''
  }))
}

async function main() {
  // Fetch fresh data from Airtable (image URLs are temporary)
  console.log('Fetching fresh data from Airtable...')
  const projects = await fetchFreshAirtableData()
  console.log(`Fetched ${projects.length} projects with fresh image URLs\n`)

  const tagMapping: TagMapping[] = JSON.parse(
    readFileSync(resolve(__dirname, '..', 'data', 'strapi-tag-mapping.json'), 'utf-8')
  )

  const tagMap = new Map(tagMapping.map(t => [t.slug, t.documentId]))

  console.log(`Migrating ${projects.length} projects to Strapi...`)
  console.log(`Tag mapping loaded: ${tagMap.size} tags\n`)

  const results: { name: string; documentId: string }[] = []
  const errors: { name: string; error: string }[] = []

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i]
    const progress = `[${i + 1}/${projects.length}]`

    try {
      // Resolve tag documentIds
      const tagDocumentIds = project.tags
        .map(t => tagMap.get(t))
        .filter((id): id is string => !!id)

      if (tagDocumentIds.length !== project.tags.length) {
        const missing = project.tags.filter(t => !tagMap.has(t))
        console.warn(`  ⚠ ${project.name}: missing tags: ${missing.join(', ')}`)
      }

      // Upload logo
      let logoId: number | null = null
      if (project.logoUrl && project.logoFilename) {
        logoId = await uploadLogoToStrapi(project.logoUrl, project.logoFilename)
      }

      // Create project
      const documentId = await createProject(project, tagDocumentIds, logoId)
      results.push({ name: project.name, documentId })
      console.log(`  ${progress} ✓ ${project.name} → ${documentId}`)
    } catch (err: any) {
      errors.push({ name: project.name, error: err.message })
      console.error(`  ${progress} ✗ ${project.name}: ${err.message}`)
    }
  }

  // Save results
  const reportPath = resolve(__dirname, '..', 'data', 'strapi-migration-report.json')
  writeFileSync(reportPath, JSON.stringify({ results, errors }, null, 2))

  console.log(`\n=== MIGRATION COMPLETE ===`)
  console.log(`  Success: ${results.length}/${projects.length}`)
  console.log(`  Errors:  ${errors.length}`)
  console.log(`  Report:  data/strapi-migration-report.json`)
}

main().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
