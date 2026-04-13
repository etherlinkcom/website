# Strapi Schema: Etherlink CMS

This document defines all Strapi collection types needed to replace the Airtable CMS for the Etherlink website. There are **2 collections** to create, plus data to import.

---

## 1. Collection Type: `EtherlinkProjectTag`

**API ID:** `etherlink-project-tag`

Create this **first** — projects reference tags via relation.

### Fields

| Field | Strapi Type | Required | Notes |
|---|---|---|---|
| `name` | Short text | Yes | Tag slug/key (e.g., "defi", "nfts", "dev-tools") |
| `slug` | UID (from `name`) | Yes | Same as name for these |
| `label` | Short text | Yes | Display label (e.g., "DeFi", "NFTs", "Dev Tools") |
| `projects` | Relation (many-to-many) | — | Inverse of `EtherlinkEcosystemProject.tags` |

### Data to Import (16 tags)

| `name` (slug) | `label` (display) |
|---|---|
| `AI` | AI |
| `DePIN` | DePIN |
| `community` | Community |
| `defi` | DeFi |
| `dev-tools` | Dev Tools |
| `ecosystem-partner` | Ecosystem Partner |
| `gaming` | Gaming |
| `infra` | Infra |
| `kyc` | KYC |
| `nfts` | NFTs |
| `on-ramp` | On Ramp |
| `payments` | Payments |
| `rpc` | RPC |
| `social` | Social |
| `stablecoins` | Stablecoins |
| `wallet` | Wallet |

Full tag data with project associations: `data/airtable-tags.json`

---

## 2. Collection Type: `EtherlinkEcosystemProject`

**API ID:** `etherlink-ecosystem-project`

### Fields

| Field | Strapi Type | Required | Notes |
|---|---|---|---|
| `name` | Short text | Yes | Project display name (e.g., "LayerZero", "Pyth Network") |
| `slug` | UID (from `name`) | Yes | URL-safe identifier. **Not populated in Airtable** — Strapi should auto-generate from `name` |
| `description` | Long text | Yes | Short project description (1-2 sentences) |
| `website` | Short text | Yes | Project URL (e.g., "https://layerzero.network/") |
| `twitter` | Short text | No | Twitter/X URL. Populated for 67/69 projects |
| `email` | Email | No | Contact email. **Not populated** for any current project |
| `logo` | Media (single image) | Yes | Project logo (JPEG, PNG, SVG, WebP) |
| `tags` | Relation (many-to-many) | Yes | → `EtherlinkProjectTag` |
| `rank` | Integer | Yes | Display sort order (0–10, lower = higher priority) |
| `approvalStatus` | Enumeration | Yes | Values: `approved`, `in_review`, `rejected`, `submitted` |
| `status` | Enumeration | Yes | Values: `active`, `inactive` |
| `featured` | Boolean | No | Whether to show in home ecosystem preview. Default: `false` |
| `network` | Enumeration | Yes | Values: `etherlink`, `tezos_etherlink` |
| `date` | Date | No | Original submission/listing date |

### Fields intentionally NOT migrated

| Airtable Field | Reason |
|---|---|
| `bypass_url_check` | URL health checking will not be replicated in Strapi |
| `Responsible` | Internal field, not used in the website |

### Data to Import

Full dataset: `data/airtable-ecosystem.json` (69 records)

- **69 projects**, all `approved` and `active`
- **62** are `etherlink`, **7** are `tezos_etherlink`
- **67/69** have Twitter URLs
- All 69 have logos, descriptions, websites, and ranks
- Rank range: 0–10

---

## Expected GraphQL Queries

### Fetch ecosystem projects (sorted by rank)

```graphql
query GetEcosystemProjects {
  etherlinkEcosystemProjects(
    filters: { approvalStatus: { eq: "approved" }, status: { eq: "active" } }
    sort: "rank:asc"
    pagination: { pageSize: 100 }
    status: PUBLISHED
  ) {
    documentId
    name
    slug
    description
    website
    twitter
    rank
    featured
    network
    logo { url name }
    tags { documentId name slug label }
  }
}
```

### Fetch all tags

```graphql
query GetProjectTags {
  etherlinkProjectTags(status: PUBLISHED) {
    documentId
    name
    slug
    label
  }
}
```

