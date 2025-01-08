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
        dropdown: true,
        items: [
          {
            name: 'EVM Bridge ',
            link: 'https://www.etherlinkbridge.com/bridge',
            isNestedItem: true
          },
          {
            name: 'Tezos Bridge',
            link: 'https://bridge.etherlink.com/',
            isNestedItem: true,
            isLastNestedItem: true
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
    name: 'Ecosystem',
    link: '/ecosystem'
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
            link: 'https://testnet.bridge.etherlink.com/',
            isNestedItem: true,
            isLastNestedItem: true
          }
        ]
      }
    ]
  },
  {
    dropdown: false,
    name: 'Blog',
    link: 'https://medium.com/@etherlink'
  }
]
