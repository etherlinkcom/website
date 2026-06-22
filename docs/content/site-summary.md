# Etherlink.com -- Website Summary

## Purpose

Etherlink.com is the primary marketing, onboarding, and ecosystem directory website for Etherlink, a decentralized EVM-compatible Layer 2 blockchain built on Tezos Smart Rollup technology. The site serves as the central hub to attract users and developers to the Etherlink network, surface the DeFi ecosystem, and funnel visitors toward key actions: bridging assets, exploring DeFi strategies, building dApps, and discovering ecosystem projects.

---

## Target Audiences

### Primary Personas

| Persona | Description | Key Pages |
|---------|-------------|-----------|
| **DeFi User / Investor** | Crypto-native users looking to deploy capital on Etherlink via lending, swapping, market making, or speculative strategies | `/defi`, `/defi/[slug]`, `/onramp` |
| **Developer / Builder** | Solidity/EVM developers evaluating Etherlink as a deployment target, or existing builders looking for tools and testnet resources | Homepage (developers section), Navbar "Build" dropdown, `/builders-program` |
| **Ecosystem Explorer** | Users browsing the directory of projects, dApps, and games deployed on Etherlink | `/ecosystem` |

### Secondary Personas

| Persona | Description | Key Pages |
|---------|-------------|-----------|
| **New Crypto User** | Users new to Etherlink who need onboarding pathways (CEX, fiat onramp, bridge) | `/onramp`, `/defi` onboard section |
| **Institutional/Compliance Reviewer** | Visitors reviewing privacy practices, cookie policies, and data handling | `/privacy`, `/cookies` |
| **Accelerator Applicant** | Founders seeking mentorship and funding through the Etherlink Builders Program or DeFi Catalyst Accelerator | `/builders-program`, `/events/defi-catalyst-accelerator` |

---

## Page Inventory

| Route | Page Name | Purpose | CMS-Driven? | Primary Persona | Nav Access |
|-------|-----------|---------|-------------|-----------------|------------|
| `/` | Homepage | Hero with value proposition, partner logos, featured section, speed/security features, Tezos Smart Rollup explainer, developer CTA | No | All | Logo / direct |
| `/defi` | DeFi Hub | DeFi hero with bridged value stat, 6 strategy cards, onboarding methods (CEX/Bridge/Onramp), FAQ | No (hardcoded fixture data) | DeFi User | Navbar "Use" dropdown |
| `/defi/[slug]` | Strategy Detail | Step-by-step tutorial for a specific DeFi strategy with video walkthroughs and action buttons | No (hardcoded fixture data) | DeFi User | Via `/defi` cards |
| `/onramp` | Onramp | Comprehensive listing of all onramp methods: 7 CEXes, 2 bridges, 2 swap aggregators, 3 fiat onramps | No (hardcoded fixture data) | DeFi User / New User | Navbar "Use" dropdown |
| `/ecosystem` | Ecosystem Directory | Filterable grid of all projects building on Etherlink, with tag-based filtering | Yes (Strapi CMS) | Ecosystem Explorer | Navbar top-level |
| `/builders-program` | Builders Program | Landing page for the Etherlink Builders Program with Typeform signup | No | Developer | **ORPHANED** — not linked from navbar, footer, or any other page |
| `/events/defi-catalyst-accelerator` | DeFi Catalyst Accelerator | Event page for the DCA program (no longer accepting applications) with schedule, features, program details, FAQ | No | Accelerator Applicant | **ORPHANED** — not linked from navbar, footer, or any other page |
| `/dca` | DCA Redirect | 301 redirect to `/events/defi-catalyst-accelerator` | N/A | N/A | **ORPHANED** — redirect to orphaned page |
| `/cookies` | Cookie Policy | Legal cookie policy for the Tezos Foundation | No | Compliance Reviewer | Footer |
| `/privacy` | Privacy Notice | GDPR/FADP privacy notice for the Tezos Foundation | No | Compliance Reviewer | Footer |

### DeFi Strategy Sub-pages (generated from fixture data)

