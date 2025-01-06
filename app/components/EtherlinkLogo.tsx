import React from 'react'
import Link from 'next/link'

export const EtherlinkLogo = () => {
  return (
    <Link className='hover:cursor-pointer' href='/'>
      <div className='flex items-center gap-2'>
        <img
          width={20}
          height={20}
          className='w-6 h-6 md:w-8 md:h-8'
          src='/etherlink-wheel.svg'
          alt='etherlink icon'
        />
        <img
          className='w-20 h-6 md:w-28 md:h-5'
          src='/etherlink-logo-text.svg'
          alt='Etherlink Logo Text'
          width={60}
          height={21}
        />
      </div>
    </Link>
  )
}
