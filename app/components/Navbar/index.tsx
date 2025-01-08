'use client'
import React, { useState } from 'react'
import { NAVBAR_ITEMS } from './fixture'
import { EtherlinkLogo } from '../EtherlinkLogo'
import Link from 'next/link'
import { X, Discord } from '../icons'
import Container from '../container'
import { DesktopNavbar } from './DesktopNavbar'
import { ConnectButton } from './ConnectButton'
import { MobileNavbar } from './MobileNavbar'

export const isExternalLink = (link: string) =>
  link.startsWith('http') ? '_blank' : '_self'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)

  return (
    <Container className='relative flex justify-between items-center pt-8 px-4 lg:px-7 lg:pt-[36px] z-50 md:max-w-[1536px] mx-auto'>
      <div className='flex items-center'>
        <h1 className='text-3xl text-white'>
          isOpen: {isOpen ? 'true' : 'false'}
        </h1>
        <div className='flex items-center gap-2 shrink-0'>
          <EtherlinkLogo />
          <img
            className='lg:hidden hover:cursor-pointer w-4 h-4'
            src='/hamburger.svg'
            onClick={() => setIsOpen(true)}
          />
        </div>
        <div className='hidden lg:inline-block bg-grey-200 w-[1px] h-8 mx-12' />
        <div className='hidden lg:flex items-center pr-4 h-[30px] gap-1'>
          <DesktopNavbar items={NAVBAR_ITEMS} />
        </div>
      </div>
      <div className='flex items-center'>
        {/* social links */}
        <div className='hidden lg:flex items-center gap-2'>
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
          >
            <Discord size={40} />
          </Link>
        </div>
        <div className='hidden lg:inline-block bg-grey-200 w-[1px] h-8 mx-8' />
        <ConnectButton />
      </div>

      <MobileNavbar isOpen={isOpen} handleClose={handleClose} />
    </Container>
  )
}
