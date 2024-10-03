export interface Item {
  name: string
  link: string
  subItems?: Item[]
}

export interface NavbarItem {
  dropdown: boolean
  title: string
  link?: string
  items?: Item[]
}

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    dropdown: true,
    title: 'Use',
    items: [
      {
        name: 'EVM bridge',
        link: 'https://etherlinkbridge.com'
      },
      {
        name: 'Tezos bridge',
        link: 'https://bridge.etherlink.com'
      },
      {
        name: 'Status',
        link: 'https://status.etherlink.com/'
      },
      {
        name: 'Explorer',
        link: 'https://explorer.etherlink.com/'
      }
    ]
  },
  {
    dropdown: false,
    title: 'Ecosystem',
    link: '/ecosystem'
  },
  {
    dropdown: true,
    title: 'Build',
    items: [
      {
        name: 'Docs',
        link: 'https://docs.etherlink.com/'
      },
      {
        name: 'Use your wallet',
        link: 'https://docs.etherlink.com/get-started/using-your-wallet/'
      },
      {
        name: 'Tezos Bridge',
        link: 'https://testnet.bridge.etherlink.com/',
        subItems: [
          {
            name: 'Tezos Testnet',
            link: 'https://testnet.bridge.etherlink.com/testnet'
          },
          {
            name: 'Tezos Mainnet',
            link: 'https://bridge.etherlink.com/mainnet'
          }
        ]
      },
      {
        name: 'Faucet',
        link: 'https://faucet.etherlink.com/'
      },
      {
        name: 'Explorer',
        link: 'https://testnet.explorer.etherlink.com/'
      }
    ]
  },
  {
    dropdown: false,
    title: 'Blog',
    link: 'https://medium.com/@etherlink'
  }
]
