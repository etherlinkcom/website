export interface Feature {
  alt: string
  image: string
  text: JSX.Element
  description: string
}

interface Phase {
  name: string
  done: boolean
}

export type Phases = Phase[][]

const FeatureTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className='text-start text-2xl sm:text-3xl border-l border-newGreen pl-4 font-bold leading-none'>
      {children}
    </h1>
  )
}

export const FEATURES: Feature[] = [
  {
    alt: 'Squencer',
    image: './img/home/squencer.svg',
    text: (
      <FeatureTitle>
        <span className='text-newGreen'>Decentralized</span>
        <br />
        governance
      </FeatureTitle>
    ),
    description:
      'Stakers can play an active role in decision-making by proposing and voting on the sequencer and Etherlink upgrades, fostering transparency and fairness.'
  },
  {
    alt: 'Protection',
    image: './img/home/protection.svg',
    text: (
      <FeatureTitle>
        <span className='text-newGreen'>MEV protection</span>
        <br />
        by design
      </FeatureTitle>
    ),
    description:
      'Threshold encryption designed specifically for the sequencer distributes decryption key shares among multiple key holders, safeguarding users by preventing the sequencer from tampering with transaction ordering.'
  },
  {
    alt: 'Transaction',
    image: './img/home/transaction.svg',
    text: (
      <FeatureTitle>
        <span className='text-newGreen'>$0.001</span> per
        <br />
        transaction
      </FeatureTitle>
    ),
    description:
      'At only a fraction of a cent, Etherlink fees are as low as it gets, enabling cost-effective transactions and opening the doors to innovation.'
  }
]

export const PARTNERS = [
  {
    alt: 'RedStone',
    image: '/img/home/redstone.png'
  },
  {
    alt: 'zeeve',
    image: '/img/home/zeeve.png'
  },
  {
    alt: 'layer3',
    image: '/img/home/layer3.png'
  },
  {
    alt: 'LayerZero',
    image: '/img/home/layerzero.png'
  },
  {
    alt: 'Subsquid',
    image: '/img/home/subsquid.png'
  },
  {
    alt: 'thirdweb',
    image: '/img/home/thirdweb.png'
  },
  {
    alt: 'blockscout',
    image: '/img/home/blockscout.png'
  }
]

export const PHASES = [
  [
    {
      name: 'Testnet latency improvements',
      done: true
    },
    {
      name: 'Etherlink infrastructure ecosystem',
      done: true
    },
    {
      name: 'Community channels rollout',
      done: true
    },
    {
      name: 'Blog launch',
      done: true
    },
    {
      name: 'First partners onboarded',
      done: true
    }
  ],
  [
    {
      name: 'DeFi Catalyst Accelerator',
      done: true
    },
    {
      name: 'Mainnet Beta',
      done: true
    },
    {
      name: 'Quests launch',
      done: true
    },
    {
      name: 'Hackathon',
      done: true
    },
    {
      name: 'Audits finalized for the kernel',
      done: false
    },
    {
      name: 'Partners expansion',
      done: false
    }
  ],
  [
    {
      name: 'TezDev',
      done: false
    },
    {
      name: 'EthCC',
      done: false
    },
    {
      name: 'MEV protection',
      done: false
    },
    {
      name: 'DAL integration',
      done: false
    },
    {
      name: 'More coming soon',
      done: false
    }
  ]
]
