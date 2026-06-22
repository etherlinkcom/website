# External Links Audit

Compiled from full codebase review of etherlink.com. All external URLs found in source code, organized by category.

---

## Navigation Links (Global -- Navbar & Footer)

These links appear on every page via the root layout (`app/layout.tsx`).

### Navbar (Desktop & Mobile)

| URL | Label / Context | Component |
|-----|----------------|-----------|
| `https://bridge.etherlink.com/` | "Bridge" dropdown item under "Use" | `Navbar/fixture.ts` |
| `/onramp` | "Onramp" dropdown item under "Use" | `Navbar/fixture.ts` |
| `https://status.etherlink.com/` | "Status" dropdown item under "Use" | `Navbar/fixture.ts` |
| `https://explorer.etherlink.com/` | "Explorer" dropdown item under "Use" | `Navbar/fixture.ts` |
| `https://governance.etherlink.com/` | "Governance" dropdown item under "Use" | `Navbar/fixture.ts` |
| `/defi` | "DeFi" dropdown item under "Use" | `Navbar/fixture.ts` |
| `https://docs.etherlink.com/` | "Docs" dropdown item under "Build" | `Navbar/fixture.ts` |
| `https://build.etherlink.com/landing` | "Games" dropdown item under "Build" | `Navbar/fixture.ts` |
| `https://docs.etherlink.com/get-started/using-your-wallet/` | "Use your wallet" dropdown item under "Build" | `Navbar/fixture.ts` |
| `https://shadownet.faucet.etherlink.com/` | "Faucet" nested under "Shadownet Resources" > "Build" | `Navbar/fixture.ts` |
| `https://shadownet.explorer.etherlink.com/` | "Explorer" nested under "Shadownet Resources" > "Build" | `Navbar/fixture.ts` |
| `https://shadownet.bridge.etherlink.com/` | "Tezos Bridge" nested under "Shadownet Resources" > "Build" | `Navbar/fixture.ts` |
| `/ecosystem` | "Ecosystem" top-level nav item | `Navbar/fixture.ts` |
| `https://medium.com/@etherlink` | "Blog" top-level nav item | `Navbar/fixture.ts` |
| `https://twitter.com/etherlink` | X (Twitter) icon button | `Navbar/index.tsx`, `Navbar/MobileNavbar.tsx` |
| `https://discord.gg/etherlink` | Discord icon button | `Navbar/index.tsx`, `Navbar/MobileNavbar.tsx` |
| `https://docs.etherlink.com/` | "Start Building" button (mobile CTA) | `Navbar/HomeCta.tsx` |

### Footer

| URL | Label / Context | Component |
|-----|----------------|-----------|
| `https://medium.com/@etherlink` | "Blog" text link | `footer.tsx` |
| `https://docs.etherlink.com` | "Documentation" text link | `footer.tsx` |
| `/EtherlinkBrandAssets.zip` | "Brand Assets" download link | `footer.tsx` |
| `/cookies` | "Cookie Policy" text link | `footer.tsx` |
| `/privacy` | "Privacy Policy" text link | `footer.tsx` |
| `https://discord.gg/etherlink` | Discord icon | `footer.tsx` |
| `https://github.com/etherlinkcom` | GitHub icon | `footer.tsx` |
| `https://twitter.com/etherlink` | X (Twitter) icon | `footer.tsx` |
| `https://tezos.com` | "Powered by" Tezos logo | `footer.tsx` |

---

## Etherlink First-Party Services

