import React from 'react'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { GhostButton } from '../components/buttons/GhostButton'
import Container from '../components/container'
import { GraditentLine } from '../components/pages/RevampHome/Partners'
import { PartnerCarousel } from './PartnerCarousel'
import {
  MB_1ST_ROW,
  MB_2ND_ROW,
  DT_1ST_ROW,
  DT_2ND_ROW,
  DT_3RD_ROW,
  DT_4TH_ROW
} from './fixture'

export const Hero = () => {
  return (
    <div className='relative'>
      <Container className='pt-24 pb-10 md:py-48'>
        <div className='flex justify-between'>
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
              <PrimaryButton text='View strategies' href='#strategies' />
              <GhostButton
                text='Stats'
                href='https://defillama.com/chain/etherlink'
              />
            </div>
            <img
              className='absolute -bottom-[200px] md:-bottom-[500px] -left-[200px] md:-left-[150px] max-w-[960px] max-h-[960px] md:opacity-70 z-[50] pointer-events-none'
              src='/img/defi/gradient.svg'
              alt='bg gradient'
              draggable={false}
            />
          </div>
          <div className='hidden md:flex flex-col gap-3 mt-10'>
            <PartnerCarousel
              partners={DT_1ST_ROW}
              speed={-0.6}
              className='translate-x-[40px]'
            />
            <PartnerCarousel partners={DT_3RD_ROW} speed={-0.6} />
            <PartnerCarousel
              partners={DT_2ND_ROW}
              speed={0.6}
              className='translate-x-[40px]'
            />
            <PartnerCarousel partners={DT_4TH_ROW} speed={0.6} />
          </div>
        </div>
        <div className='flex md:hidden flex-col gap-3 mt-16 mb-6 justify-center items-center'>
          <PartnerCarousel partners={MB_1ST_ROW} speed={0.6} />
          <PartnerCarousel partners={MB_2ND_ROW} speed={-0.6} />
        </div>
      </Container>
      <GraditentLine className='left-[50%] -translate-x-[56%]' />
    </div>
  )
}
