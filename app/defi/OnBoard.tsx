import React from 'react'
import Container from '../components/container'
import { OnBoardCard, OnBoardCardProps } from '../components/OnBoardCard'
import { GhostButton } from '../components/buttons/GhostButton'

const ONBOARD_DATA: OnBoardCardProps[] = [
  {
    org: 'Gate.io',
    title: 'Centralized Exchange',
    description: 'Buy and transfer $XTZ to Etherlink',
    link: 'https://www.gate.io/',
    image: '/img/defi/onboard/cex.webp',
    event: {
      name: 'onboard:cex:click'
    }
  },
  {
    org: 'Tezos & Etherlink',
    title: 'Bridge',
    description: 'Bridge your assets to Etherlink',
    link: 'https://bridge.etherlink.com/',
    image: '/img/defi/onboard/bridge.webp',
    event: {
      name: 'onboard:bridge:click'
    }
  },
  {
    org: 'Transak',
    title: 'Onramp',
    description: 'Buy $XTZ using fiat',
    link: 'https://global.transak.com/',
    image: '/img/defi/onboard/onramp.webp',
    event: {
      name: 'onboard:onramp:click'
    }
  }
]

export const OnBoard = () => {
  return (
    <div className='relative' id='onboard'>
      <Container className='pb-10 md:pb-24'>
        <img
          className='absolute bottom-[850px] md:bottom-[220px] -left-[250px] md:-left-[250px] max-w-[960px] max-h-[560px] md:opacity-80 z-[50] pointer-events-none'
          src='/img/defi/gradient.svg'
          alt='bg gradient'
          draggable={false}
        />
        <div className='pb-14 text-start md:text-center'>
          <p className='text-[28px] md:text-4xl font-bold leading-[48px] text-neonGreen-500 mb-1 md:mb-2'>
            Ways <span className='text-white-50'>to onboard</span>
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
        <div className="flex justify-center mt-10 md:mt-16">
          <GhostButton className='w-full md:w-auto' text='See more' href='/onramp' />
        </div>
      </Container>
    </div>
  )
}
