# DeFi Pages - Content Audit

> Audit date: 2026-04-16
> Source files: `app/defi/` directory

---

## DeFi Listing Page (/defi)

### SEO Metadata

- **Title:** Make money with DeFi on Etherlink | Etherlink
- **Description:** Explore the best ways to grow your portfolio with simple DeFi strategies for every risk level.
- **Twitter Card:** summary_large_image
- **Twitter Site:** @etherlink
- **Twitter Title:** Make money with DeFi on Etherlink
- **Twitter Description:** Explore the best ways to grow your portfolio with simple DeFi strategies for every risk level.
- **Twitter Image:** /img/defi/twitter-card.webp
- **Canonical URL:** /defi

### Target Personas

- Crypto-curious users looking for yield/earnings on their existing assets
- DeFi newcomers who need guided, step-by-step strategies
- Experienced DeFi users seeking an overview of Etherlink's ecosystem and yield opportunities
- Users across multiple risk tolerances (from stable savings to speculative memecoins)

### Page Content

#### Breadcrumbs
Home > Use > DeFi

#### Hero Section
- **Stat badge:** "$80,000,000+ bridged to Etherlink to date"
- **Headline:** "Make money with DeFi on Etherlink"
- **Subheadline:** "Explore the best ways to grow your portfolio with simple DeFi strategies for every risk level."
- **Primary CTA:** "View strategies" (anchors to #strategies section)
- **Secondary CTA:** "Stats" (links to https://defillama.com/chain/etherlink)

#### Partner Carousel (Hero)
Auto-scrolling logo carousels showing ecosystem partner icons:
- **Desktop:** 4 rows of 6 partners each
- **Mobile:** 2 rows of 12 partners each

Partners displayed: Spiko, IguanaDEX, Superlend, Midas, U3O8, Jumper, LTBC, Organic Growth, Gearbox, CRV (Curve), OKU, StacyFi

#### Strategies Section (#strategies)
- **Headline:** "*Start earning* in a few clicks" (green text on "Start earning")
- **Subheadline:** "Step-by-step guides to the top strategies on Etherlink"
- Displays 6 strategy cards in a 3-column grid (see Projects Listed section below)

### Onboarding Section (#onboard)

- **Headline:** "*Ways* to onboard" (green text on "Ways")
- **Subheadline:** "Transfer from a CEX, bridge assets, or use fiat"

Three onboarding cards:

1. **Gate.io - Centralized Exchange**
   - Description: "Buy and transfer $XTZ to Etherlink"
   - Link: https://www.gate.io/
   - PostHog event: `onboard:cex:click`

2. **Tezos & Etherlink - Bridge**
   - Description: "Bridge your assets to Etherlink"
   - Link: https://bridge.etherlink.com/
   - PostHog event: `onboard:bridge:click`

3. **Transak - Onramp**
   - Description: "Buy $XTZ using fiat"
   - Link: https://global.transak.com/
   - PostHog event: `onboard:onramp:click`

- **Footer CTA:** "See more" ghost button linking to /onramp

### FAQs

Accordion-style FAQ section (shared between listing page and all strategy pages):

1. **What is DeFi on Etherlink?**
   > DeFi, short for Decentralized Finance, is a way to do financial activities like lending, borrowing, and trading using blockchain technology instead of traditional banks. There's a broad set of DeFi strategies across Etherlink - & using DeFi on Etherlink means your assets don't just sit there, they earn.

2. **How does DeFi on Etherlink work?**
   > Once you've bridged assets onto Etherlink you can participate in DeFi and put your funds to work. You can explore tailored strategies, or the entire Etherlink DeFi [ecosystem](/ecosystem) to get started.

3. **Is DeFi on Etherlink safe?**
   > Every DeFi strategy and protocol carries some risk, from smart contracts to market moves. Some are steadier, others more speculative. Always do your own research and only deposit what you're comfortable with.

### Bottom CTA Section

- **Headline:** "Start Earning Today!"
- **Subheadline:** "Pick your strategy, onboard, and grow your portfolio"
- **CTA Button:** "Get XTZ" (anchors to #onboard)
- PostHog event: `onboard:getxtz:click`

---

## Strategy Pages (/defi/[slug])

All strategy pages share a common layout:
- Breadcrumbs: Home > DeFi > [Strategy Name]
- Hero section with strategy type badge, name, description
- Three info cards: YIELD PROVIDER, TOKENS USED, PROJECTS USED
- Step-by-step tutorial section with videos/images
- "More earning strategies" section (shows the other 5 strategies)
- Shared FAQ section (same as listing page)
- Shared bottom CTA ("Start Earning Today!")

---

### T-Bill Savings (/defi/t-bill-savings)

**SEO Title:** T-Bill Savings -- DeFi
**SEO Description:** The most stable savings account on Etherlink.
**Canonical URL:** /defi/t-bill-savings

**Strategy Type:** Supply
**Name:** T-Bill Savings
**Description:** "The most stable savings account on Etherlink."

**Yield Provider:** Superlend
**Tokens Used:** USDC, mTBILL
**Projects Involved:**
- IguanaDEX (https://www.iguanadex.com/?chain=etherlink)
- Superlend (https://markets.superlend.xyz/)
- Etherlink Bridge (https://bridge.etherlink.com/)

**How It Works (3 steps):**

| Step | Title | Description | CTA | Link |
|------|-------|-------------|-----|------|
| 1 | Bridge | Bridge in USDC using Etherlink Bridge | Bridge now | https://bridge.etherlink.com/evm |
| 2 | Swap | Swap USDC for mTBILL on IguanaDEX | Swap now | https://www.iguanadex.com/?chain=etherlink |
| 3 | Supply | Supply mTBILL on Superlend | Supply now | https://markets.superlend.xyz |

**Card on listing page:**
- Title: T-Bill Savings
- Description: "Stable savings on Etherlink."
- Tag: Supply
- PostHog event: `start_earning:tbill_savings:click`

---

### Basis Trade (/defi/basis-trade)

**SEO Title:** Basis Trade -- DeFi
**SEO Description:** Slightly higher risk than stable savings, but with the potential for higher rewards!
**Canonical URL:** /defi/basis-trade

**Strategy Type:** Supply
**Name:** Basis Trade
**Description:** "Slightly higher risk than stable savings, but with the potential for higher rewards!"

**Yield Provider:** Superlend
**Tokens Used:** USDC, mBASIS
**Projects Involved:**
- IguanaDEX (https://www.iguanadex.com/?chain=etherlink)
- Superlend (https://markets.superlend.xyz/)
- Etherlink Bridge (https://bridge.etherlink.com/)

**How It Works (3 steps):**

| Step | Title | Description | CTA | Link |
|------|-------|-------------|-----|------|
| 1 | Bridge | Bridge in USDC using Etherlink Bridge | Bridge now | https://bridge.etherlink.com/evm |
| 2 | Swap | Swap USDC for mBASIS on IguanaDEX | Swap now | https://www.iguanadex.com/?chain=etherlink |
| 3 | Supply | Supply mBASIS on Superlend | Supply now | https://markets.superlend.xyz |

**Card on listing page:**
- Title: Basis Trade
- Description: "Higher risk stable savings, higher rewards."
- Tag: Supply
- PostHog event: `start_earning:basis_trade:click`

---

### BTC Fi (/defi/btc-fi)

**SEO Title:** BTC Fi -- DeFi
**SEO Description:** Leverage your BTC to earn money!
**Canonical URL:** /defi/btc-fi

**Strategy Type:** Supply
**Name:** BTC Fi
**Description:** "Leverage your BTC to earn money!"

**Yield Provider:** Superlend
**Tokens Used:** WBTC
**Projects Involved:**
- IguanaDEX (https://www.iguanadex.com/?chain=etherlink)
- Hanji (https://hanji.io/)
- Superlend (https://markets.superlend.xyz/)
- Etherlink Bridge (https://bridge.etherlink.com/)

**How It Works (2 steps):**

| Step | Title | Description | CTA | Link |
|------|-------|-------------|-----|------|
| 1 | Bridge | Bridge WBTC on the Etherlink Bridge, or if you already have funds on Etherlink, you can buy WBTC on Hanji or IguanaDEX | Bridge now | https://bridge.etherlink.com/evm |
| 2 | Supply | Supply WBTC on Superlend | Supply now | https://markets.superlend.xyz |

**Card on listing page:**
- Title: BTC Fi
- Description: "Leverage your BTC to earn."
- Tag: Supply
- PostHog event: `start_earning:btc_fi:click`

---

### Nuclear Speculation (/defi/nuclear-speculation)

**SEO Title:** Nuclear Speculation -- DeFi
**SEO Description:** Uranium is the asset powering the nuclear energy revolution! You can find it tokenized uniquely on Etherlink.
**Canonical URL:** /defi/nuclear-speculation

**Strategy Type:** Buy
**Name:** Nuclear Speculation
**Description:** "Uranium is the asset powering the nuclear energy revolution! You can find it tokenized uniquely on Etherlink."

**Yield Provider:** Superlend
**Tokens Used:** USDC, xU3O8
**Projects Involved:**
- xU3O8 / uranium.io (https://www.uranium.io/en)
- Transak (https://global.transak.com/)
- Etherlink Bridge (https://bridge.etherlink.com/)

**How It Works (2 steps):**

| Step | Title | Description | CTA | Link |
|------|-------|-------------|-----|------|
| 1 | Deposit USDC | [Bridge USDC](https://bridge.etherlink.com) into Etherlink or create an account at uranium.io and deposit via Transak. | Deposit now | https://app.uranium.io/en |
| 2 | Buy | Buy xU3O8 with USDC | Buy now | https://uranium.io |

*Note: A commented-out "Sign Up" step exists in the source code that would have users create an account at uranium.io first.*

**Card on listing page:**
- Title: Nuclear Speculation
- Description: "Tokenized uranium unique to Etherlink"
- Tag: Buy
- PostHog event: `start_earning:uranium:click`

---

### Community Speculation (/defi/community-speculation)

**SEO Title:** Community Speculation -- DeFi
**SEO Description:** The attention economy is alive and well on Etherlink, and anyone can get involved! These are highly risky and speculative assets.
**Canonical URL:** /defi/community-speculation

**Strategy Type:** Buy
**Name:** Community Speculation
**Description:** "The attention economy is alive and well on Etherlink, and anyone can get involved! These are highly risky and speculative assets."

**Yield Provider:** Superlend
**Tokens Used:** USDC (icon shows XTZ icon), meme tokens (tooltip: "Tezos Memecoins")
**Projects Involved:**
- OrganicGrowth (https://www.organicgrowth.wtf/)
- Hanji (https://hanji.io/)
- IguanaDEX (https://www.iguanadex.com/?chain=etherlink)
- Etherlink Bridge (https://bridge.etherlink.com/)

**How It Works (4 steps):**

| Step | Title | Description | CTA | Link |
|------|-------|-------------|-----|------|
| 1 | Bridge | Bridge tokens into Etherlink using Etherlink Bridge | Bridge now | https://bridge.etherlink.com/evm |
| 2 | Swap | Swap for XTZ on Hanji or IguanaDEX | Swap now | https://www.iguanadex.com/?chain=etherlink |
| 3 | Explore memecoins | Go on OrganicGrowth's website and look for some promising memecoin communities | Explore now | https://www.organicgrowth.wtf/ |
| 4 | Buy | Buy memecoins on OrganicGrowth using XTZ | Buy now | https://www.organicgrowth.wtf/ |

*Note: Step 4 has no video, only a static image.*

**Card on listing page:**
- Title: Community Speculation
- Description: "These are highly risky and speculative assets."
- Tag: Buy
- PostHog event: `start_earning:comm_spec:click`

---

### Market Making (/defi/market-making)

**SEO Title:** Market Making -- DeFi
**SEO Description:** A simple way to get exposure to the same type of yield earned by market makers on Etherlink.
**Canonical URL:** /defi/market-making

**Strategy Type:** Supply
**Name:** Market Making
**Description:** "A simple way to get exposure to the same type of yield earned by market makers on Etherlink."

**Yield Provider:** Superlend
**Tokens Used:** USDC, WBTC, WETH
**Projects Involved:**
- Hanji (https://hanji.io/)
- Etherlink Bridge (https://bridge.etherlink.com/)

**How It Works (2 steps):**

| Step | Title | Description | CTA | Link |
|------|-------|-------------|-----|------|
| 1 | Bridge | Bridge USDC, WETH, or WBTC into Etherlink using Etherlink Bridge | Bridge now | https://bridge.etherlink.com/evm |
| 2 | Supply | Supply your combination of USDC/XTZ/WETH/WBTC in Hanji's LP vault | Swap now | https://app.hanji.io/trade/0x65ea4dd7f789c71c0f57ed84b3bdc3062898d3cb |

*Note: Step 2's CTA text says "Swap now" but the action is actually supplying to an LP vault.*

**Card on listing page:**
- Title: Market Making
- Description: "Buy $XTZ using fiat" (Note: this description appears incorrect -- it doesn't match the strategy's actual purpose)
- Tag: Supply
- PostHog event: `start_earning:market_making:click`

---

## Projects Listed (Strategy Cards on /defi)

All 6 strategy cards displayed on the listing page in a 3-column grid:

| # | ID | Title | Description | Tag | PostHog Event |
|---|-----|-------|-------------|-----|---------------|
| 1 | t-bill-savings | T-Bill Savings | Stable savings on Etherlink. | Supply | start_earning:tbill_savings:click |
| 2 | basis-trade | Basis Trade | Higher risk stable savings, higher rewards. | Supply | start_earning:basis_trade:click |
| 3 | btc-fi | BTC Fi | Leverage your BTC to earn. | Supply | start_earning:btc_fi:click |
| 4 | nuclear-speculation | Nuclear Speculation | Tokenized uranium unique to Etherlink | Buy | start_earning:uranium:click |
| 5 | community-speculation | Community Speculation | These are highly risky and speculative assets. | Buy | start_earning:comm_spec:click |
| 6 | market-making | Market Making | Buy $XTZ using fiat | Supply | start_earning:market_making:click |

Each card includes:
- Thumbnail image with video-on-hover (plays on mouse enter, resets on leave)
- Title in neon green
- Description text
- Tag badge (Supply or Buy)
- Arrow icon indicating clickable link to strategy detail page

---

## All External Links Referenced

| Destination | URL | Used In |
|-------------|-----|---------|
| Etherlink Bridge (EVM) | https://bridge.etherlink.com/evm | T-Bill, Basis Trade, BTC Fi, Community Speculation, Market Making |
| Etherlink Bridge | https://bridge.etherlink.com/ | Multiple strategies, Onboard section |
| IguanaDEX | https://www.iguanadex.com/?chain=etherlink | T-Bill, Basis Trade, Community Speculation |
| Superlend Markets | https://markets.superlend.xyz | T-Bill, Basis Trade, BTC Fi |
| Hanji | https://hanji.io/ | BTC Fi, Community Speculation, Market Making |
| Hanji Trade | https://app.hanji.io/trade/0x65ea4dd7f789c71c0f57ed84b3bdc3062898d3cb | Market Making |
| uranium.io | https://uranium.io | Nuclear Speculation |
| uranium.io App | https://app.uranium.io/en | Nuclear Speculation |
| OrganicGrowth | https://www.organicgrowth.wtf/ | Community Speculation |
| Transak | https://global.transak.com/ | Nuclear Speculation, Onboard section |
| Gate.io | https://www.gate.io/ | Onboard section |
| DefiLlama (Etherlink) | https://defillama.com/chain/etherlink | Hero Stats CTA |
| Ecosystem page | /ecosystem | FAQ answer |
| Onramp page | /onramp | Onboard "See more" button |

---

## Ecosystem Partner Logos (Carousel)

Partners featured in the hero carousel (unique set):
Spiko, IguanaDEX, Superlend, Midas, U3O8, Jumper, LTBC, Organic Growth, Gearbox, CRV (Curve), OKU, StacyFi

---

## Key Messaging Themes

1. **Accessibility & Simplicity:** "Make money with DeFi" -- direct, outcome-oriented language. "Start earning in a few clicks" and "step-by-step guides" emphasize low friction. Every strategy is broken into numbered steps with clear CTAs.

2. **Risk Spectrum:** Strategies are organized from stable/conservative (T-Bill Savings: "The most stable savings account") through moderate risk (Basis Trade: "slightly higher risk... higher rewards") to speculative (Community Speculation: "highly risky and speculative assets"). Tags classify strategies as either "Supply" (yield-generating) or "Buy" (speculative exposure).

3. **Etherlink as a DeFi Destination:** "$80,000,000+ bridged to Etherlink to date" serves as social proof. The ecosystem carousel reinforces breadth of protocol support. DefiLlama stats link provides transparency.

4. **Active Asset Management:** "Your assets don't just sit there, they earn" -- consistent theme that idle crypto should be put to work. The bottom CTA reinforces: "Pick your strategy, onboard, and grow your portfolio."

5. **Unique Offerings:** Nuclear Speculation is positioned as "tokenized uranium unique to Etherlink" -- differentiating from other chains. Memecoins via OrganicGrowth tap into the "attention economy."

6. **Self-Custody & Responsibility:** FAQ answers frame risk honestly -- "Always do your own research and only deposit what you're comfortable with." No guaranteed returns are promised.

7. **Onboarding Funnel:** Three clear on-ramps (CEX via Gate.io, Bridge, Fiat via Transak) cover different user starting points. The "Get XTZ" CTA at the bottom creates a clear conversion path.

---

## Content Issues & Notes

1. **Market Making card description mismatch:** The listing page card for Market Making says "Buy $XTZ using fiat" which does not describe market making. The strategy detail page correctly says "A simple way to get exposure to the same type of yield earned by market makers on Etherlink."

2. **Market Making Step 2 CTA mismatch:** The button text says "Swap now" but the action is supplying to Hanji's LP vault. Should likely say "Supply now."

3. **Community Speculation token icon inconsistency:** The `tokenUsed` array has an entry with `alt: 'USDC'` but uses the XTZ icon (`/img/defi/token/xtz.svg`). This appears to be a data error -- the alt text should likely be "XTZ" since the strategy involves swapping for XTZ.

4. **All strategies list Superlend as yield provider:** Even strategies that don't use Superlend (Nuclear Speculation uses uranium.io; Community Speculation uses OrganicGrowth; Market Making uses Hanji LP vaults). This may be intentional or an oversight from template duplication.

5. **Commented-out step:** Nuclear Speculation has a commented-out "Sign Up" step that may need to be restored or permanently removed.

6. **Card descriptions vs. strategy descriptions diverge:** Several strategies have different descriptions on the listing page card vs. the detail page (e.g., BTC Fi card: "Leverage your BTC to earn." vs. detail: "Leverage your BTC to earn money!"). This is likely intentional for brevity but worth verifying.
