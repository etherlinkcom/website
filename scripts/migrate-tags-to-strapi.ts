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
    process.env[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, '')
  }
}

const STRAPI_URL = process.env.STRAPI_URL!.replace(/\/$/, '')
const STRAPI_TOKEN = process.env.STRAPI_TOKEN!

interface Tag {
  slug: string
  label: string
  projectCount: number
  projects: string[]
}

async function createTag(tag: Tag): Promise<{ documentId: string; name: string }> {
  const res = await fetch(`${STRAPI_URL}/api/etherlink-project-tags`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${STRAPI_TOKEN}`
    },
    body: JSON.stringify({
      data: {
        name: tag.slug,
        slug: tag.slug,
        label: tag.label
      }
    })
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Failed to create tag "${tag.slug}": ${res.status} — ${text}`)
  }

  const json = await res.json()
  return { documentId: json.data.documentId, name: json.data.name }
}

async function main() {
  const tags: Tag[] = JSON.parse(
    readFileSync(resolve(__dirname, '..', 'data', 'airtable-tags.json'), 'utf-8')
  )

  console.log(`Migrating ${tags.length} tags to Strapi...\n`)

  const results: { slug: string; documentId: string }[] = []

  for (const tag of tags) {
    try {
      const created = await createTag(tag)
      results.push({ slug: tag.slug, documentId: created.documentId })
      console.log(`  ✓ ${tag.slug} (${tag.label}) → ${created.documentId}`)
    } catch (err: any) {
      console.error(`  ✗ ${tag.slug}: ${err.message}`)
    }
  }

  // Save tag mapping for use by project migration script
  const mappingPath = resolve(__dirname, '..', 'data', 'strapi-tag-mapping.json')
  const { writeFileSync } = await import('fs')
  writeFileSync(mappingPath, JSON.stringify(results, null, 2))

  console.log(`\nDone! ${results.length}/${tags.length} tags created.`)
  console.log(`Tag mapping saved to data/strapi-tag-mapping.json`)
}

main().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
