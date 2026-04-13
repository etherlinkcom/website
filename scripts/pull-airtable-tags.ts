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

function normalizeLabel(key: string): string {
  if (key === 'nfts') return 'NFTs'
  if (key.includes('-')) return key.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  if (key.length <= 3) return key.toUpperCase()
  return key.charAt(0).toUpperCase() + key.slice(1)
}

async function main() {
  const allRecords: any[] = []
  let offset: string | undefined

  do {
    const offsetParam = offset ? `&offset=${offset}` : ''
    const url = `https://api.airtable.com/v0/${process.env.ECOSYSTEM_BASE_ID}/${process.env.ECOSYSTEM_TABLE_NAME}?sort%5B0%5D%5Bfield%5D=rank${offsetParam}`
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}` }
    })
    const data = await res.json()
    allRecords.push(...data.records)
    offset = data.offset
  } while (offset)

  // Build tag map
  const tagMap: Record<string, { label: string; projects: string[] }> = {}

  for (const r of allRecords) {
    const name = (r.fields.Project || '').trim()
    const tags = r.fields.Tags || []
    for (const tag of tags) {
      if (!tagMap[tag]) {
        tagMap[tag] = { label: normalizeLabel(tag), projects: [] }
      }
      tagMap[tag].projects.push(name)
    }
  }

  const tags = Object.entries(tagMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([slug, info]) => ({
      slug,
      label: info.label,
      projectCount: info.projects.length,
      projects: info.projects.sort()
    }))

  const outputPath = resolve(__dirname, '..', 'data', 'airtable-tags.json')
  writeFileSync(outputPath, JSON.stringify(tags, null, 2))

  console.log(`Saved ${tags.length} tags to data/airtable-tags.json\n`)
  tags.forEach(t =>
    console.log(`  ${t.slug.padEnd(20)} ${t.label.padEnd(20)} (${t.projectCount} projects)`)
  )
}

main().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
