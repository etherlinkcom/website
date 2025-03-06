import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const EtherlinkLogo = () => {
  return (
    <Link className='hover:cursor-pointer' href='/'>
      <img
        className='block lg:hidden'
        src='/logo-mobile.svg'
        alt='etherlink icon'
      />
      <img
        className='hidden lg:block'
        src='/logo-desktop.svg'
        alt='etherlink icon'
      />
    </Link>
  )
}
