import React from 'react'

export const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto px-8'>
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
