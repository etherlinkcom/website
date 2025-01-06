import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import { InfoIcon } from './toastIcons/InfoIcon'
import { CheckIcon } from './toastIcons/CheckIcon'

const CustomToast = ({
  message,
  icon
}: {
  message: string
  icon?: React.ReactNode
}) => (
  <div className='flex items-center gap-3'>
    {icon || <InfoIcon />}
    <span className='text-white font-base font-bold'>{message}</span>
  </div>
)

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
      console.log('Network added successfully!')
      toast(
        <CustomToast
          message='Network added successfully!'
          icon={<CheckIcon />}
        />,
        {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
          className:
            'rounded-xl px-4 py-3 border border-[#38A169] bg-[#38A1693D]/25 w-full'
        }
      )
    } catch (error) {
      console.error('Failed to add network. Please try again.', error)
      toast(
        <CustomToast message='Failed to add network. Please try again.' />,
        {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
          className:
            'rounded-xl px-4 py-3 border border-[#E53E3E] bg-[#E53E3E3D]/25 w-full'
        }
      )
    }
  } else {
    console.error('Please install a web3 wallet to connect')
    toast(<CustomToast message='Please install a web3 wallet to connect' />, {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
      className:
        'rounded-xl px-4 py-3 border border-[#3182CE] bg-[#3182CE]/25 w-full'
    })
  }
}

export const ConnectButton = () => {
  return (
    <>
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
      <ToastContainer />
    </>
  )
}
