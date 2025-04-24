import React from 'react'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { GhostButton } from '../components/buttons/GhostButton'
import Container from '../components/container'
import { GraditentLine } from '../components/pages/RevampHome/Partners'

export const Hero = () => {
  return (
    <div>
      <Container className='pt-24 pb-10 md:py-48'>
        <div className='relative'>
          {/* text and buttons */}
          <p className='text-neonGreen-500 text-xs md:text-sm font-semibold md:font-bold mb-4 md:mb-2'>
            $11,000,000 bridged to Etherlink to date
          </p>
          <h1
            className='grey-50 text-4xl md:text-[56px] font-bold leading-[48px] md:leading-[68px] 
            -tracking-[0.72px] md:-tracking-[1.12px] md:max-w-[600px] mb-5 md:mb-2'
          >
            Make money with DeFi on Etherlink
          </h1>
          <p className='text-white-700 text-lg md:text-xl leading-[26px] md:max-w-[600px] mb-[80px] md:mb-[40px]'>
            Explore the best ways to grow your portfolio with simple DeFi
            strategies for every risk level.
          </p>
          <div className='flex flex-col md:flex-row gap-4'>
            <PrimaryButton text='View strategies' />
            <GhostButton text='Stats' />
          </div>
          <img
            className='absolute -bottom-[500px] -left-[150px] max-w-[960px] max-h-[960px] opacity-80 z-0 hidden md:block'
            src='/img/defi/gradient.svg'
            alt='bg gradient'
          />
        </div>
        <div>{/* icons */}</div>
      </Container>
      <GraditentLine className='left-[50%] -translate-x-[50%]' />
    </div>
  )
}
