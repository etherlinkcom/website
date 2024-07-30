export interface Item {
  name: string
  link: string
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
    title: 'Bridge',
    items: [
      {
        name: 'EVM Bridge',
        link: 'https://etherlinkbridge.com'
      },
      {
        name: 'Tezos Bridge',
        link: 'https://bridge.etherlink.com'
      }
    ]
  },
  {
    dropdown: false,
    title: 'Ecosystem',
    link: '/ecosystem'
  },
  {
    dropdown: false,
    title: 'Docs',
    link: 'https://docs.etherlink.com/'
  },
  {
    dropdown: true,
    title: 'Resources',
    items: [
      {
        name: 'Faucet',
        link: 'https://faucet.etherlink.com/'
      },
      {
        name: 'Testnet explorer',
        link: 'https://testnet-explorer.etherlink.com/'
      },
      {
        name: 'Mainnet beta explorer',
        link: 'https://explorer.etherlink.com/'
      },
      {
        name: 'Blog',
        link: 'https://medium.com/@etherlink'
      },
      {
        name: 'Using your wallet',
        link: 'https://docs.etherlink.com/get-started/using-your-wallet/'
      }
    ]
  }
]
