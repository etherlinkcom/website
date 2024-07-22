import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const EtherlinkLogo = () => {
  return (
    <Link className='hover:cursor-pointer' href='/'>
      <div className='flex items-center gap-1'>
        <Image
          src='/etherlink-logo-beta.png'
          alt='Etherlink Beta Logo'
          width={160}
          height={160}
          className='w-[158px] h-[40px]'
        />
      </div>
    </Link>
  )
}
