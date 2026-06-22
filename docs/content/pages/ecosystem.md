# Ecosystem Page (/ecosystem)

## Target Personas

- **dApp explorers** -- users looking to discover projects building on Etherlink (DeFi, gaming, NFTs, infrastructure)
- **Developers and builders** -- evaluating the ecosystem before choosing to build on Etherlink
- **DeFi users** -- looking for specific financial tools (DEXs, lending, bridges) on the chain
- **Institutional evaluators** -- assessing ecosystem maturity and breadth

## Page Content

### Static Content

#### Page Metadata

```ts
export const metadata: Metadata = {
  title: 'Etherlink Ecosystem | Discover dApps and integrations across DeFi, Gaming and NFTs',
  description: 'Discover dApps and integrations across DeFi, Gaming and NFTs',
  alternates: { canonical: '/ecosystem' }
}
```

#### Hero Section (`Hero.tsx`)

- **Heading**: "Discover, Build, & Trade on Etherlink" -- the three verbs cycle with a highlight animation (neon green color + animated floating project icons)
- **Subheading** (desktop only): "A growing ecosystem of innovative projects, from DeFi to gaming and beyond."
- Animated floating icons show hardcoded project logos (rarible, thirdweb, superlend, Hanji) that alternate on a timer

#### Section Heading

- **"All Projects"** -- hardcoded h1 above the project grid

#### CTA Banner (inline, after first 9 cards) (`Cta.tsx`)

- **Heading**: "Make money with DeFi on Etherlink"
- **Body**: "Grow your portfolio with simple DeFi strategies for every risk level."
- **CTA button**: "Learn more" linking to `/defi`

#### Search Placeholder Text

- "What projects are you looking for?"

#### Trending Searches (hardcoded slugs)

```ts
const TRENDING: TagKeys[] = ['defi', 'dev-tools', 'infra']
```

Labels are resolved dynamically from the CMS tag map.

#### Mobile Search Drawer

- Shows trending searches, featured projects (from CMS but filtered client-side), and the tagline "Discover, Build & Trade on Etherlink"

#### Not Found State (`NotFound.tsx`)

- **Heading**: `No results for "{search}"`
- **Body**: "Try searching for another term."
- Displays an Etherlink globe illustration

#### Footer Banner / Disclaimer (`FooterBanner.tsx`)

- **Heading**: "The Etherlink Ecosystem"
- Four paragraphs of legal/disclaimer text:
  1. This is not a comprehensive list; ecosystem is fast-growing
  2. Listing does not constitute endorsement; projects are independent
  3. Users should conduct independent due diligence
  4. etherlink.com may stop supporting or update the site at any time

**Note**: `FooterBanner` is defined but not currently rendered inside `page.tsx` or `ProjectList.tsx`. It may be imported elsewhere or unused.

### CMS-Driven Content

#### Data Model

##### Project Interface (UI-facing shape)

```ts
export interface Project {
  Project: string       // Display name (mapped from Strapi `name`)
  Slug: string          // URL-safe identifier
  Description: string   // Short project description
  Website: string       // Project website URL
  Email: string         // Contact email
  Twitter: string       // Twitter/X profile URL
  Tags: TagKeys[]       // Array of tag slugs (e.g. ['defi', 'dex'])
  Logo: Array<{         // Project logo (typically single-element array)
    id: string
    url: string
    filename: string
    size: number
    type: string
  }>
  Date: string          // Date added/published
  rank: number          // Sort order (lower = higher priority)
  Featured: boolean     // Whether to show "Featured" badge
}
```

##### StrapiProject Interface (raw API shape)

```ts
interface StrapiProject {
  documentId: string
  name: string
  slug: string
  description: string
  website: string
  email: string | null
  twitter: string | null
  rank: number
  featured: boolean
  date: string | null
  logo: { url: string; name: string; mime: string; size: number } | null
  tags: Tag[]
}
```

##### Tag Interface

```ts
export interface Tag {
  documentId: string
  name: string          // Internal name
  slug: string          // URL-safe key, used as TagKeys throughout the app
  label: string         // Human-readable display label
}
```

`TagKeys` is typed as `string` (not a union) -- any slug value is accepted.

##### Field Mapping (Strapi -> UI)

| Strapi field    | Project field | Notes                                      |
|-----------------|---------------|--------------------------------------------|
| `name`          | `Project`     | Display name                               |
| `slug`          | `Slug`        | Used as React key                          |
| `description`   | `Description` | Falls back to empty string                 |
| `website`       | `Website`     | Falls back to empty string                 |
| `email`         | `Email`       | Falls back to empty string                 |
| `twitter`       | `Twitter`     | Falls back to empty string                 |
| `tags[].slug`   | `Tags`        | Array of slug strings only                 |
| `logo`          | `Logo`        | Wrapped into single-element array; URL resolved against STRAPI_URL if relative |
| `date`          | `Date`        | Falls back to empty string                 |
| `rank`          | `rank`        | Falls back to 0                            |
| `featured`      | `Featured`    | Falls back to false                        |

#### GraphQL Queries

##### PROJECTS_QUERY

```graphql
query GetEcosystemProjects($page: Int!, $pageSize: Int!) {
  etherlinkEcosystemProjects(
    filters: { approvalStatus: { eq: "approved" } }
    sort: "rank:asc"
    pagination: { page: $page, pageSize: $pageSize }
    status: PUBLISHED
  ) {
    documentId
    name
    slug
    description
    website
    email
    twitter
    rank
    featured
    date
    logo { url name mime size }
    tags { documentId name slug label }
  }
}
```

