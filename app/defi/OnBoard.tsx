import React from 'react'
import Container from '../components/container'
import { OnBoardCard, OnBoardCardProps } from '../components/OnBoardCard'

const ONBOARD_DATA: OnBoardCardProps[] = [
  {
    org: 'Gate.io',
    title: 'Centralized Exchange',
    description: 'Buy and transfer $XTZ to Etherlink',
    link: 'https://www.gate.io/',
    image: '/img/defi/Gate.webp'
  },
  {
    org: 'Tezos & Etherlink',
    title: 'Bridge',
    description: 'Bridge your assets to Etherlink',
    link: 'https://bridge.etherlink.com/',
    image: '/img/defi/etherlink-b.webp'
  },
  {
    org: 'Transak',
    title: 'Onramp',
    description: 'Buy $XTZ using fiat',
    link: 'https://global.transak.com/',
    image: '/img/defi/Transak.webp'
  }
]

export const OnBoard = () => {
  return (
    <div className='relative'>
      <Container className='py-10 md:py-24'>
        <img
          className='absolute bottom-[850px] md:bottom-[220px] -left-[250px] md:-left-[250px] max-w-[960px] max-h-[560px] md:opacity-80 z-[50] pointer-events-none'
          src='/img/defi/gradient.svg'
          alt='bg gradient'
          draggable={false}
        />
        <div className='pb-14 text-start md:text-center'>
          <p className='text-[28px] md:text-4xl font-bold leading-[48px] text-neonGreen-500 mb-1 md:mb-2'>
            Three easy <span className='text-white-50'>ways to onboard</span>
          </p>
          <p className='text-grey-200 text-lg md:text-xl -tracking-[0.4px]'>
            Transfer from a CEX, bridge assets, or use fiat
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-6'>
          {ONBOARD_DATA.map(item => (
            <OnBoardCard {...item} key={item.org} />
          ))}
        </div>
      </Container>
    </div>
  )
}
