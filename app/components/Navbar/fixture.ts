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
        name: 'Bridge',
        link: '',
        subItems: [
          {
            name: 'EVM Bridge',
            link: 'http://etherlinkbridge.com/'
          },
          {
            name: 'Tezos Bridge',
            link: 'http://bridge.etherlink.com/'
          }
        ]
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
        name: 'Testnet Resources',
        link: '',
        subItems: [
          {
            name: 'Faucet',
            link: 'http://faucet.etherlink.com/'
          },
          {
            name: 'Explorer',
            link: 'http://testnet.explorer.etherlink.com/'
          },
          {
            name: 'Tezos Bridge',
            link: 'http://testnet.bridge.etherlink.com/'
          }
        ]
      }
    ]
  },
  {
    dropdown: false,
    title: 'Blog',
    link: 'https://medium.com/@etherlink'
  }
]
