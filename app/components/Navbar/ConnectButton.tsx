'use client'

import { useState, useEffect } from 'react'
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

// if wallet has etherlink testnet, the toast will show Failed to add network. Please try again.

export const ConnectButton = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  const getWalletAddress = async () => {
    try {
      let accounts = await window.ethereum.request({ method: 'eth_accounts' })

      console.log('get wallet address accounts:', accounts)

      if (accounts.length === 0) {
        // 🔥 If `eth_accounts` fails, request explicit connection
        accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
      }

      if (accounts.length > 0) {
        setWalletAddress(accounts[0]) // ✅ Store wallet address
      }
    } catch (error) {
      console.error('Error fetching wallet address:', error)
    }
  }

  const addNetwork = async () => {
    if (window.ethereum) {
      try {
        const chainId = '0xa729'
        const networkList = await window.ethereum.request({
          method: 'eth_chainId'
        })

        if (networkList === chainId) {
          toast(
            <CustomToast message='Network already added to your wallet' />,
            {
              position: 'bottom-center',
              autoClose: 3000,
              hideProgressBar: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              closeButton: false,
              className:
                'rounded-xl px-4 py-3 border border-[#3182CE] bg-[#3182CE]/25 w-full'
            }
          )
          await getWalletAddress()
          return
        } else {
          // Request to add Etherlink network
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId, // 42793 in hexadecimal
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

          await getWalletAddress()

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
        }
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

  useEffect(() => {
    getWalletAddress()

    window.ethereum.on('accountsChanged', (accounts: string[]) => {
      setWalletAddress(accounts.length > 0 ? accounts[0] : null)
    })

    window.ethereum.on('chainChanged', () => {
      void getWalletAddress()
    })
  }, [])

  return (
    <>
      <button
        onClick={addNetwork}
        className='flex items-center gap-1 lg:gap-2 text-grey-900 rounded-3xl 
          bg-neonGreen-500 hover:bg-neonGreen-700 transition-colors duration-200
          py-2 px-3 lg:px-4 text-xs lg:text-sm font-semibold'
      >
        {walletAddress
          ? walletAddress.slice(0, 6) + '...' + walletAddress.slice(-4)
          : 'Add Etherlink Mainnet'}
        <Image
          width={16}
          height={16}
          src='/img/icons/IoWalletOutline.svg'
          alt='wallet icon'
        />
      </button>
      <ToastContainer />
    </>
  )
}