| URL | Page(s) | Context |
|-----|---------|---------|
| `https://bridge.etherlink.com/` | Homepage, DeFi, DeFi strategy pages, Navbar, Onramp | "Bridge now" primary CTA; "Bridge" navbar link; strategy tutorial buttons; onboard cards |
| `https://bridge.etherlink.com/evm` | DeFi strategy pages (`/defi/[slug]`) | "Bridge now" button in strategy tutorials (T-Bill, Basis Trade, BTC Fi, Community Speculation, Market Making) |
| `https://bridge.etherlink.com/tezos/` | Onramp page | "Tezos Bridge" onboard card |
| `https://bridge.etherlink.com/evm/` | Onramp page | "Etherlink EVM Bridge" onboard card |
| `https://explorer.etherlink.com/` | Homepage (BottomCta), Navbar, ConnectButton (wallet config) | "View explorer" CTA box; navbar dropdown; wallet `blockExplorerUrls` |
| `https://docs.etherlink.com/` | Homepage (BottomCta), Navbar, Footer, Mobile CTA | "Read docs" CTA box; "Docs" nav link; "Documentation" footer link; "Start Building" mobile button |
| `https://docs.etherlink.com/get-started/using-your-wallet/` | Navbar | "Use your wallet" dropdown item under "Build" |
| `https://status.etherlink.com/` | Homepage (BottomCta), Navbar | "Check status" CTA box; "Status" nav dropdown |
| `https://governance.etherlink.com/` | Navbar | "Governance" dropdown item under "Use" |
| `https://build.etherlink.com/landing` | Navbar | "Games" dropdown item under "Build" |
| `https://node.mainnet.etherlink.com` | ConnectButton (wallet config) | RPC URL for "Add Etherlink Mainnet" wallet action |
| `https://shadownet.faucet.etherlink.com/` | Navbar, Homepage (BottomCta) | "Faucet" nested nav item; "Shadownet faucet" CTA box |
| `https://shadownet.explorer.etherlink.com/` | Navbar | "Explorer" nested nav item under Shadownet Resources |
| `https://shadownet.bridge.etherlink.com/` | Navbar | "Tezos Bridge" nested nav item under Shadownet Resources |

---

## DeFi Protocols

| URL | Page(s) | Context |
|-----|---------|---------|
| `https://www.iguanadex.com/?chain=etherlink` | DeFi strategy pages (T-Bill, Basis Trade, Community Speculation) | "Swap now" tutorial button; project link |
| `https://markets.superlend.xyz` | DeFi strategy pages (T-Bill, Basis Trade, BTC Fi) | "Supply now" tutorial button |
| `https://markets.superlend.xyz/` | DeFi strategy pages | Project involved link (trailing slash variant) |
| `https://hanji.io/` | DeFi strategy pages (BTC Fi, Community Speculation, Market Making) | Project involved link |
| `https://app.hanji.io/trade/0x65ea4dd7f789c71c0f57ed84b3bdc3062898d3cb` | DeFi strategy page (Market Making) | "Swap now" tutorial button (specific trading pair) |
| `https://uranium.io` | DeFi strategy page (Nuclear Speculation) | "Buy now" tutorial button |
| `https://app.uranium.io/en` | DeFi strategy page (Nuclear Speculation) | "Deposit now" tutorial button |
| `https://www.uranium.io/en` | DeFi strategy page (Nuclear Speculation) | Project involved link |
| `https://www.organicgrowth.wtf/` | DeFi strategy page (Community Speculation) | "Explore now" / "Buy now" tutorial buttons; project link |
| `https://defillama.com/chain/etherlink` | DeFi page (`/defi`) | "Stats" ghost button in hero section |

---

## Centralized Exchanges

All appear on the **Onramp page** (`/onramp`). Gate.io also appears on the **DeFi page** (`/defi`) onboard section.

| URL | Label | Page(s) |
|-----|-------|---------|
| `https://www.gate.io/` | "Gate" -- CEX card | `/onramp`, `/defi` (onboard section) |
| `https://www.kucoin.com/` | "KuCoin" -- CEX card | `/onramp` |
| `https://www.mexc.com/` | "MEXC" -- CEX card | `/onramp` |
| `https://www.bitmart.com/` | "BitMart" -- CEX card | `/onramp` |
| `https://www.ascendex.com/` | "AscendEX" -- CEX card | `/onramp` |
| `https://www.lbank.com/` | "LBank" -- CEX card | `/onramp` |
| `https://www.bitrue.com/` | "Bitrue" -- CEX card | `/onramp` |

