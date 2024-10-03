'use client'
import React, { useState } from 'react'
import { NAVBAR_ITEMS } from './fixture'
import { EtherlinkLogo } from '../EtherlinkLogo'
import Link from 'next/link'
import { X, Discord } from '../icons'
import { NavbarList } from './NavbarList'
import { MobileNavbar } from './MobileNavbar'
import Container from '../container'
import { PrimaryButton } from '../buttons/PrimaryButton'

export const isExternalLink = (link: string) =>
  link.startsWith('http') ? '_blank' : '_self'

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
      console.log('Etherlink network added successfully!')
    } catch (error) {
      console.error('Failed to add Etherlink network:', error)
    }
  } else {
    console.error(
      'MetaMask is not installed. Please install MetaMask and try again.'
    )
  }
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <Container className='relative flex gap-2 lg:gap-8 items-center pt-8 lg:pt-[66px] z-[999] md:max-w-[1536px] mx-auto'>
        <div className='flex-shrink-0'>
          <EtherlinkLogo />
        </div>
        <div className='hidden lg:flex items-center flex-1'>
          <div className='flex items-center pl-4 border-l border-[#414349B2] h-[30px] gap-1'>
            {NAVBAR_ITEMS.map((item, index) => (
              <NavbarList {...item} key={index} />
            ))}
          </div>
          <div className='flex-grow'></div>
          <div className='flex items-center gap-2'>
            <Link
              href='https://twitter.com/etherlink'
              target='_blank'
              rel='noopener noreferrer'
            >
              <X size={40} />
            </Link>
            <Link
              href='https://discord.gg/etherlink'
              target='_blank'
              rel='noopener noreferrer'
              className='pr-8'
            >
              <Discord size={40} />
            </Link>
          </div>
        </div>

        <img
          className='lg:hidden hover:cursor-pointer w-4 h-4'
          src='/hamburger.svg'
          onClick={() => setIsOpen(true)}
        />
        <div className='lg:hidden flex-grow'></div>

        {/* <div className=''>
          <PrimaryButton
            text='Add to network'
            className='py-[8px] px-[16px]'
            textClassName='text-sm'
            icon={<img src='/img/home/wallet-outline.svg' alt='wallet icon' />}
            onClick={addNetwork}
          />
        </div> */}
      </Container>
      <MobileNavbar isOpen={isOpen} handleClose={handleClose} />
    </>
  )
}
