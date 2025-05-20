export interface NavItem {
  name?: string
  link?: string
  dropdown?: boolean
  isNestedItem?: boolean
  isLastNestedItem?: boolean
  items?: NavItem[]
}

export const NAVBAR_ITEMS: NavItem[] = [
  {
    dropdown: true,
    name: 'Use',
    items: [
      {
        name: 'Bridge',
        dropdown: false,
        link: 'https://bridge.etherlink.com/'
      },
      {
        name: 'Status',
        link: 'https://status.etherlink.com/'
      },
      {
        name: 'Explorer',
        link: 'https://explorer.etherlink.com/'
      },
      {
        name: 'Governance',
        link: 'https://governance.etherlink.com/'
      },
      {
        name: 'DeFi',
        link: '/defi'
      }
    ]
  },
  {
    dropdown: true,
    name: 'Build',
    items: [
      {
        name: 'Docs',
        link: 'https://docs.etherlink.com/'
      },
      {
        name: 'Games',
        link: 'https://build.etherlink.com/landing'
      },
      {
        name: 'Use your wallet',
        link: 'https://docs.etherlink.com/get-started/using-your-wallet/'
      },
      {
        name: 'Testnet Resources',
        dropdown: true,
        items: [
          {
            name: 'Faucet',
            link: 'https://faucet.etherlink.com/',
            isNestedItem: true
          },
          {
            name: 'Explorer',
            link: 'https://testnet.explorer.etherlink.com/',
            isNestedItem: true
          },
          {
            name: 'Tezos Bridge',
            link: 'https://testnet.bridge.etherlink.com/tezos',
            isNestedItem: true,
            isLastNestedItem: true
          }
        ]
      }
    ]
  },
  {
    dropdown: false,
    name: 'Ecosystem',
    link: '/ecosystem'
  },
  {
    dropdown: false,
    name: 'Blog',
    link: 'https://medium.com/@etherlink'
  }
]
