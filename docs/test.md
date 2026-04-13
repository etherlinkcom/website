# Strapi Migration Test Checklist

Test the Airtable → Strapi CMS migration. All ecosystem project data and tags now come from Strapi via GraphQL.

**Prerequisites:**
- Local Strapi running at `http://localhost:1337` with migrated data (69 projects, 16 tags)
- `.env` has `STRAPI_URL` and `STRAPI_TOKEN` set

---

## Pages to Test

### 1. Homepage (`/`)

**What uses Strapi:** Nothing directly. The featured section is now hardcoded.

- [ ] Page loads without errors
- [ ] Featured section ("Make money on Etherlink") renders with desktop/mobile images
- [ ] No console errors related to Airtable or data fetching

---

### 2. Ecosystem Page (`/ecosystem`)

**What uses Strapi:** `fetchEcosystemProjects()` fetches all published, approved projects sorted by rank.

- [ ] Page loads and shows project cards
- [ ] All 63 published projects render (6 inactive are drafts in Strapi, should not appear)
- [ ] Project cards show: logo, name, description, tags
- [ ] Project logos load correctly (from Strapi media URLs)
- [ ] Twitter and Website links work on project cards

**Search & Filtering:**
- [ ] Search input filters projects by name, description, and tag labels
- [ ] Trending searches (DeFi, Dev Tools, Infra) work
- [ ] Tag filter dropdown shows all 16 tags with correct labels
- [ ] Selecting a tag filters projects correctly
- [ ] Multiple tags can be selected simultaneously
- [ ] Clicking a tag on a project card adds it to filters
- [ ] URL query params update when searching/filtering (`?search=...&filters=...`)
- [ ] Direct URL with query params loads correctly (e.g., `/ecosystem?filters=defi,gaming`)

**Sorting:**
- [ ] Sort by A-Z works
- [ ] Sort by Z-A works
- [ ] Sort by Featured works (featured projects appear first)

**Infinite Scroll:**
- [ ] First 9 projects load initially
- [ ] Scrolling down loads more projects in batches of 6
- [ ] CTA banner appears after first 9 projects

**Mobile:**
- [ ] Mobile search drawer opens and functions
- [ ] Featured projects show in mobile search drawer
- [ ] Mobile filter drawer works
- [ ] Mobile carousel on search results

---

### 3. Root Layout (all pages)

**What uses Strapi:** `getDynamicTagsMap()` fetches all tag slugs → labels at build time, provided via React Context.

- [ ] Tag labels display correctly across all pages (not showing raw slugs like "dev-tools")
- [ ] Verify these specific tag labels render correctly:
  - `defi` → "DeFi"
  - `nfts` → "NFTs"
  - `dev-tools` → "Dev Tools"
  - `rpc` → "RPC"

---

## What Was Removed

- **URL health checking**: No longer checks if project websites are reachable at build time
- **Airtable write-back**: No longer updates project status in CMS on every page request
- **Image scraping**: `scrapeImagesAirTable.js` removed — Strapi media URLs are persistent
- **Dependencies removed**: `axios`, `node-fetch`, `file-type`

## What Changed

| Before (Airtable) | After (Strapi) |
|---|---|
| REST API with revalidate:100s | GraphQL with revalidate:100s |
| Tags derived from project data + `normalizeLabel()` | Tags fetched directly from `EtherlinkProjectTag` collection |
| URL health check + status write-back on every request | Published/draft status managed in Strapi admin |
| Post-build image scraping (CDN URLs expire) | Persistent Strapi media URLs |
| `approval_status` + `Status` fields filter projects | `approvalStatus: "approved"` filter + Strapi publish status |
