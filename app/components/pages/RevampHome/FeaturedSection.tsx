'use client'

import React from 'react'
import Container from '../../container'
import { SectionBgGradient } from '../Home/SectionBgGradient'
import Link from 'next/link'
import { isExternalLink } from '../../Navbar'
import { MobileStartedCarousel } from './MobileStartedCarousel'
import { DesktopStartedCarousel } from './DesktopStartedCarousel'
import { Fade } from 'react-awesome-reveal'
import { FeaturedProject } from '../../../../utils/airtable/homeFeatured'
import { isAfter, isBefore, parseISO } from 'date-fns'

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
    link: '#developers'
  }
]

export const FeaturedSection = ({
  featuredProjects
}: {
  featuredProjects: FeaturedProject[]
}) => {
  const today = new Date()

  const activeProjects = featuredProjects.filter(project => {
    const { Start_Date, End_Date } = project

    if (!Start_Date) return false // Ignore projects without a start date

    const startDate = parseISO(Start_Date)
    const endDate = End_Date ? parseISO(End_Date) : null

    const hasStarted = isBefore(startDate, today) || isAfter(startDate, today) // Ensure project has started
    const isStillActive = !endDate || isAfter(endDate, today) // Stay active if no End_Date

    return hasStarted && isStillActive
  })

  return (
    <Container className='relative'>
      <SectionBgGradient />
      <div className='mb-[100px]'>
        <h2 className='text-white font-bold text-3xl md:text-[55px] text-center mb-6 -tracking-[0.6px]'>
          <span className='text-neonGreen-500'>Get started</span> on Etherlink
        </h2>
        <p className='text-center text-base md:text-[23px] text-grey-200'>
          Explore apps, bridge assets, and start building on Etherlink today.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full h-full'>
        {STARTED_BOXES.map((box, index) => (
          <Fade
            triggerOnce
            direction='up'
            delay={100 + index * 100}
            key={index}
          >
            <StartedBox {...box} />
          </Fade>
        ))}
      </div>
      <MobileStartedCarousel featuredProjects={activeProjects} />
      <DesktopStartedCarousel featuredProjects={activeProjects} />
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
    <div className='w-full'>
      <Link href={link} target={isExternalLink(link)}>
        <div
          className='relative flex flex-1 min-h-0 lg:min-h-[200px] flex-col p-6 bg-[#1B1B1B] shadow-[0px_0px_6px_0px_rgba(51,232,142,0.40)] 
            rounded-3xl h-full w-full group border border-transparent hover:border hover:border-neonGreen-500 hover:cursor-pointer'
        >
          <div className='flex items-center flex-wrap justify-between mb-4 h-full'>
            <p className='text-grey-50 font-light text-xs'>{topLine}</p>
            <img src='/img/icons/green-arrow-up-right.svg' alt='arrow' />
          </div>
          <p className='w-full text-neonGreen-500 text-[23px] font-semibold'>
            {title}
          </p>
          <p className='py-3 text-grey-200'>{desc}</p>
        </div>
      </Link>
    </div>
  )
}