| Slug | Strategy Name | Type |
|------|--------------|------|
| `/defi/t-bill-savings` | T-Bill Savings | Supply |
| `/defi/basis-trade` | Basis Trade | Supply |
| `/defi/btc-fi` | BTC Fi | Supply |
| `/defi/nuclear-speculation` | Nuclear Speculation | Buy |
| `/defi/community-speculation` | Community Speculation | Buy |
| `/defi/market-making` | Market Making | Supply |

---

## Content Architecture

### Navigation Structure

The site uses a two-tier dropdown navigation with four top-level items:

```
Use (dropdown)
  Bridge          -> bridge.etherlink.com
  Onramp          -> /onramp
  Status          -> status.etherlink.com
  Explorer        -> explorer.etherlink.com
  Governance      -> governance.etherlink.com
  DeFi            -> /defi

Build (dropdown)
  Docs            -> docs.etherlink.com
  Games           -> build.etherlink.com/landing
  Use your wallet -> docs.etherlink.com/get-started/using-your-wallet/
  Shadownet Resources (nested dropdown)
    Faucet        -> shadownet.faucet.etherlink.com
    Explorer      -> shadownet.explorer.etherlink.com
    Tezos Bridge  -> shadownet.bridge.etherlink.com

Ecosystem         -> /ecosystem
Blog              -> medium.com/@etherlink
```

Social links (X, Discord) appear in the navbar. The footer adds GitHub and a "Powered by Tezos" attribution.

### Content Organization Patterns

1. **Hardcoded fixture data**: Most page content is stored in TypeScript fixture files (`fixture.ts`), not in the CMS. This includes DeFi strategies, onramp providers, partner logos, feature boxes, and FAQ items.

2. **CMS-driven content**: Only the ecosystem project directory (`/ecosystem`) pulls data from Strapi CMS. Projects have names, descriptions, tags, logos, and links managed through the CMS.

3. **Internal linking funnel**: The homepage funnels users to three primary actions via the "Get Started" section: Bridge (external), Explore Ecosystem (internal), and Start Building (anchor to developers section). The DeFi page provides a secondary funnel through step-by-step strategy guides.

4. **External service model**: The site itself is a static marketing layer. All transactional functionality (bridging, swapping, lending, trading) lives on external domains -- primarily first-party (`*.etherlink.com`) or partner protocol sites.

---

## Key Value Propositions

The site communicates these core messages, primarily on the homepage:

| Value Proposition | Where Communicated |
|-------------------|--------------------|
| **Fast** -- "Ultrafast transactions: Soft confirmations in less than 500ms" | Homepage Speed section |
| **Fair** -- "Decentralized governance: Stakeholders can propose, vote, and shape the network" | Homepage Speed section |
| **Nearly Free** -- "At only a fraction of a cent, Etherlink fees are as low as it gets!" | Homepage hero, Speed section |
| **Non-custodial** -- "No exclusive or irreversible third-party control" | Homepage Speed section |
| **EVM Compatible** -- "Smoothly deploy any EVM codebase and migrate your users and assets" | Homepage ExperienceSection |
| **Tezos-secured** -- "Tezos-enshrined for ultimate Layer 1 security" | Homepage Speed section, EVM section |
| **Future-proof** -- "Upgradability facilitated through Tezos' established on-chain governance" | Homepage ExperienceSection |
| **DeFi Opportunity** -- "$80,000,000+ bridged to Etherlink to date" | DeFi page hero |

The headline tagline is: **"The fast, fair and (nearly) free L2"**

---

## Technology & Infrastructure

### Frontend Stack

| Component | Technology |
|-----------|-----------|
| Framework | Next.js 13 (App Router) with static export (`output: 'export'`) |
| Language | TypeScript |
| Styling | Tailwind CSS (JIT mode) + Flowbite React plugin |
| Font | Inter (Google Fonts, weights 400-700) |
| Animations | GSAP (ScrollTrigger), Lottie (react), react-awesome-reveal (Fade) |
| Build output | Static files in `out/` directory |

### CMS

| Component | Technology |
|-----------|-----------|
| Headless CMS | Strapi v5 (GraphQL API) |
| Collections | `EtherlinkEcosystemProject`, `EtherlinkProjectTag` |
| Usage | Ecosystem project directory only |

### Analytics Stack (Triple-stack)

