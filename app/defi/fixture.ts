export type Partner = {
  alt: string
  image: string
}

export const DT_1ST_ROW = [
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'ethereum', image: '/img/defi/icons/ethereum.svg' },
  { alt: 'midas', image: '/img/defi/icons/midas.svg' },
  { alt: 'bnb', image: '/img/defi/icons/bnb.svg' },
  { alt: 'u308', image: '/img/defi/icons/u308.svg' }, // first item
  { alt: 'optimism', image: '/img/defi/icons/optimism.svg' } // 2nd item
]

export const DT_2ND_ROW = [
  { alt: 'ethereum', image: '/img/defi/icons/ethereum.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'optimism', image: '/img/defi/icons/optimism.svg' },
  { alt: 'u308', image: '/img/defi/icons/u308.svg' },
  { alt: 'bnb', image: '/img/defi/icons/bnb.svg' },
  { alt: 'midas', image: '/img/defi/icons/midas.svg' }
]

export const DT_3RD_ROW = [
  { alt: 'arbitrum', image: '/img/defi/icons/arbitrum.svg' },
  { alt: 'Hanji', image: '/img/defi/icons/Hanji.svg' },
  { alt: 'base', image: '/img/defi/icons/base.svg' },
  { alt: 'Superlend', image: '/img/defi/icons/Superlend.svg' },
  { alt: 'avalanche', image: '/img/defi/icons/avalanche.svg' },
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' }
]

export const DT_4TH_ROW = [
  { alt: 'Hanji', image: '/img/defi/icons/Hanji.svg' },
  { alt: 'arbitrum', image: '/img/defi/icons/arbitrum.svg' },
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' },
  { alt: 'avalanche', image: '/img/defi/icons/avalanche.svg' },
  { alt: 'Superlend', image: '/img/defi/icons/Superlend.svg' },
  { alt: 'base', image: '/img/defi/icons/base.svg' }
]

export const MB_1ST_ROW = [
  { alt: 'u308', image: '/img/defi/icons/u308.svg' },
  { alt: 'optimism', image: '/img/defi/icons/optimism.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'ethereum', image: '/img/defi/icons/ethereum.svg' },
  { alt: 'midas', image: '/img/defi/icons/midas.svg' },
  { alt: 'bnb', image: '/img/defi/icons/bnb.svg' },
  { alt: 'u308', image: '/img/defi/icons/u308.svg' },
  { alt: 'optimism', image: '/img/defi/icons/optimism.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'ethereum', image: '/img/defi/icons/ethereum.svg' },
  { alt: 'midas', image: '/img/defi/icons/midas.svg' },
  { alt: 'bnb', image: '/img/defi/icons/bnb.svg' }
]

export const MB_2ND_ROW = [
  { alt: 'avalanche', image: '/img/defi/icons/avalanche.svg' },
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' },
  { alt: 'arbitrum', image: '/img/defi/icons/arbitrum.svg' },
  { alt: 'Hanji', image: '/img/defi/icons/Hanji.svg' },
  { alt: 'base', image: '/img/defi/icons/base.svg' },
  { alt: 'Superlend', image: '/img/defi/icons/Superlend.svg' },
  { alt: 'avalanche', image: '/img/defi/icons/avalanche.svg' },
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' },
  { alt: 'arbitrum', image: '/img/defi/icons/arbitrum.svg' },
  { alt: 'Hanji', image: '/img/defi/icons/Hanji.svg' },
  { alt: 'base', image: '/img/defi/icons/base.svg' },
  { alt: 'Superlend', image: '/img/defi/icons/Superlend.svg' }
]

export type StrategyId =
  | 't-bill-savings'
  | 'basis-trade'
  | 'btc-fi'
  | 'nuclear-speculation'
  | 'community-speculation'
  | 'market-making'

type Tutorial = {
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
        image: ''
      },
      {
        step: 2,
        title: 'Swap',
        description: 'Swap USDC for mTBILL on IguanaDEX',
        image: ''
      },
      {
        step: 3,
        title: 'Supply',
        description: 'Supply mTBILL on Superlend',
        image: ''
      },
      {
        step: 4,
        title: 'Borrow',
        description:
          'Borrow USDC and/or USDT on Superlend for the cheapest rate',
        image: ''
      },
      {
        step: 5,
        title: 'Swap',
        description:
          'Description: Swap mTBILL on IguanaDEX with the borrowed USDC/USDT and then repeat step 2-4 until you reach the limit (borrow rate exceeds mTBILL yield or hit the limit given by LTV)',
        image: ''
      }
    ],
    projectInvolved: [
      {
        name: 'IguanaDEX',
        icon: '/img/defi/icons/Iguana.svg',
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
        image: '/img'
      },
      {
        step: 2,
        title: 'Swap',
        description: 'Buy mBASIS on IguanaDEX',
        image: '/img2'
      },
      {
        step: 3,
        title: 'Supply',
        description: 'Supply mBASIS on Superlend',
        image: ''
      },
      {
        step: 4,
        title: 'Borrow',
        description:
          'Borrow USDC and/or USDT on Superlend for the cheapest rate',
        image: ''
      },
      {
        step: 5,
        title: 'Swap',
        description:
          'Description: Buy mBASIS on IguanaDEX with the borrowed USDC/USDT and then repeat step 2-4 until you reach the limit (borrow rate exceeds mBASIS yield or hit the limit given by LTV)',
        image: ''
      }
    ],
    projectInvolved: [
      {
        name: 'IguanaDEX',
        icon: '/img/defi/icons/Iguana.svg',
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
        image: ''
      },
      {
        step: 2,
        title: 'Supply',
        description: 'Supply WBTC on Superlend',
        image: ''
      },
      {
        step: 3,
        title: 'Borrow',
        description: ' Borrow USDC/USDT on Superlend for the cheapest rate',
        image: ''
      },
      {
        step: 4,
        title: 'Swap',
        description:
          'Buy mTBILL on IguanaDEX with the borrowed USDC/USDT, if you’re ok with slightly higher risk with the potential for higher rewards, go for mBASIS instead!',
        image: ''
      },
      {
        step: 5,
        title: 'Supply',
        description:
          'Supply mBASIS/mTBILL on Superlend and then repeat step 3-5 until you reach the limit (borrow rate exceeds mBASIS/mTBILL yield or hit the limit given by LTV)',
        image: ''
      }
    ],
    projectInvolved: [
      {
        name: 'IguanaDEX',
        icon: '/img/defi/icons/Iguana.svg',
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
          'If you already have a wallet with funds, you can bridge USDC into Etherlink via the Etherlink Bridge, otherwise, you can create an account directly at uranium.io and deposit USDC using Transak',
        image: ''
      },
      {
        step: 2,
        title: 'Buy',
        description: 'Buy xU3O8 with USDC',
        image: ''
      }
    ],
    projectInvolved: [
      {
        name: 'xU3O8',
        icon: '/img/defi/icons/U308.svg',
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
        image: ''
      },
      {
        step: 2,
        title: 'Buy',
        description: 'Buy XTZ on Hanji or IguanaDEX',
        image: ''
      },
      {
        step: 3,
        title: 'Explore memecoins',
        description:
          'Go on OrganicGrowth’s website and look for some promising memecoin communities',
        image: ''
      },
      {
        step: 4,
        title: 'Buy',
        description: 'Buy memecoins on OrganicGrowth using XTZ',
        image: ''
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
        icon: '/img/defi/icons/Iguana.svg',
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
        image: ''
      },
      {
        step: 2,
        title: 'Supply',
        description:
          'Supply your combination of USDC/XTZ/WETH/WBTC in Hanji’s LP vault',
        image: ''
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
