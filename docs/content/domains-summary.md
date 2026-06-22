# Linked Domains Summary

All unique domains referenced across the etherlink.com codebase, organized by relationship type.

---

## First-Party Domains (*.etherlink.com)

| Domain | Purpose | Where Used |
|--------|---------|------------|
| `www.etherlink.com` | Main marketing website (this site) | Layout metadata (`metadataBase`) |
| `bridge.etherlink.com` | Bridge interface -- transfer assets to/from Etherlink from Tezos L1 and other EVM chains. Subpaths: `/tezos/`, `/evm/` | Navbar, Homepage, DeFi pages, Onramp page |
| `explorer.etherlink.com` | Block explorer (Blockscout) -- transaction and network activity viewer | Navbar, Homepage BottomCta, ConnectButton wallet config |
| `docs.etherlink.com` | Developer documentation site. Subpaths include `/get-started/using-your-wallet/` | Navbar, Footer, Homepage BottomCta, Mobile CTA |
| `status.etherlink.com` | Network status / uptime monitoring page | Navbar, Homepage BottomCta |
| `governance.etherlink.com` | On-chain governance portal for Etherlink stakeholders | Navbar |
| `build.etherlink.com` | Gaming-focused builder landing page. Subpath: `/landing` | Navbar |
| `node.mainnet.etherlink.com` | Public RPC endpoint for Etherlink mainnet (chain ID 42793) | ConnectButton wallet configuration (not a user-facing link) |
| `shadownet.faucet.etherlink.com` | Testnet (Shadownet) faucet for getting test tokens | Navbar, Homepage BottomCta |
| `shadownet.explorer.etherlink.com` | Testnet (Shadownet) block explorer | Navbar |
| `shadownet.bridge.etherlink.com` | Testnet (Shadownet) bridge for Tezos L1 | Navbar |

**Pattern:** Mainnet services live at `{service}.etherlink.com`. Testnet equivalents use `shadownet.{service}.etherlink.com`.

---

## Etherlink Ecosystem Domains

### DeFi Protocols

| Domain | Project | Purpose | Where Referenced |
|--------|---------|---------|-----------------|
| `www.iguanadex.com` | IguanaDEX | DEX (decentralized exchange) on Etherlink -- token swaps | DeFi strategy tutorials, project links |
| `markets.superlend.xyz` | Superlend | Lending/supply protocol on Etherlink | DeFi strategy tutorials, project links |
| `hanji.io` / `app.hanji.io` | Hanji | Order-book DEX and LP vaults on Etherlink | DeFi strategy tutorials, project links |
| `uranium.io` / `app.uranium.io` / `www.uranium.io` | Uranium | Tokenized uranium trading platform | DeFi strategy (Nuclear Speculation) |
| `www.organicgrowth.wtf` | OrganicGrowth | Memecoin launchpad/exchange on Etherlink | DeFi strategy (Community Speculation) |

### Analytics

| Domain | Project | Purpose | Where Referenced |
|--------|---------|---------|-----------------|
| `defillama.com` | DefiLlama | DeFi analytics -- Etherlink chain stats (`/chain/etherlink`) | DeFi page hero "Stats" button |

### Centralized Exchanges

| Domain | Exchange | Where Referenced |
|--------|----------|-----------------|
| `www.gate.io` | Gate.io | Onramp page, DeFi onboard section |
| `www.kucoin.com` | KuCoin | Onramp page |
| `www.mexc.com` | MEXC | Onramp page |
| `www.bitmart.com` | BitMart | Onramp page |
| `www.ascendex.com` | AscendEX | Onramp page |
| `www.lbank.com` | LBank | Onramp page |
| `www.bitrue.com` | Bitrue | Onramp page |

### Fiat Onramps

| Domain | Service | Where Referenced |
|--------|---------|-----------------|
| `global.transak.com` | Transak | Onramp page, DeFi onboard section, Nuclear Speculation strategy |
| `checkout.banxa.com` | Banxa | Onramp page |
| `rampnow.io` | Rampnow | Onramp page |

### Bridge / Swap Aggregators

| Domain | Service | Where Referenced |
|--------|---------|-----------------|
| `jumper.exchange` | Jumper (built on Li.Fi) | Onramp page |
| `kyberswap.com` | KyberSwap | Onramp page |

---

## Third-Party Service Domains

| Domain | Service | Purpose | Where Referenced |
|--------|---------|---------|-----------------|
| `us.i.posthog.com` | PostHog | Product analytics (event tracking, user behavior) | PHProvider.tsx -- all pages |
| `fonts.googleapis.com` | Google Fonts | Inter font family loading | layout.tsx `<head>` -- all pages |
| `policies.google.com` | Google | Privacy policy reference | Privacy page |
| `tools.google.com` | Google | Analytics opt-out tool reference | Privacy page |
| `business.safety.google` | Google | Ads/cookies information reference | Cookies page |
| `www.verasafe.com` | VeraSafe | EU GDPR Article 27 representative contact | Privacy page |
| `tt-tezos.typeform.com` | Typeform | Builders program application form | Builders Program page |

**Script-based services (no clickable links):**
- Google Tag Manager (GTM-MQ8V746L) -- loaded via `@next/third-parties/google`
- Fathom Analytics (site ID CGVCFOHS) -- loaded via `fathom-client`
- Vercel Analytics -- loaded via `@vercel/analytics/react`

---

## Social / Community Domains

| Domain | Platform | Etherlink Handle/Path | Where Referenced |
|--------|----------|-----------------------|-----------------|
| `twitter.com` | X (Twitter) | `/etherlink` | Navbar, Footer, Mobile nav, DCA event page |
| `discord.gg` | Discord (invite) | `/etherlink` | Navbar, Footer, Mobile nav |
| `discord.com` | Discord (canonical) | `/invite/etherlink` | Cookies page CTA |
| `github.com` | GitHub | `/etherlinkcom` | Footer |
| `medium.com` | Medium (blog) | `/@etherlink` | Navbar, Footer |

**Note:** Discord uses two URL formats: `discord.gg/etherlink` (short invite) in navbar/footer and `discord.com/invite/etherlink` (canonical) in the cookies page CTA component.

---

## Partner / Parent Domains

| Domain | Relationship | Purpose | Where Referenced |
|--------|-------------|---------|-----------------|
| `tezos.com` | Parent ecosystem | Etherlink runs on Tezos' Smart Rollup technology. "Powered by" attribution in footer | Footer, Homepage EVM section |
| `tezos.com/developers/smart-rollups/` | Parent ecosystem -- technical docs | Smart Rollups educational link | Homepage EVM section card |

**Copyright:** "Copyright Tezos Foundation 2024" appears in the footer. The Tezos Foundation (Baarerstrasse 22, 6300 Zug, Switzerland) is identified as the data controller in privacy/cookies policies.

---

## Email Domains

| Address | Purpose | Where Referenced |
|---------|---------|-----------------|
| `support@tezos.com` | Data protection / privacy inquiries | Privacy page contact section |