| Service | Purpose | Integration Method |
|---------|---------|-------------------|
| PostHog | Product analytics, event tracking | JS SDK with custom API host (`us.i.posthog.com`) |
| Fathom | Privacy-friendly page view analytics | `fathom-client` (site ID `CGVCFOHS`) |
| Vercel Analytics | Performance/web vitals | `@vercel/analytics/react` |
| Google Tag Manager | Tag management container | `@next/third-parties/google` (GTM-MQ8V746L) |

### Compliance

- Cookie consent banner with Accept/Necessary-Only options (stored as `etherlink_cookie_consent` cookie on `.etherlink.com`)
- Cookie Policy and Privacy Notice pages
- VeraSafe EU GDPR Article 27 representative
- Data controller: Tezos Foundation, Zug, Switzerland

---

## External Ecosystem

### First-Party Services (10 subdomains)

Etherlink operates a suite of services across subdomains: bridge, explorer, docs, status, governance, build (games), and RPC node on mainnet, plus faucet, explorer, and bridge on Shadownet (testnet).

### DeFi Protocol Partners (5 protocols)

The DeFi page features deep integrations with IguanaDEX (DEX), Superlend (lending), Hanji (order-book DEX/LP), Uranium (tokenized commodities), and OrganicGrowth (memecoin launchpad). Each is woven into step-by-step strategy tutorials.

### Exchange & Onramp Partners (12 services)

Seven CEXes (Gate, KuCoin, MEXC, BitMart, AscendEX, LBank, Bitrue), two bridge aggregators (Jumper, KyberSwap), and three fiat onramps (Transak, Banxa, Rampnow) provide onboarding pathways.

### Infrastructure Partners (shown in logo carousel)

The homepage partner carousel displays 33 ecosystem partners including Blockscout, LayerZero, The Graph, Thirdweb, Pyth, Fireblocks, MetaMask, Safe, Rarible, and others. These are logo-only references without clickable links.

---

## Observations

### Strengths

1. **Clear onboarding funnels**: The site provides well-structured pathways from "I have nothing" to "I'm earning on DeFi" through CEX, bridge, and fiat onramp options, with step-by-step strategy tutorials complete with video walkthroughs.

2. **Strong DeFi content**: The `/defi` section with six distinct strategies, each with multi-step tutorials and direct action buttons, is a standout feature that goes beyond typical L2 marketing sites.

3. **Comprehensive navbar**: The dropdown navigation efficiently organizes both "Use" (end-user) and "Build" (developer) actions, including testnet resources.

4. **Triple analytics stack**: PostHog, Fathom, and Vercel Analytics together provide product analytics, privacy-respecting metrics, and performance data.

### Notable Patterns

1. **Two orphaned pages**: `/builders-program` and `/events/defi-catalyst-accelerator` (plus its `/dca` redirect) are not reachable from any navigation, footer link, or internal page link. They exist only as direct-URL destinations — likely shared via external campaigns or social posts. Neither page has inbound links from the site itself.

2. **Minimal CMS usage**: Despite having Strapi v5 integrated, only the ecosystem directory uses CMS data. All DeFi strategies, onramp providers, partner logos, and page content are hardcoded in fixture files. This means content updates require code deployments.

2. **DeFi Catalyst Accelerator is closed**: The `/events/defi-catalyst-accelerator` page states "No longer accepting applications" but remains accessible and linked. The `/dca` shortcut redirect is still active.

3. **Builders Program is a single CTA**: The `/builders-program` page is minimal -- just a headline, one sentence of description, and a Typeform link. There is no detailed program information on the site itself.

4. **Blog is fully external**: The blog lives entirely on Medium (`medium.com/@etherlink`) with no on-site blog or content mirroring.

5. **Discord URL inconsistency**: Two Discord URL formats are used: `discord.gg/etherlink` (navbar, footer, mobile nav) and `discord.com/invite/etherlink` (cookies page CTA). Both resolve to the same destination but the inconsistency is notable.

6. **Copyright year**: Footer displays "Copyright Tezos Foundation 2024" -- may need updating.

7. **Self-referencing link**: The homepage FeaturedSection links to `https://www.etherlink.com/defi` using an absolute URL rather than the relative path `/defi`. This works but is inconsistent with the rest of the codebase which uses relative paths for internal navigation.

8. **No 404 page**: No custom `not-found.tsx` was found in the app directory, so Next.js default 404 handling applies.
