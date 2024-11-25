import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const EtherlinkLogo = () => {
  return (
    <Link className='hover:cursor-pointer' href='/'>
      <div className='flex items-center gap-2'>
        <Image
          width={40}
          height={40}
          src='/etherlink-wheel.svg'
          alt='etherlink icon'
        />
        <Image
          src='/etherlink-logo-text.svg'
          alt='Etherlink Logo Text'
          width={113}
          height={21}
        />
      </div>
    </Link>
  )
}
