export type Partner = {
  alt: string
  image: string
}

export const DT_1ST_ROW = [
  { alt: 'spiko', image: '/img/defi/icons/spiko.jpeg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'Superlend', image: '/img/defi/icons/Superlend.svg' },
  { alt: 'midas', image: '/img/defi/icons/midas.svg' },
  { alt: 'u308', image: '/img/defi/icons/u308.svg' },
  { alt: 'jumper', image: '/img/defi/icons/jumper.svg' }
]

export const DT_2ND_ROW = [
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' },
  { alt: 'u308', image: '/img/defi/icons/u308.svg' },
  { alt: 'spiko', image: '/img/defi/icons/spiko.jpeg' },
  { alt: 'midas', image: '/img/defi/icons/midas.svg' },
  { alt: 'Superlend', image: '/img/defi/icons/Superlend.svg' }
]

export const DT_3RD_ROW = [
  { alt: 'Hanji', image: '/img/defi/icons/Hanji.svg' },
  { alt: 'midas', image: '/img/defi/icons/midas.svg' },
  { alt: 'transak', image: '/img/defi/icons/Transak.svg' },
  { alt: 'u308', image: '/img/defi/icons/u308.svg' },
  { alt: 'jumper', image: '/img/defi/icons/jumper.svg' },
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' }
]

export const DT_4TH_ROW = [
  { alt: 'Hanji', image: '/img/defi/icons/Hanji.svg' },
  { alt: 'Superlend', image: '/img/defi/icons/Superlend.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' },
  { alt: 'midas', image: '/img/defi/icons/midas.svg' },
  { alt: 'transak', image: '/img/defi/icons/Transak.svg' }
]

export const MB_1ST_ROW = [
  { alt: 'u308', image: '/img/defi/icons/u308.svg' },
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'Superlend', image: '/img/defi/icons/Superlend.svg' },
  { alt: 'jumper', image: '/img/defi/icons/jumper.svg' },
  { alt: 'transak', image: '/img/defi/icons/Transak.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'Hanji', image: '/img/defi/icons/Hanji.svg' },
  { alt: 'spiko', image: '/img/defi/icons/spiko.jpeg' },
  { alt: 'midas', image: '/img/defi/icons/midas.svg' },
  { alt: 'jumper', image: '/img/defi/icons/jumper.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' }
]

export const MB_2ND_ROW = [
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' },
  { alt: 'midas', image: '/img/defi/icons/midas.svg' },
  { alt: 'Hanji', image: '/img/defi/icons/Hanji.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'spiko', image: '/img/defi/icons/spiko.jpeg' },
  { alt: 'jumper', image: '/img/defi/icons/jumper.svg' },
  { alt: 'organic growth', image: '/img/defi/icons/organic-growth.svg' },
  { alt: 'transak', image: '/img/defi/icons/Transak.svg' },
  { alt: 'Hanji', image: '/img/defi/icons/Hanji.svg' },
  { alt: 'iguana', image: '/img/defi/icons/iguana.svg' },
  { alt: 'u308', image: '/img/defi/icons/u308.svg' },
  { alt: 'Superlend', image: '/img/defi/icons/Superlend.svg' }
]

import { EventAction } from '../../utils/trackPostHog'

export const PROJECTS = [
  {
    title: 'T-Bill Savings',
    description: 'Stable savings on Etherlink.',
    image: '/img/defi/projects/t-bill.webp',
    video: '/img/defi/strategies/t-bill-savings/step1.mp4',
    tag: 'Supply',
    link: '/defi/t-bill-savings',
    event: {
      name: 'tbill_savings',
      props: {
        button_label: 'T-Bill Savings',
        action: EventAction.BUTTON_CLICK,
        section: 'start earning'
      }
    }
  },
  {
    title: 'Basis Trade',
    description: 'Higher risk stable savings, higher rewards.',
    image: '/img/defi/projects/basis-trade.webp',
    video: '/img/defi/strategies/basis-trade/step1.mp4',
    tag: 'Supply',
    link: '/defi/basis-trade',
    event: {
      name: 'basis_trade',
      props: {
        button_label: 'Basis Trade',
        action: EventAction.BUTTON_CLICK,
        section: 'start earning'
      }
    }
  },
  {
    title: 'BTC Fi',
    description: 'Leverage your BTC to earn.',
    image: '/img/defi/projects/btc-fi.webp',
    video: '/img/defi/strategies/btc-fi/step1.mp4',
    tag: 'Supply',
    link: '/defi/btc-fi',
    event: {
      name: 'btc_fi',
      props: {
        button_label: 'BTC Fi',
        action: EventAction.BUTTON_CLICK,
        section: 'start earning'
      }
    }
  },
  {
    title: 'Nuclear Speculation',
    description: 'Tokenized uranium unique to Etherlink',
    image: '/img/defi/projects/nuclear.webp',
    video: '/img/defi/strategies/nuclear-speculation/step1.mp4',
    tag: 'Buy',
    link: '/defi/nuclear-speculation',
    event: {
      name: 'uranium',
      props: {
        button_label: 'Nuclear Speculation',
        action: EventAction.BUTTON_CLICK,
        section: 'start earning'
      }
    }
  },
  {
    title: 'Community Speculation',
    description: 'These are highly risky and speculative assets.',
    image: '/img/defi/projects/community.webp',
    video: '/img/defi/strategies/community-speculation/step1.mp4',
    tag: 'Buy',
    link: '/defi/community-speculation',
    event: {
      name: 'community_speculation',
      props: {
        button_label: 'Community Speculation',
        action: EventAction.BUTTON_CLICK,
        section: 'start earning'
      }
    }
  },
  {
    title: 'Market Making',
    description: 'Buy $XTZ using fiat ',
    image: '/img/defi/projects/market-making.webp',
    video: '/img/defi/strategies/market-making/step1.mp4',
    tag: 'Supply',
    link: '/defi/market-making',
    event: {
      name: 'market_making',
      props: {
        button_label: 'Market Making',
        action: EventAction.BUTTON_CLICK,
        section: 'start earning'
      }
    }
  }
]

type FaqItem = { title: string; description: string }

export const FAQS: FaqItem[] = [
  {
    title: 'What is DeFi on Etherlink?',
    description:
      'It’s a set of strategies and apps built on Etherlink (a Tezos Layer 2) that give you different ways to put your crypto to work, whether that’s earning steady yield, trading, or interacting with dApps.'
  },
  {
    title: 'How does DeFi on Etherlink work?',
    description:
      'Just like any other chain, you bridge assets into Etherlink, connect your wallet, and choose a strategy or app to start earning.'
  },
  {
    title: 'Who provides DeFi on Etherlink?',
    description:
      'Independent teams build and run the protocols. Etherlink is the fast, low fee network they run on, it doesn’t manage the individual dApps.'
  },
  {
    title: 'What strategies can I use on Etherlink?',
    description: `
- T-Bill Savings – steady, treasury style yield
- Basis Trade – earn from market spreads
- BTC Fi – exposure to BTC yield
- Nuclear Speculation – earn with real world assets
- Community Speculation – community driven allocations
- Market Making – provide liquidity and earn fees
    `
  },
  {
    title: 'Is DeFi on Etherlink safe?',
    description:
      'Every DeFi strategy carries some risk, from smart contracts to market moves. Some are steadier, others more speculative. Always do your own research and only deposit what you’re comfortable with.'
  },
  {
    title: 'How do I get help if I’m stuck?',
    description:
      'Start with the individual strategy guides above, or head to Etherlink docs for more about Etherlink network. If you still have questions, join the community Discord to chat with other users and the tech team.'
  }
]

export type StrategyId =
  | 't-bill-savings'
  | 'basis-trade'
  | 'btc-fi'
  | 'nuclear-speculation'
  | 'community-speculation'
  | 'market-making'

interface Button {
  text: string
  link: string
}

export type Tutorial = {
  step: number
  title: string
  description: string
  image: string
  video?: string
  button: Button
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
  yieldProvider: {
    img: string
    alt: string
  }
}

export const STRATEGIES_DATA: Strategy[] = [
  {
    id: 't-bill-savings',
    name: 'T-Bill Savings',
    yieldProvider: {
      img: '/img/defi/icons/Superlend.svg',
      alt: 'Superlend'
    },
    tutorials: [
      {
        step: 1,
        title: 'Bridge',
        description: 'Bridge in USDC using Etherlink Bridge',
        image: '/img/defi/strategies/t-bill-savings/1.png',
        video: '/img/defi/strategies/t-bill-savings/step1.mp4',
        button: {
          text: 'Bridge now',
          link: 'https://bridge.etherlink.com/evm'
        }
      },
      {
        step: 2,
        title: 'Swap',
        description: 'Swap USDC for mTBILL on IguanaDEX',
        image: '/img/defi/strategies/t-bill-savings/2.png',
        video: '/img/defi/strategies/t-bill-savings/step2.mp4',
        button: {
          text: 'Swap now',
          link: 'https://www.iguanadex.com/?chain=etherlink'
        }
      },
      {
        step: 3,
        title: 'Supply',
        description: 'Supply mTBILL on Superlend',
        image: '/img/defi/strategies/t-bill-savings/3.png',
        video: '/img/defi/strategies/t-bill-savings/step3.mp4',
        button: {
          text: 'Supply now',
          link: 'https://markets.superlend.xyz'
        }
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
    ]
  },
  {
    id: 'basis-trade',
    name: 'Basis Trade',
    yieldProvider: {
      img: '/img/defi/icons/Superlend.svg',
      alt: 'Superlend'
    },
    tutorials: [
      {
        step: 1,
        title: 'Bridge',
        description: 'Bridge in USDC using Etherlink Bridge',
        image: '/img/defi/strategies/basis-trade/1.png',
        video: '/img/defi/strategies/basis-trade/step1.mp4',
        button: {
          text: 'Bridge now',
          link: 'https://bridge.etherlink.com/evm'
        }
      },
      {
        step: 2,
        title: 'Swap',
        description: 'Swap USDC for mBASIS on IguanaDEX',
        image: '/img/defi/strategies/basis-trade/2.png',
        video: '/img/defi/strategies/basis-trade/step2.mp4',
        button: {
          text: 'Swap now',
          link: 'https://www.iguanadex.com/?chain=etherlink'
        }
      },
      {
        step: 3,
        title: 'Supply',
        description: 'Supply mBASIS on Superlend',
        image: '/img/defi/strategies/basis-trade/3.png',
        video: '/img/defi/strategies/basis-trade/step3.mp4',
        button: {
          text: 'Supply now',
          link: 'https://markets.superlend.xyz'
        }
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
    ]
  },
  {
    id: 'btc-fi',
    name: 'BTC Fi',
    yieldProvider: {
      img: '/img/defi/icons/Superlend.svg',
      alt: 'Superlend'
    },
    tutorials: [
      {
        step: 1,
        title: 'Bridge',
        description:
          'Bridge WBTC on the Etherlink Bridge, or if you already have funds on Etherlink, you can buy WBTC on Hanji or IguanaDEX',
        image: '/img/defi/strategies/btc-fi/1.png',
        video: '/img/defi/strategies/btc-fi/step1.mp4',
        button: {
          text: 'Bridge now',
          link: 'https://bridge.etherlink.com/evm'
        }
      },
      {
        step: 2,
        title: 'Supply',
        description: 'Supply WBTC on Superlend',
        image: '/img/defi/strategies/btc-fi/2.png',
        video: '/img/defi/strategies/btc-fi/step2.mp4',
        button: {
          text: 'Supply now',
          link: 'https://markets.superlend.xyz'
        }
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
    ]
  },
  {
    id: 'nuclear-speculation',
    name: 'Nuclear Speculation',
    yieldProvider: {
      img: '/img/defi/icons/Superlend.svg',
      alt: 'Superlend'
    },
    tutorials: [
      // {
      //   step: 1,
      //   title: 'Sign Up',
      //   description:
      //     'Create an account at [uranium.io](https://uranium.io/en).',
      //   image: '/img/defi/strategies/nuclear-speculation/1.png',
      //   video: '/img/defi/strategies/nuclear-speculation/step1.mp4',
      //   button: {
      //     text: 'Deposit now',
      //     link: 'https://bridge.etherlink.com/evm'
      //   }
      // },
      {
        step: 1,
        title: 'Deposit USDC',
        description:
          'Bridge USDC into Etherlink or create an account at [uranium.io](https://uranium.io/en) and deposit via Transak.',
        image: '/img/defi/strategies/nuclear-speculation/2.png',
        video: '/img/defi/strategies/nuclear-speculation/step2.mp4',
        button: {
          text: 'Deposit now',
          link: 'https://bridge.etherlink.com/evm'
        }
      },
      {
        step: 2,
        title: 'Buy',
        description: 'Buy xU3O8 with USDC',
        image: '/img/defi/strategies/nuclear-speculation/3.png',
        video: '/img/defi/strategies/nuclear-speculation/step3.mp4',
        button: {
          text: 'Buy now',
          link: 'https://uranium.io'
        }
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
    ]
  },
  {
    id: 'community-speculation',
    name: 'Community Speculation',
    yieldProvider: {
      img: '/img/defi/icons/Superlend.svg',
      alt: 'Superlend'
    },
    tutorials: [
      {
        step: 1,
        title: 'Bridge',
        description: 'Bridge tokens into Etherlink using Etherlink Bridge',
        image: '/img/defi/strategies/community-speculation/1.png',
        video: '/img/defi/strategies/community-speculation/step1.mp4',
        button: {
          text: 'Bridge now',
          link: 'https://bridge.etherlink.com/evm'
        }
      },
      {
        step: 2,
        title: 'Swap',
        description: 'Swap for XTZ on Hanji or IguanaDEX',
        image: '/img/defi/strategies/community-speculation/2.png',
        video: '/img/defi/strategies/community-speculation/step2.mp4',
        button: {
          text: 'Swap now',
          link: 'iguanadex.com/?chain=etherlink'
        }
      },
      {
        step: 3,
        title: 'Explore memecoins',
        description:
          'Go on OrganicGrowth’s website and look for some promising memecoin communities',
        image: '/img/defi/strategies/community-speculation/3.png',
        video: '/img/defi/strategies/community-speculation/step3.mp4',
        button: {
          text: 'Explore now',
          link: 'https://www.organicgrowth.wtf/'
        }
      },
      {
        step: 4,
        title: 'Buy',
        description: 'Buy memecoins on OrganicGrowth using XTZ',
        image: '/img/defi/strategies/community-speculation/step4.webp',
        button: {
          text: 'Buy now',
          link: 'https://www.organicgrowth.wtf/'
        }
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
    ]
  },
  {
    id: 'market-making',
    name: 'Market Making',
    yieldProvider: {
      img: '/img/defi/icons/Superlend.svg',
      alt: 'Superlend'
    },
    tutorials: [
      {
        step: 1,
        title: 'Bridge',
        description:
          'Bridge USDC, WETH, or WBTC into Etherlink using Etherlink Bridge',
        image: '/img/defi/strategies/market-making/1.png',
        video: '/img/defi/strategies/market-making/step1.mp4',
        button: {
          text: 'Bridge now',
          link: 'https://bridge.etherlink.com/evm'
        }
      },
      {
        step: 2,
        title: 'Supply',
        description:
          'Supply your combination of USDC/XTZ/WETH/WBTC in Hanji’s LP vault',
        image: '/img/defi/strategies/market-making/2.png',
        video: '/img/defi/strategies/market-making/step2.mp4',
        button: {
          text: 'Swap now',
          link: 'https://app.hanji.io/trade/0x65ea4dd7f789c71c0f57ed84b3bdc3062898d3cb'
        }
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
    ]
  }
]
