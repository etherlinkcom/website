import React from 'react'
import Container from '../components/container'
import Link from 'next/link'

const ONBOARD_DATA = [
  {
    org: 'Gate.io',
    title: 'Centralized Exchange',
    description: 'Buy and transfer $XTZ to Etherlink',
    link: 'https://www.gate.io/',
    image: '/img/defi/onboard/cex.webp'
  },
  {
    org: 'Tezos & Etherlink',
    title: 'Bridge',
    description: 'Bridge your assets to Etherlink',
    link: 'https://bridge.etherlink.com/',
    image: '/img/defi/onboard/bridge.webp'
  },
  {
    org: 'Transak',
    title: 'Onramp',
    description: 'Buy $XTZ using fiat',
    link: 'https://global.transak.com/',
    image: '/img/defi/onboard/onramp.webp'
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

interface OnBoardCardProps {
  org: string
  title: string
  description: string
  link: string
  image: string
}

const OnBoardCard = ({
  org,
  title,
  description,
  link,
  image
}: OnBoardCardProps) => {
  return (
    <Link href={link} target={link.includes('bridge') ? '_self' : '_blank'}>
      <div className='border border-black-400 h-full rounded-lg hover:border-neonGreen-900 group hover:cursor-pointer flex flex-col'>
        <div className='rounded-t-lg'>
          <img className='rounded-t-lg' src={image} alt='card' />
        </div>
        <div className='flex flex-col flex-grow p-6 bg-grey-700 group-hover:bg-grey-500 rounded-b-lg'>
          <div className='flex justify-between mb-1'>
            <p className='text-grey-50 text-xs font-light uppercase'>{org}</p>
            <img src='/img/defi/greenArrow.svg' alt='arrow' />
          </div>
          <p className='text-2xl text-neonGreen-500 font-semibold mb-2'>
            {title}
          </p>
          <p className='text-grey-200'>{description}</p>
        </div>
      </div>
    </Link>
  )
}
