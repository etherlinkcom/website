'use client'

import React from 'react'
import Container from '../../container'
import { Fade } from 'react-awesome-reveal'
import { BOTTOM_CTA } from './fixture'
import Link from 'next/link'
import { isExternalLink } from '../../Navbar'
import { SectionBgGradient } from '../Home/SectionBgGradient'

export const BottomCta = () => {
  return (
    <Container className='relative mb-[104px]'>
      <SectionBgGradient />
      <div className='mb-[100px]' id='developers'>
        <h2 className='text-white font-bold text-3xl md:text-[55px] text-center mb-6 -tracking-[0.6px] md:leading-[65px]'>
          <span className='text-neonGreen-500'>Ready to</span>{' '}
          <span className='inline md:hidden'>
            <br />
          </span>{' '}
          get started?
        </h2>
        <p className='text-center text-base md:text-[23px] text-grey-200'>
          Useful resources to get started building on Etherlink
        </p>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {BOTTOM_CTA.map((box, index) => (
          <Fade
            triggerOnce
            direction='up'
            delay={100 + index * 100}
            key={index}
          >
            <CtaBox {...box} />
          </Fade>
        ))}
      </div>
    </Container>
  )
}

interface CtaBoxProps {
  topLine: string
  title: string
  desc: string
  link: string
}

const CtaBox = ({ topLine, title, desc, link }: CtaBoxProps) => {
  return (
    <div className='w-full h-full'>
      <Link href={link} target={isExternalLink(link)}>
        <div
          className='border border-transparent relative flex flex-1 min-h-0 lg:min-h-[200px] flex-col p-6 bg-[#1B1B1B] shadow-[0px_0px_6px_0px_rgba(51,232,142,0.40)] 
              rounded-3xl h-full w-full group hover:border hover:border-neonGreen-500 hover:cursor-pointer'
        >
          <div className='flex items-center flex-wrap justify-between h-fit mb-2'>
            <p className='text-white font-light text-xs'>{topLine}</p>
            <img src='/img/icons/green-arrow-up-right.svg' alt='arrow' />
          </div>
          <p className='w-full text-neonGreen-500 text-[23px] font-semibold mb-4'>
            {title}
          </p>
          <p className='mt-4 text-grey-200'>{desc}</p>
        </div>
      </Link>
    </div>
  )
}
