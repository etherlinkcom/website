import Image from 'next/image'

const addNetwork = async () => {
  if (window.ethereum) {
    try {
      // Request to add Etherlink network
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0xa729', // 42793 in hexadecimal
            chainName: 'Etherlink Mainnet',
            nativeCurrency: {
              name: 'tez',
              symbol: 'XTZ',
              decimals: 18
            },
            rpcUrls: ['https://node.mainnet.etherlink.com'],
            blockExplorerUrls: ['https://explorer.etherlink.com/']
          }
        ]
      })
      console.log('Etherlink Mainnet added successfully!')
    } catch (error) {
      console.error('Failed to add Etherlink Mainnet:', error)
    }
  } else {
    console.error('Please install an EVM compatible wallet.')
  }
}

export const ConnectButton = () => {
  return (
    <button
      onClick={addNetwork}
      className='flex items-center gap-1 lg:gap-2 text-[#101010] rounded-3xl bg-[#38FF9C] py-2 px-3 lg:px-4 text-xs lg:text-sm font-semibold'
    >
      Add Etherlink Mainnet
      <Image
        width={16}
        height={16}
        src='/IoWalletOutline.svg'
        alt='wallet icon'
      />
    </button>
  )
}
