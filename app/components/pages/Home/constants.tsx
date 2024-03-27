interface Feature {
  alt: string
  image: string
  text: JSX.Element
}

interface Phase {
  name: string
  done: boolean
}

export type Phases = Phase[][]

export const FEATURES: Feature[] = [
  {
    alt: 'Squencer',
    image: './img/home/squencer.svg',
    text: (
      <p>
        Building the <span className='text-newGreen'>world's first</span>
        <br />
        decentralized sequencer
      </p>
    )
  },
  {
    alt: 'Protection',
    image: './img/home/protection.svg',
    text: (
      <p>
        <span className='text-newGreen'>MEV protection</span>
        <br />
        out-of-the-box
      </p>
    )
  },
  {
    alt: 'Transaction',
    image: './img/home/transaction.svg',
    text: (
      <p>
        <span className='text-newGreen'>$0.01</span> per
        <br />
        transaction
      </p>
    )
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
      done: false
    }
  ],
  [
    {
      name: 'Etherlink Incubator launch',
      done: false
    },
    {
      name: 'Quests launch',
      done: false
    },
    {
      name: 'Mainnet Open Beta',
      done: false
    },
    {
      name: 'Hackathon',
      done: false
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
