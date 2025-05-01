'use client'

import React, { useState } from 'react'
import { NAVBAR_ITEMS } from './fixture'
import { EtherlinkLogo } from '../EtherlinkLogo'
import Link from 'next/link'
import { X, Discord } from '../icons'
import Container from '../container'
import { DesktopNavbar } from './DesktopNavbar'
import { MobileNavbar } from './MobileNavbar'
import { usePathname } from 'next/navigation'

export const isExternalLink = (link: string) =>
  link.includes('etherlink.com')
    ? '_self'
    : link.startsWith('http')
      ? '_blank'
      : '_self'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)
  const pathname = usePathname()
  const isDefiPage = pathname === '/defi'

  return (
    <Container
      className={`relative flex justify-between items-center pt-8 lg:pt-[36px] z-50 mx-auto ${isDefiPage ? 'bg-grey-900' : ''}`}
    >
      <div className='flex items-center'>
        <div className='flex items-center gap-2 shrink-0'>
          <EtherlinkLogo />
          <img
            className='md:hidden hover:cursor-pointer w-4 h-4'
            src='/hamburger.svg'
            onClick={() => setIsOpen(true)}
          />
        </div>
        <div className='hidden md:inline-block bg-grey-200 w-[1px] h-8 ml-6 mr-4' />
        <div className='hidden md:flex items-center pr-4 h-[30px] gap-1'>
          <DesktopNavbar items={NAVBAR_ITEMS} />
        </div>
      </div>
      <div className='flex items-center'>
        {/* social links */}
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
          >
            <Discord size={40} />
          </Link>
        </div>
      </div>

      <MobileNavbar isOpen={isOpen} handleClose={handleClose} />
    </Container>
  )
}
