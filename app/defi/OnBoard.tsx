import React from 'react'
import Container from '../components/container'
import Link from 'next/link'

const ONBOARD_DATA = [
  {
    org: 'Gate.io',
    title: 'Centralized Exchange',
    description: 'Buy and transfer $XTZ to Etherlink',
    link: 'https://www.gate.io/',
    image: '/img/defi/stepCard.jpg'
  },
  {
    org: 'Tezos & Etherlink',
    title: 'Bridge',
    description: 'Bridge your assets to Etherlink',
    link: 'https://bridge.etherlink.com/',
    image: '/img/defi/stepCard.jpg'
  },
  {
    org: 'Transak',
    title: 'Onramp',
    description: 'Buy $XTZ using fiat',
    link: 'https://global.transak.com/',
    image: '/img/defi/stepCard.jpg'
  }
]

export const OnBoard = () => {
  return (
    <div className='relative'>
      <Container className='py-10 md:py-24'>
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
      <div className='border border-black-400 rounded-lg hover:border-neonGreen-500 group hover:cursor-pointer'>
        <div className='rounded-lg'>
          <img className='rounded-lg' src={image} alt='card' />
        </div>
        <div className='p-6 bg-grey-700 group-hover:bg-grey-500 rounded-lg'>
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
