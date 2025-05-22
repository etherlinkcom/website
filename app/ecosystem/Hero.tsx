import React from 'react'
import Link from 'next/link'

export const Hero = () => {
  return (
    <div className='flex flex-col justify-center mx-auto px-8'>
      <nav className='flex text-sm text-grey-100 mb-6 space-x-4 md:hidden'>
        <Link href='/'>
          <span>Home</span>
        </Link>
        <span>&gt;</span>
        <span>Use</span>
        <span>&gt;</span>
        <span>Ecosystem</span>
      </nav>
      <h1 className='text-[32px] md:text-[35px] text-start md:text-center font-bold mb-2 text-neonGreen-50'>
        Discover, Build & Trade on Etherlink
      </h1>
      <p className='hidden md:block text-[23px] text-center text-white-700 -tracking-[0.46px]'>
        A growing ecosystem of innovative projects, from DeFi to gaming and
        beyond.
      </p>
    </div>
  )
}
