import React from 'react'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { GhostButton } from '../components/buttons/GhostButton'
import Container from '../components/container'
import { GraditentLine } from '../components/pages/RevampHome/Partners'
import { DesktopPartner } from './DesktopPartner'
import { PARTNERS } from './fixture'

export const Hero = () => {
  const randomPartners = PARTNERS.sort(() => Math.random() - 0.5).slice(0, 6)
  const randomPartners2 = PARTNERS.sort(() => Math.random() - 0.5).slice(0, 6)
  const randomPartners3 = PARTNERS.sort(() => Math.random() - 0.5).slice(6, 12)
  const randomPartners4 = PARTNERS.sort(() => Math.random() - 0.5).slice(6, 12)

  const randomPartnersMobile = PARTNERS.sort(() => Math.random() - 0.5).slice(0)

  return (
    <div>
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
              <PrimaryButton text='View strategies' />
              <GhostButton text='Stats' />
            </div>
            <img
              className='absolute -bottom-[200px] md:-bottom-[500px] -left-[200px] md:-left-[150px] max-w-[960px] max-h-[960px] md:opacity-70 z-[50] pointer-events-none'
              src='/img/defi/gradient.svg'
              alt='bg gradient'
              draggable={false}
            />
          </div>
          <div className='hidden lg:flex flex-col gap-3 mt-10'>
            <DesktopPartner
              partners={randomPartners}
              speed={0.6}
              className='translate-x-[40px]'
            />
            <DesktopPartner partners={randomPartners3} speed={-0.6} />
            <DesktopPartner
              partners={randomPartners2}
              speed={0.6}
              className='translate-x-[40px]'
            />
            <DesktopPartner partners={randomPartners4} speed={-0.6} />
          </div>
        </div>
        <div className='flex lg:hidden flex-col gap-3 mt-16 mb-6 justify-center items-center'>
          <DesktopPartner partners={randomPartnersMobile} speed={0.6} />
          <DesktopPartner partners={randomPartnersMobile} speed={-0.6} />
        </div>
      </Container>
      <GraditentLine className='left-[50%] -translate-x-[50%]' />
    </div>
  )
}