Key behaviors:
- Filters to `approvalStatus == "approved"` only
- Requires `status: PUBLISHED` (Strapi v5 draft/publish)
- Sorted by `rank:asc` server-side
- Paginated in batches of 100; client loops until all pages fetched
- Revalidation set to 100 seconds (`next: { revalidate: 100 }`)

##### TAGS_QUERY

```graphql
query GetProjectTags {
  etherlinkProjectTags(pagination: { pageSize: 100 }) {
    documentId
    name
    slug
    label
  }
}
```

Key behaviors:
- Fetches up to 100 tags in a single request
- No filters -- all tags are returned regardless of whether projects use them
- No revalidation parameter set (uses Next.js default caching)

#### Tag System

**Storage**: Tags are a separate Strapi collection (`EtherlinkProjectTag`) with a many-to-many relationship to projects.

**Context distribution**: Tags are fetched once in the root layout via `getDynamicTagsMap()` and provided to the entire app through `TagsContext` (React Context). All client components access tags via the `useTagsMap()` hook, which returns a `Record<string, string>` mapping `slug -> label`.

**Filtering behavior**:
- The `FilterButton` renders all tags from the context as checkable options
- Multiple tags can be selected simultaneously (OR logic -- a project matches if it has *any* of the selected tags)
- Selected tags are persisted in the URL as `?filters=defi,dex` (comma-separated slugs)
- Tags on project cards are clickable -- clicking a tag adds it to the active filter set via a "swap" mechanism (replaces the previously card-clicked tag)

**Trending searches**: Three hardcoded tag slugs (`defi`, `dev-tools`, `infra`) are displayed below the search bar. Clicking one sets the search text to the tag's label and adds the tag to filters.

**Helper utility**:
```ts
export const keyForTag = (tagsMap: Record<string, string>, value: string): string => {
  const entry = Object.entries(tagsMap).find(([, label]) => label === value)
  return entry?.[0] ?? value.toLowerCase()
}
```
Used by `FilterButton` to reverse-lookup a tag slug from a label string (for coordinating search text with filter state).

#### Data Flow

```
Build time:
  1. page.tsx (Server Component) calls fetchEcosystemProjects()
  2. fetchEcosystemProjects() paginates through PROJECTS_QUERY via strapiQuery()
  3. strapiQuery() POSTs to STRAPI_URL/graphql with Bearer token auth
     - Retries up to 3 times with exponential backoff on failure
  4. Raw StrapiProject[] mapped to Project[] via mapStrapiToProject()
  5. Project[] passed as props to <ProjectList> (Client Component)

  Separately (root layout):
  6. getDynamicTagsMap() fetches TAGS_QUERY
  7. slug->label map provided via <TagsContext.Provider>

Runtime (client):
  8. ProjectList reads URL params (?search, ?filters, ?sort) to initialize state
  9. User interactions update state -> URL params synced via router.replace()
  10. Projects filtered/sorted via useMemo chains
  11. Visible subset rendered with infinite scroll
```

### UI Features

#### Search
- Full-text search across project name, description, and tag labels
- Desktop: inline input with clear button
- Mobile: read-only trigger opens a full-screen drawer with search input, trending searches, and featured project cards
- Search term persisted in URL as `?search=term`
- Search matches are prioritized above tag-only matches in results

#### Filtering
- Multi-select tag filter via dropdown (desktop) or bottom sheet (mobile)
- Shows selected count badge on the filter button (e.g., "Filters . 3")
- Filter state persisted in URL as `?filters=slug1,slug2`
- Combines with search using OR logic (matches search OR matches any selected tag)

#### Sorting
- Three sort options: "Featured First", "A -> Z", "Z -> A"
- Default: no explicit sort (server-side rank order preserved)
- "Featured First" groups featured projects at the top, then alphabetical within each group
- Sort state persisted in URL as `?sort=featured|asc|desc`
- Dropdown (desktop) or bottom sheet (mobile)

#### Infinite Scroll
- Initial render shows 9 project cards
- IntersectionObserver on a sentinel element loads 6 more at a time
- Resets to 9 visible when search, filters, or sort change
- CTA banner inserted after the first 9 cards, before the remaining results

#### Project Cards (`ProjectCard.tsx`)
- Logo (60x60, rounded), project name, tag pills, "Featured" badge
- Description text
- Website and Twitter/X icon links (open in new tab)
- Tag pills are clickable -- clicking filters by that tag

#### URL State Management
- All UI state (search, filters, sort) synced bidirectionally with URL query parameters
- Uses `router.replace()` with `scroll: false` to avoid page jumps
- Initial state hydrated from URL params on mount
- Enables shareable/bookmarkable filtered views

## Key Messaging Themes

1. **Ecosystem breadth and growth** -- "A growing ecosystem of innovative projects, from DeFi to gaming and beyond" positions Etherlink as a maturing L2 with diverse activity
2. **Action-oriented identity** -- "Discover, Build, & Trade" frames Etherlink as a chain for doers, not spectators
3. **DeFi as anchor vertical** -- The inline CTA banner ("Make money with DeFi on Etherlink") and DeFi as the first trending search signal that DeFi is the primary use case driving ecosystem adoption
4. **Independence and neutrality** -- The footer disclaimer carefully distances etherlink.com from the listed projects, emphasizing independent development and no endorsement
5. **Accessibility** -- "Whether you are a developer, artist, creative, or institution, discover empowerment through web3 with the accessible Etherlink blockchain today" (footer) positions Etherlink as approachable across audiences
