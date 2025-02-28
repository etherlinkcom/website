'use client'

import React from 'react'
import Container from '../../container'
import { SectionBgGradient } from '../Home/SectionBgGradient'
import Image from 'next/image'
import Link from 'next/link'
import { isExternalLink } from '../../Navbar'

const STARTED_BOXES = [
  {
    topLine: 'GET STARTED',
    title: 'Bridge',
    desc: 'Bridge your assets to Etherlink',
    link: 'https://bridge.etherlink.com/'
  },
  {
    topLine: 'EXPLORE',
    title: 'Explore ecosystem',
    desc: 'Discover the projects, apps and games building on Etherlink',
    link: '/ecosystem'
  },
  {
    topLine: 'DEVELOPER TOOLS',
    title: 'Start building',
    desc: 'Find all the information you need to get started as a builder on Etherlink.',
    link: '/'
  }
]

export const GetStarted = () => {
  return (
    <Container className='relative mb-[104px]'>
      <SectionBgGradient />
      <div className='mb-[100px]'>
        <h2 className='text-white font-bold text-3xl md:text-[55px] text-center mb-6 -tracking-[0.6px]'>
          <span className='text-neonGreen-500'>Get started</span> on Etherlink
        </h2>
        <p className='text-center text-base md:text-[23px] text-grey-200'>
          Explore apps, bridge assets, and start building on Etherlink today.
        </p>
      </div>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 items-stretch justify-center w-full h-full'>
        {STARTED_BOXES.map((box, index) => (
          <StartedBox key={index} {...box} />
        ))}
      </div>
    </Container>
  )
}

interface StartedBoxProps {
  topLine: string
  title: string
  desc: string
  link: string
}

const StartedBox = ({ topLine, title, desc, link }: StartedBoxProps) => {
  return (
    <div
      className='relative flex flex-1 min-h-0 lg:min-h-[200px] flex-col p-6 bg-[#1B1B1B] shadow-[0px_0px_6px_0px_rgba(51,232,142,0.40)] 
        rounded-3xl h-full w-full group border border-transparent hover:border hover:border-neonGreen-500 hover:cursor-pointer'
    >
      <div className='flex items-center flex-wrap justify-between mb-4 h-full'>
        <p className='text-grey-50 font-light text-xs'>{topLine}</p>
        <Link href={link} target={isExternalLink(link)}>
          <img src='/img/icons/green-arrow-up-right.svg' alt='arrow' />
        </Link>
      </div>
      <p className='w-full text-neonGreen-500 text-[23px] font-semibold'>
        {title}
      </p>
      <p className='py-3 text-grey-200'>{desc}</p>
    </div>
  )
}
