export type FlipContent = {
  title: string
  subTitle: string
  description: string | React.ReactNode
  icon: JSX.Element
}
export interface Feature {
  alt: string
  image: string
  text: JSX.Element
  description: string
  flipContent: FlipContent[]
}

interface Phase {
  name: string
  done: boolean
}

export type Phases = Phase[][]

export const FeatureTitle = ({
  title,
  subTitle,
  className
}: {
  title: string
  subTitle: string
  className?: string
}) => {
  return (
    <h1
      className={`text-start text-2xl sm:text-3xl border-l border-neon-green-500 pl-4 font-semibold leading-none ${className} -tracking-[0.56px]`}
    >
      <span className='text-neon-green-500'>{title}</span>
      <br />
      {subTitle}
    </h1>
  )
}

export const FEATURES: Feature[] = [
  {
    alt: 'Squencer',
    image: './img/home/finality.svg',
    text: <FeatureTitle title='Subsecond' subTitle='Block times' />,
    description: 'Soft confirmations in less than 500ms',
    flipContent: [
      {
        title: 'Rapid',
        subTitle: 'Development',
        description:
          'Fast confirmations enable a highly responsive development environment',
        icon: <img src='/img/home/shining.svg' alt='shining icon' />
      },
      {
        title: 'High-Speed',
        subTitle: 'Execution',
        description:
          'Efficient transaction processing ensures seamless and quick interactions',
        icon: <img src='/img/home/rocket-icon.svg' alt='rocket icon' />
      },
      {
        title: 'Reliable',
        subTitle: 'Finality',
        description: (
          <p className='text-gray-400 text-sm md:text-base p-2.5'>
            Tezos’ 2-block finality provides secure transactions in ~30 seconds
          </p>
        ),
        icon: <img src='/img/home/watch-icon.svg' alt='stopwatch icon' />
      }
    ]
  },
  {
    alt: 'Protection',
    image: './img/home/fees.svg',
    text: <FeatureTitle title='Fees' subTitle='$0.001' />,
    description: '(Nearly) free: transactions cost around one-tenth of a cent',
    flipContent: [
      {
        title: 'Affordable',
        subTitle: 'Deployment',
        description:
          'Reduced costs make budget-friendly dapp development and smart contract deployment possible',
        icon: <img src='/img/home/wallet.svg' alt='wallet icon' />
      },
      {
        title: 'Robust',
        subTitle: 'Security',
        description:
          'Peace of mind from Tezos enshrinement, securing Etherlink with advanced Layer 1 protection',
        icon: <img src='/img/home/pipe.svg' alt='pipe icon' />
      },
      {
        title: 'Amplified',
        subTitle: 'Users Retention',
        description:
          'Achieve long-term success: retain users by minimizing their costs',
        icon: <img src='/img/home/people.svg' alt='people icon' />
      }
    ]
  },
  {
    alt: 'Transaction',
    image: './img/home/governance.svg',
    text: <FeatureTitle title='Non-Custodial' subTitle='Rollup' />,
    description: 'No third parties are granted exclusive, irreversible rights',
    flipContent: [
      {
        title: 'Permissionless',
        subTitle: 'by Default',
        description:
          'Anyone can run a node, post commitments, challenge, and secure the network',
        icon: <img src='/img/home/heart.svg' alt='heart icon' />
      },
      {
        title: 'Decentralized',
        subTitle: 'Governance',
        description:
          'Stakeholders (Tezos bakers) can propose and vote on protocol changes',
        icon: <img src='/img/home/pairPeople.svg' alt='pairPeople icon' />
      },
      {
        title: 'Elected',
        subTitle: 'Sequencer',
        description:
          'Etherlink’s sequencer operator is elected by network stakeholders',
        icon: <img src='/img/home/stats.svg' alt='stats icon' />
      }
    ]
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

export type ExperienceProps = {
  title: string
  subTitle: string
  desc: string
}

export const EXPERIENCE = [
  {
    title: 'Comprehensive',
    subTitle: 'Toolkit',
    desc: 'Leverage familiar tools like Metamask, Hardhat, and Foundry. Access a wide range of integrations, including Subsquid, Fireblocks, Thirdweb, and The Graph.'
  },
  {
    title: 'Seamless',
    subTitle: 'Deployment',
    desc: 'Deploy your existing Solidity smart contracts on Etherlink. Focus on code enhancement without rewrites.'
  },
  {
    title: 'Vibrant',
    subTitle: 'Community',
    desc: 'Join a vibrant developer community, access invaluable resources, and receive the support you need to succeed in your development journey.'
  }
]
