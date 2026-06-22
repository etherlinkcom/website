# Onramp Page (/onramp)

## Target Personas

- **New Etherlink users** who need to get funds onto the Etherlink network for the first time
- **Crypto holders on other chains** looking to bridge assets to Etherlink from EVM chains or Tezos L1
- **Fiat-to-crypto buyers** who want to purchase $XTZ using traditional currency
- **CEX users** who already hold $XTZ on centralized exchanges and want to transfer to Etherlink

## Page Content

### Metadata / SEO

- **Title:** "Onramp funds to Etherlink | Etherlink"
- **Meta description:** "Explore the available options to onramp your funds to Etherlink, including exchanges, bridges and fiat onramps."
- **Twitter card:** Summary large image; title "Onramp funds to Etherlink"; image `/img/onramp/onramp-twitter-card.webp`
- **Canonical URL:** `/onramp`

### Hero / Page Header

- **Heading:** "Many easy ways to onboard" (split styling: "Many easy" in neon green, "ways to onboard" in white)
- **Subheading:** "Transfer from a CEX, bridge assets, or use fiat"

### Centralized Exchanges (CEX) Section

Seven provider cards, all with the same description pattern:

| Provider | Description | Link |
|----------|-------------|------|
| **Gate** | Buy and transfer $XTZ to Etherlink | https://www.gate.io/ |
| **KuCoin** | Buy and transfer $XTZ to Etherlink | https://www.kucoin.com/ |
| **MEXC** | Buy and transfer $XTZ to Etherlink | https://www.mexc.com/ |
| **BitMart** | Buy and transfer $XTZ to Etherlink | https://www.bitmart.com/ |
| **AscendEX** | Buy and transfer $XTZ to Etherlink | https://www.ascendex.com/ |
| **LBank** | Buy and transfer $XTZ to Etherlink | https://www.lbank.com/ |
| **Bitrue** | Buy and transfer $XTZ to Etherlink | https://www.bitrue.com/ |

- **Category label on each card:** "CENTRALIZED EXCHANGE"
- **Analytics event pattern:** `onboard:cex:{provider}:click`

### Bridge Section

Four provider cards:

| Provider | Category | Description | Link |
|----------|----------|-------------|------|
| **Tezos Bridge** | Tezos | Bridge your assets to Etherlink from Tezos L1 | https://bridge.etherlink.com/tezos/ |
| **Etherlink EVM Bridge** | EVM Bridge | Bridge your assets to Etherlink from other EVM chains | https://bridge.etherlink.com/evm/ |
| **Jumper** | Swap Bridge | User-friendly cross-chain swap and bridge aggregator built on Li.Fi, supporting 25+ networks and major DEXs | https://jumper.exchange/ |
| **KyberSwap** | Swap Bridge | Cross-chain decentralized trading solution that helps users find the best swap rates | https://kyberswap.com/cross-chain?from=1&to=42793&tokenIn=eth&tokenOut=xtz |

- **Note:** Bridge links (Tezos Bridge, EVM Bridge) open in the same tab (`_self`); all other links open in a new tab (`_blank`)
- **Analytics event pattern:** `onboard:bridge:{provider}:click`

### Fiat Onramp Section

Three provider cards:

| Provider | Description | Link |
|----------|-------------|------|
| **Transak** | Buy $XTZ using fiat | https://global.transak.com/ |
| **Banxa** | Buy $XTZ using fiat | https://checkout.banxa.com/ |
| **Rampnow** | Buy $XTZ using fiat | https://rampnow.io/ |

- **Category label on each card:** "ONRAMP"
- **Analytics event pattern:** `onboard:onramp:{provider}:click`

### Disclaimer / Footer Text

> Please check each site for the applicable terms of use and privacy policy details. One or more of the following limitations may apply -- identity verification, transaction fees, purchase limits, country restrictions.

### Card UI Pattern

Each provider card displays:
1. Provider image/logo (top)
2. Category label (uppercase, e.g., "CENTRALIZED EXCHANGE") with a green arrow icon
3. Provider name (large, neon green)
4. Description text (grey)
5. Entire card is clickable, linking to the provider

## Key Messaging Themes

- **Ease and variety:** "Many easy ways to onboard" -- emphasizes low friction and multiple options
- **Three clear pathways:** CEX transfer, bridging, and fiat purchase -- covering all user backgrounds
- **$XTZ as the native asset:** All CEX and fiat onramp descriptions center on buying/transferring $XTZ
- **Cross-chain accessibility:** Bridges from both Tezos L1 and EVM chains, plus aggregators (Jumper, KyberSwap)
- **Regulatory awareness:** Disclaimer about identity verification, fees, limits, and country restrictions signals compliance-consciousness
- **No single preferred provider:** All options presented equally in a grid layout, no ranking or recommendation
