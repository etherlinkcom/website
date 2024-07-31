import React from 'react'
import Container from '../../container'
import { EcosystemCarousel } from './EcosystemCarousel'
import { EcosystemCarouselMobile } from './EcosystemCarouselMobile'
import { SectionBgGradient } from './SectionBgGradient'

const CATEGORIES = ['Defi', 'Web 3 Gaming', 'SocialFi', 'NFTs', 'DAOs']

export const ExploreEcosystem = () => {
  return (
    <Container className='relative mb-[104px]'>
      <SectionBgGradient />
      <div className='mb-[32px] z-50'>
        <h2 className='text-newGreen font-bold text-3xl md:text-6xl text-center mb-4 -tracking-[0.6px]'>
          <span className='text-white'>Explore the</span> ecosystem
        </h2>
        <p className='text-center mt-2 font-light md:text-2xl text-[#9B9B9B]'>
          Discover what industry-leading teams are building on Etherlink
        </p>
      </div>
      {/* <div className='flex items-center justify-center gap-3 flex-wrap mb-[80px]'>
        {CATEGORIES.map((data, index) => (
          <PillBox text={data} key={index} />
        ))}
      </div> */}
      <div className='hidden md:block'>
        <EcosystemCarousel />
      </div>
      <div className='block md:hidden'>
        <EcosystemCarouselMobile />
      </div>
    </Container>
  )
}

const PillBox = ({ text }: { text: string }) => {
  return (
    <div className='rounded-3xl px-4 py-2 bg-[#1B1B1B] shadow-[0px_0px_6px_0px_rgba(51,232,142,0.40)] z-50'>
      <p className='text-white text-center'>{text}</p>
    </div>
  )
}