---

## Fiat Onramps

| URL | Label | Page(s) |
|-----|-------|---------|
| `https://global.transak.com/` | "Transak" -- Onramp card | `/onramp`, `/defi` (onboard section), `/defi/nuclear-speculation` (project involved) |
| `https://checkout.banxa.com/` | "Banxa" -- Onramp card | `/onramp` |
| `https://rampnow.io/` | "Rampnow" -- Onramp card | `/onramp` |

---

## Bridge / Swap Aggregators

| URL | Label | Page(s) |
|-----|-------|---------|
| `https://jumper.exchange/` | "Jumper" -- Swap Bridge card | `/onramp` |
| `https://kyberswap.com/cross-chain?from=1&to=42793&tokenIn=eth&tokenOut=xtz` | "KyberSwap" -- Swap Bridge card | `/onramp` |

---

## Social Media & Community

| URL | Page(s) | Context |
|-----|---------|---------|
| `https://twitter.com/etherlink` | All pages (Navbar, Footer), DeFi Catalyst Accelerator event | X icon buttons; "Follow Us" CTA button |
| `https://discord.gg/etherlink` | All pages (Navbar, Footer) | Discord icon buttons |
| `https://discord.com/invite/etherlink` | Cookies page, Cookies CTA component | "Join our Discord" button; default CTA fallback link |
| `https://github.com/etherlinkcom` | All pages (Footer) | GitHub icon |
| `https://medium.com/@etherlink` | All pages (Navbar, Footer) | "Blog" nav link; "Blog" footer link |

---

## Tezos Ecosystem

| URL | Page(s) | Context |
|-----|---------|---------|
| `https://tezos.com` | All pages (Footer) | "Powered by" Tezos logo link |
| `https://tezos.com/developers/smart-rollups/` | Homepage | "Tezos Smart Rollups" card link in EVM section |

---

## Third-Party Services

| URL | Page(s) | Context |
|-----|---------|---------|
| `https://us.i.posthog.com` | All pages (via PHProvider) | PostHog analytics API host |
| `https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap` | All pages (layout.tsx `<head>`) | Google Fonts -- Inter font family |
| `https://policies.google.com/privacy` | Privacy page (`/privacy`) | "Google Privacy Policy" text link |
| `https://tools.google.com/dlpage/gaoptout` | Privacy page (`/privacy`) | "Google Analytics Opt-Out" text link |
| `https://business.safety.google/adscookies/` | Cookies page (`/cookies`) | Google Ads cookies info link |
| `https://www.verasafe.com/privacy-services/contact-article-27-representative` | Privacy page (`/privacy`) | VeraSafe EU GDPR representative contact form |

**Note:** Google Tag Manager is loaded via `GTM-MQ8V746L` in the layout. Fathom analytics is loaded with site ID `CGVCFOHS`. Vercel Analytics is included via `@vercel/analytics/react`. These are script-based integrations, not direct link URLs.

---

## Application / Program Links

| URL | Page(s) | Context |
|-----|---------|---------|
| `https://tt-tezos.typeform.com/bp-entry` | Builders Program page (`/builders-program`) | "Sign up today" primary button |

---

## Internal Self-Reference

| URL | Page(s) | Context |
|-----|---------|---------|
| `https://www.etherlink.com/defi` | Homepage (FeaturedSection) | Featured project card "Make money on Etherlink" -- links to own DeFi page |
| `https://www.etherlink.com` | Layout metadata | `metadataBase` for SEO/social cards |

---

## Email

| URL | Page(s) | Context |
|-----|---------|---------|
| `mailto:support@tezos.com` | Privacy page (`/privacy`) | Contact email for data protection inquiries |
