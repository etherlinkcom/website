'use client'
import React, { useState } from 'react'
import { NAVBAR_ITEMS } from './fixture'
import { EtherlinkLogo } from '../EtherlinkLogo'
import Link from 'next/link'
import { X, Discord } from '../icons'
import { NavbarList } from './NavbarList'
import { MobileNavbar } from './MobileNavbar'
import Container from '../container'

export const isExternalLink = (link: string) =>
  link.startsWith('http') ? '_blank' : '_self'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)

  return (
    <Container className='relative flex justify-between items-center pt-8 lg:pt-[66px] z-[999] md:max-w-[1536px] mx-auto'>
      <div className='flex-shrink-0'>
        <EtherlinkLogo />
      </div>
      <div className='hidden lg:flex items-center'>
        <div className='flex items-center pr-4 border-r border-[#414349B2] h-[30px] gap-1'>
          {NAVBAR_ITEMS.map((item, index) => (
            <NavbarList {...item} key={index} />
          ))}
        </div>
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

      <img
        className='absolute right-5 lg:hidden hover:cursor-pointer w-6 h-6'
        src='/hamburger.svg'
        onClick={() => setIsOpen(true)}
      />

      <MobileNavbar isOpen={isOpen} handleClose={handleClose} />
    </Container>
  )
}
