# Airtable Integration

This document describes how Etherlink uses Airtable as a content backend — what data lives there, how it is fetched and written, how caching works, and how image assets are handled at build time.

---

## Overview

Airtable serves as the CMS for two distinct datasets:

| Dataset | Purpose | Access |
|---|---|---|
| **Ecosystem** | All dApp/project listings | Read + Write |
| **Featured** | Time-boxed promoted projects shown on the home page | Read-only |

There is **no Airtable SDK** in use. All communication happens directly against the [Airtable REST API v0](https://airtable.com/developers/web/api/introduction) using the native `fetch` API (reads) and `axios` (writes).

---

## Environment Variables

```
AIRTABLE_ACCESS_TOKEN   # Personal Access Token — shared by both bases
ECOSYSTEM_BASE_ID       # Airtable Base ID for the ecosystem table
ECOSYSTEM_TABLE_NAME    # Table name within the ecosystem base
FEATURED_BASE_ID        # Airtable Base ID for the featured table
FEATURED_TABLE_NAME     # Table name within the featured base
```

> **Note:** `.env.sample` currently only documents the first three. `FEATURED_BASE_ID` and `FEATURED_TABLE_NAME` are missing from the sample file and should be added.

All variables are server-only (no `NEXT_PUBLIC_` prefix), so the token is never exposed to the browser.

---

## File Structure

```
utils/airtable/
  ecosystem.ts        — Types, fetch helpers, URL checker, write helper for ecosystem data
  homeFeatured.ts     — Types and fetch helper for featured project data
  TagsContext.tsx     — React context that exposes the tag map to client components

scrapeImagesAirTable.js   — Post-build script: mirrors Airtable-hosted images into the static export
```

---

## Data Models

### Ecosystem — `Project`

Defined in `utils/airtable/ecosystem.ts`.

| Field | Type | Notes |
|---|---|---|
| `Project` | `string` | Display name of the project |
| `Slug` | `string` | URL-safe identifier |
| `Description` | `string` | Short description |
| `Website` | `string` | Project URL — used for URL health checks |
| `Email` | `string` | Contact email |
| `Twitter` | `string` | Twitter handle |
| `Tags` | `string[]` | Category slugs (e.g. `"defi"`, `"nfts"`) |
| `Logo` | `Attachment[]` | Array of Airtable attachment objects |
| `Date` | `string` | Submission or listing date |
| `rank` | `number` | Display sort order |
| `approval_status` | `'approved' \| 'in_review' \| 'rejected' \| 'submitted'` | Editorial state |
| `Status` | `'active' \| 'inactive'` | Reachability state — **written by the app** |
| `Featured` | `boolean` | Whether it appears in the home carousel |
| `bypass_url_check` | `boolean` | If `true`, skip the URL health check and treat as active |

The `Attachment` shape for `Logo`:

```ts
{
  id: string
  url: string       // airtableusercontent.com CDN URL
  filename: string
  size: number
  type: string      // MIME type
}
```

### Featured — `FeaturedProject`

Defined in `utils/airtable/homeFeatured.ts`.

| Field | Type | Notes |
|---|---|---|
| `Title` | `string` | Project name |
| `Description` | `string` | Long description |
| `Short_Description` | `string` | One-liner for compact views |
| `Project_Link` | `string` | CTA URL |
| `Desktop_Image` | `Attachment[]` | Hero image for desktop |
| `Mobile_Image` | `Attachment[]` | Hero image for mobile |
| `Start_Date` | `string` | ISO date — when to start showing this entry |
| `End_Date` | `string \| undefined` | ISO date — when to stop; omit for no expiry |

---

## Reading Data

### `fetchAirtableData(filterAndSort?)` — Ecosystem

```ts
// utils/airtable/ecosystem.ts
export const fetchAirtableData = async (filterAndSort: string = '') => { ... }
```

- Performs a `GET` to `https://api.airtable.com/v0/{ECOSYSTEM_BASE_ID}/{ECOSYSTEM_TABLE_NAME}`.
- The optional `filterAndSort` string is appended directly to the URL as a query string, allowing callers to pass Airtable sort/filter formula parameters.
- Uses **Next.js `fetch` cache** with `next: { revalidate: 100 }` — responses are reused for 100 seconds.
- Returns the raw Airtable `{ records: RawProject[] }` payload.

**Called from:** `app/ecosystem/page.tsx` with `?sort[0][field]=rank`.

---

### `getDynamicTagsMap()` — Ecosystem Tags

```ts
export const getDynamicTagsMap = async () => { ... }
```

- Fetches all records from the same ecosystem table and collects every unique value in the `Tags` field.
- Builds a `Record<string, string>` mapping tag slug → human-readable label.
- **No `revalidate` is set**, so this fetch uses Next.js default caching behaviour (cached for the lifetime of the render).
- The label normalization rules are:
  - `"nfts"` → `"NFTs"` (hard-coded special case)
  - Hyphenated keys → Title Case each word (`"play-to-earn"` → `"Play To Earn"`)
  - Keys ≤ 3 characters → UPPERCASE (`"dao"` → `"DAO"`)
  - Everything else → Capitalize first letter only

**Called from:** `app/layout.tsx` at the root layout level so every page has access to the map.

---

### `fetchFeaturedProjects()` — Featured

```ts
// utils/airtable/homeFeatured.ts
export const fetchFeaturedProjects = async () => { ... }
```

- Performs a `GET` to `https://api.airtable.com/v0/{FEATURED_BASE_ID}/{FEATURED_TABLE_NAME}`.
- Uses `next: { revalidate: 10 }` — much shorter window (10 s) because featured content is time-sensitive.
- After fetching, filters records on the server by date: a project is included only when:
  - `Start_Date` is today or in the past, **and**
  - `End_Date` is absent or still in the future.
- Date comparisons use `date-fns` (`isBefore`, `isSameDay`, `isAfter`, `parseISO`).

**Called from:** `app/page.tsx` (the home page Server Component).

---

## Writing Data

### `updateAirtableRecords(recordsToUpdate)` — Ecosystem

```ts
export const updateAirtableRecords = async (recordsToUpdate: RawProjectStatus[]) => { ... }
```

This is the **only write operation** in the codebase. It updates the `Status` field (`'active'` or `'inactive'`) for any number of ecosystem records.

**How it works:**

1. Splits the input array into batches of **10 records** (the Airtable REST API limit per PATCH request).
2. For each batch, sends an `axios.patch` request with:
   ```json
   {
     "records": [
       { "id": "recXXX", "fields": { "Status": "active" } },
       ...
     ]
   }
   ```
3. Errors per batch are caught and logged; subsequent batches continue regardless.

> `axios` is used for writes, while `fetch` is used for reads. This is inconsistent — reads could also use axios, or writes could use fetch. Something to standardize in a future refactor.

**Called from:** `app/ecosystem/page.tsx` — the write happens on every page request, after URL checks are complete.

---

## URL Health Check

### `checkUrlStatus(urls)` — Ecosystem

```ts
export const checkUrlStatus = async (urls: string[]) => { ... }
```

Before a project can be shown on the ecosystem page, its `Website` URL is tested:

- Sends a `fetch` with `Cache-Control: no-cache` and a **5-second `AbortController` timeout**.
- Returns a `boolean[]` in the same order as the input array.
- Any error (network failure, timeout, non-2xx) returns `false` for that URL.
- Errors are suppressed in production to avoid noisy build logs; in development they are logged as warnings.

The ecosystem page checks every project serially (not in parallel). Projects with `bypass_url_check: true` skip the network call entirely and are treated as active unconditionally.

---

## Client-Side Tag Access — `TagsContext`

The tag map fetched by `getDynamicTagsMap` is a server-side value. To make it available to client components without a separate API call, it flows through React context:

```
app/layout.tsx (Server Component)
  └─ getDynamicTagsMap()                ← fetches from Airtable
  └─ app/ClientLayout.js (Client Component)
       └─ <TagsContext.Provider value={tagsMap}>
            └─ {children}
```

Client components call the `useTagsMap()` hook to read it:

```ts
// utils/airtable/TagsContext.tsx
export const useTagsMap = () => useContext(TagsContext)
```

`keyForTag(tagsMap, label)` is a utility that reverses the map — given a human label it returns the underlying slug key.

---

## Helper — `mapToProject`

```ts
export const mapToProject = (rawProject: RawProject): Project => { ... }
```

A pure function that extracts `fields` from a raw Airtable record and returns it as a typed `Project` object. Used by the ecosystem page before passing data to client components.

---

## Post-Build Image Mirroring — `scrapeImagesAirTable.js`

Airtable CDN URLs (`airtableusercontent.com`) are **temporary and expire**. For static exports (`next export`), images would break after expiry. This script runs automatically after `next build` via the `build` script in `package.json`:

```json
"build": "next build && node scrapeImagesAirTable.js"
```

**Steps:**

1. **Scan** the `./out` directory recursively for all `.html`, `.js`, and `.json` files.
2. **Extract** every URL matching `airtableusercontent.com` using a regex.
3. **Download** each unique URL with a 15-second timeout using `node-fetch`.
4. **Detect** the correct file extension using the `file-type` package (handles SVG as a fallback).
5. **Save** downloaded assets to `./out/img-airtable/`.
6. **Replace** all original CDN URLs in the static output files with the new local paths (`/img-airtable/<filename>.<ext>`).

This means the final static export is completely self-contained — no runtime dependency on the Airtable CDN.

---

## Data Flow Summary

```
Every request to /ecosystem
  │
  ├─ fetchAirtableData(?sort[0][field]=rank)      GET  ← revalidate: 100s
  │    └─ returns RawProject[]
  │
  ├─ For each project:
  │    ├─ bypass_url_check? → skip fetch, mark active
  │    └─ checkUrlStatus(website)                 HEAD/GET with 5s timeout
  │         ├─ ok  → Status: 'active'
  │         └─ err → Status: 'inactive'
  │
  ├─ updateAirtableRecords(all records)            PATCH in batches of 10
  │
  └─ Render only: isReachable && approval_status === 'approved'


Every request to / (home)
  │
  └─ fetchFeaturedProjects()                       GET  ← revalidate: 10s
       └─ filter by Start_Date / End_Date
       └─ returns FeaturedProject[]


Root layout (every page)
  │
  └─ getDynamicTagsMap()                           GET  ← no explicit revalidate
       └─ builds slug→label map
       └─ passed to TagsContext.Provider
```

---

## Known Issues & Improvement Opportunities

| Issue | Detail |
|---|---|
| **`.env.sample` is incomplete** | `FEATURED_BASE_ID` and `FEATURED_TABLE_NAME` are not documented in the sample file. |
| **Serial URL checks block rendering** | `checkUrlStatus` is called one project at a time inside a `for...of` loop. For large numbers of projects this significantly slows the ecosystem page. A `Promise.all` approach would parallelise them. |
| **Mixed HTTP clients** | Reads use the native `fetch` API; writes use `axios`. Standardising on one client would simplify the dependency surface. |
| **Write on every render** | `updateAirtableRecords` runs on every request to `/ecosystem` (subject to ISR caching). For very large project lists and fast revalidation cycles this could hit Airtable rate limits. |
| **No pagination** | `fetchAirtableData` and `getDynamicTagsMap` do not handle Airtable's 100-record pagination (`offset` token). If the table grows beyond 100 records, only the first page is returned silently. |
| **`getDynamicTagsMap` has no revalidate** | This fetch has no `revalidate` option set, so it may be cached indefinitely. Adding `next: { revalidate: N }` would keep the tag list fresh when new categories are added in Airtable. |
