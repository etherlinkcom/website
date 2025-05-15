export type Partner = {
  alt: string
  image: string
}

export const DT_1ST_ROW = [
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'ethereum', image: '/img/defi/icons/ethereum.svg' },
  { alt: 'midas', image: '/img/defi/icons/midas.svg' },
  { alt: 'bnb', image: '/img/defi/icons/bnb.svg' },
  { alt: 'u308', image: '/img/defi/icons/u308.svg' },
  { alt: 'bnb', image: '/img/defi/icons/bnb.svg' }
]

export const DT_2ND_ROW = [
  { alt: 'ethereum', image: '/img/defi/icons/ethereum.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'bnb', image: '/img/defi/icons/bnb.svg' },
  { alt: 'u308', image: '/img/defi/icons/u308.svg' },
  { alt: 'Superlend', image: '/img/defi/icons/Superlend.svg' },
  { alt: 'midas', image: '/img/defi/icons/midas.svg' }
]

export const DT_3RD_ROW = [
  { alt: 'arbitrum', image: '/img/defi/icons/arbitrum.svg' },
  { alt: 'Hanji', image: '/img/defi/icons/Hanji.svg' },
  { alt: 'ethereum', image: '/img/defi/icons/ethereum.svg' },
  { alt: 'Superlend', image: '/img/defi/icons/Superlend.svg' },
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' }
]

export const DT_4TH_ROW = [
  { alt: 'Hanji', image: '/img/defi/icons/Hanji.svg' },
  { alt: 'arbitrum', image: '/img/defi/icons/arbitrum.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' },
  { alt: 'ethereum', image: '/img/defi/icons/ethereum.svg' },
  { alt: 'u308', image: '/img/defi/icons/u308.svg' }
]

export const MB_1ST_ROW = [
  { alt: 'u308', image: '/img/defi/icons/u308.svg' },
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'ethereum', image: '/img/defi/icons/ethereum.svg' },
  { alt: 'midas', image: '/img/defi/icons/midas.svg' },
  { alt: 'bnb', image: '/img/defi/icons/bnb.svg' },
  { alt: 'u308', image: '/img/defi/icons/u308.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'ethereum', image: '/img/defi/icons/ethereum.svg' },
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' },
  { alt: 'midas', image: '/img/defi/icons/midas.svg' },
  { alt: 'bnb', image: '/img/defi/icons/bnb.svg' }
]

export const MB_2ND_ROW = [
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' },
  { alt: 'arbitrum', image: '/img/defi/icons/arbitrum.svg' },
  { alt: 'Hanji', image: '/img/defi/icons/Hanji.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'ethereum', image: '/img/defi/icons/ethereum.svg' },
  { alt: 'Superlend', image: '/img/defi/icons/Superlend.svg' },
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' },
  { alt: 'arbitrum', image: '/img/defi/icons/arbitrum.svg' },
  { alt: 'Hanji', image: '/img/defi/icons/Hanji.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'ethereum', image: '/img/defi/icons/ethereum.svg' },
  { alt: 'Superlend', image: '/img/defi/icons/Superlend.svg' }
]

export type StrategyId =
  | 't-bill-savings'
  | 'basis-trade'
  | 'btc-fi'
  | 'nuclear-speculation'
  | 'community-speculation'
  | 'market-making'

export type Tutorial = {
  step: number
  title: string
  description: string
  image: string
}

type Project = {
  name: string
  icon: string
  link: string
}
export interface Strategy {
  id: StrategyId
  name: string
  tutorials: Tutorial[]
  projectInvolved: Project[]
  earning: string
}

export const STRATEGIES_DATA: Strategy[] = [
  {
    id: 't-bill-savings',
    name: 'T-Bill Savings',
    tutorials: [
      {
        step: 1,
        title: 'Bridge',
        description: 'Bridge in USDC using Etherlink Bridge',
        image: '/img/defi/strategies/t-bill-savings/step1.webp'
      },
      {
        step: 2,
        title: 'Swap',
        description: 'Swap USDC for mTBILL on IguanaDEX',
        image: '/img/defi/strategies/t-bill-savings/step2.webp'
      },
      {
        step: 3,
        title: 'Supply',
        description: 'Supply mTBILL on Superlend',
        image: '/img/defi/strategies/t-bill-savings/step3.webp'
      }
    ],
    projectInvolved: [
      {
        name: 'IguanaDEX',
        icon: '/img/defi/icons/iguana.svg',
        link: 'https://www.iguanadex.com/?chain=etherlink'
      },
      {
        name: 'Superlend',
        icon: '/img/defi/icons/Superlend.svg',
        link: 'https://markets.superlend.xyz/'
      },
      {
        name: 'Etherlink Bridge',
        icon: '/img/defi/icons/Etherlink.svg',
        link: 'https://bridge.etherlink.com/'
      }
    ],
    earning: '310% APR'
  },
  {
    id: 'basis-trade',
    name: 'Basis Trade',
    tutorials: [
      {
        step: 1,
        title: 'Bridge',
        description: 'Bridge in USDC using Etherlink Bridge',
        image: '/img/defi/strategies/basis-trade/step1.webp'
      },
      {
        step: 2,
        title: 'Swap',
        description: 'Swap USDC for mBASIS on IguanaDEX',
        image: '/img/defi/strategies/basis-trade/step2.webp'
      },
      {
        step: 3,
        title: 'Supply',
        description: 'Supply mBASIS on Superlend',
        image: '/img/defi/strategies/basis-trade/step3.webp'
      }
    ],
    projectInvolved: [
      {
        name: 'IguanaDEX',
        icon: '/img/defi/icons/iguana.svg',
        link: 'https://www.iguanadex.com/?chain=etherlink'
      },
      {
        name: 'Superlend',
        icon: '/img/defi/icons/Superlend.svg',
        link: 'https://markets.superlend.xyz/'
      },
      {
        name: 'Etherlink Bridge',
        icon: '/img/defi/icons/Etherlink.svg',
        link: 'https://bridge.etherlink.com/'
      }
    ],
    earning: '310% APR'
  },
  {
    id: 'btc-fi',
    name: 'BTC Fi',
    tutorials: [
      {
        step: 1,
        title: 'Bridge',
        description:
          'Bridge WBTC on the Etherlink Bridge, or if you already have funds on Etherlink, you can buy WBTC on Hanji or IguanaDEX',
        image: '/img/defi/strategies/btc-fi/step1.webp'
      },
      {
        step: 2,
        title: 'Supply',
        description: 'Supply WBTC on Superlend',
        image: '/img/defi/strategies/btc-fi/step2.webp'
      }
    ],
    projectInvolved: [
      {
        name: 'IguanaDEX',
        icon: '/img/defi/icons/iguana.svg',
        link: 'https://www.iguanadex.com/?chain=etherlink'
      },
      {
        name: 'Hanji',
        icon: '/img/defi/icons/Hanji.svg',
        link: 'https://hanji.io/'
      },
      {
        name: 'Superlend',
        icon: '/img/defi/icons/Superlend.svg',
        link: 'https://markets.superlend.xyz/'
      },
      {
        name: 'Etherlink Bridge',
        icon: '/img/defi/icons/Etherlink.svg',
        link: 'https://bridge.etherlink.com/'
      }
    ],
    earning: '310% APR'
  },
  {
    id: 'nuclear-speculation',
    name: 'Nuclear Speculation',
    tutorials: [
      {
        step: 1,
        title: 'Deposit USDC',
        description:
          'Bridge USDC into Etherlink or create an account at [uranium.io](https://uranium.io/en) and deposit via Transak.',
        image: '/img/defi/strategies/nuclear-speculation/step1.webp'
      },
      {
        step: 2,
        title: 'Buy',
        description: 'Buy xU3O8 with USDC',
        image: '/img/defi/strategies/nuclear-speculation/step2.webp'
      }
    ],
    projectInvolved: [
      {
        name: 'xU3O8',
        icon: '/img/defi/icons/u308.svg',
        link: 'https://www.uranium.io/en'
      },
      {
        name: 'Transak',
        icon: '/img/defi/icons/Transak.svg',
        link: 'https://global.transak.com/'
      },
      {
        name: 'Etherlink Bridge',
        icon: '/img/defi/icons/Etherlink.svg',
        link: 'https://bridge.etherlink.com/'
      }
    ],
    earning: '310% APR'
  },
  {
    id: 'community-speculation',
    name: 'Community Speculation',
    tutorials: [
      {
        step: 1,
        title: 'Bridge',
        description: 'Bridge tokens into Etherlink using Etherlink Bridge',
        image: '/img/defi/strategies/community-speculation/step1.webp'
      },
      {
        step: 2,
        title: 'Swap',
        description: 'Swap for XTZ on Hanji or IguanaDEX',
        image: '/img/defi/strategies/community-speculation/step2.webp'
      },
      {
        step: 3,
        title: 'Explore memecoins',
        description:
          'Go on OrganicGrowth’s website and look for some promising memecoin communities',
        image: '/img/defi/strategies/community-speculation/step3.webp'
      },
      {
        step: 4,
        title: 'Buy',
        description: 'Buy memecoins on OrganicGrowth using XTZ',
        image: '/img/defi/strategies/community-speculation/step4.webp'
      }
    ],
    projectInvolved: [
      {
        name: 'OrganicGrowth',
        icon: '/img/defi/icons/organic-growth.svg',
        link: 'https://www.organicgrowth.wtf/'
      },
      {
        name: 'Hanji',
        icon: '/img/defi/icons/Hanji.svg',
        link: 'https://hanji.io/'
      },
      {
        name: 'IguanaDEX',
        icon: '/img/defi/icons/iguana.svg',
        link: 'https://www.iguanadex.com/?chain=etherlink'
      },
      {
        name: 'Etherlink Bridge',
        icon: '/img/defi/icons/Etherlink.svg',
        link: 'https://bridge.etherlink.com/'
      }
    ],
    earning: '310% APR'
  },
  {
    id: 'market-making',
    name: 'Market Making',
    tutorials: [
      {
        step: 1,
        title: 'Bridge',
        description:
          'Bridge USDC, WETH, or WBTC into Etherlink using Etherlink Bridge',
        image: '/img/defi/strategies/market-making/step1.webp'
      },
      {
        step: 2,
        title: 'Supply',
        description:
          'Supply your combination of USDC/XTZ/WETH/WBTC in Hanji’s LP vault',
        image: '/img/defi/strategies/market-making/step2.webp'
      }
    ],
    projectInvolved: [
      {
        name: 'Hanji',
        icon: '/img/defi/icons/Hanji.svg',
        link: 'https://hanji.io/'
      },
      {
        name: 'Etherlink Bridge',
        icon: '/img/defi/icons/Etherlink.svg',
        link: 'https://bridge.etherlink.com/'
      }
    ],
    earning: '310% APR'
  }
]
