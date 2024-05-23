'use client'
import React, { useState } from 'react'
import { NAVBAR_ITEMS } from './fixture'
import Image from 'next/image'
import Link from 'next/link'
import { X, Discord } from '../icons'
import { NavbarList } from './NavbarList'
import { MobileNavbar } from './MobileNavbar'

export const isExternalLink = (link: string) =>
  link.startsWith('http') ? '_blank' : '_self'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)

  return (
    <div className='relative flex justify-between items-center px-8 z-[999] md:max-w-[1536px] mx-auto'>
      <Link href='/'>
        <Image
          src='/img/home/beta_logo.svg'
          alt='Etherlink Beta Logo'
          width={200}
          height={200}
          className='mr-2 -ml-4'
        />
      </Link>
      <div className='hidden md:flex items-center gap-6'>
        <div className='flex items-center pr-4 border-r border-[#414349B2] h-[30px] gap-3'>
          {NAVBAR_ITEMS.map((item, index) => (
            <NavbarList {...item} key={index} />
          ))}
        </div>
        {/* social links */}
        <div className='flex items-center '>
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
        className='absolute right-5 md:hidden hover:cursor-pointer w-6 h-6'
        src='/hamburger.svg'
        onClick={() => setIsOpen(true)}
      />

      <MobileNavbar isOpen={isOpen} handleClose={handleClose} />
    </div>
  )
}
