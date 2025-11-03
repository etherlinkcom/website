'use client'

import React from 'react'
import Container from '../../container'
import { Fade } from 'react-awesome-reveal'
import { EVM_BOXES } from './fixture'
import { isExternalLink } from '../../Navbar'
import Link from 'next/link'
import { SectionBgGradient } from '../Home/SectionBgGradient'

export const Evm = () => {
  return (
    <Container className='relative mb-[104px] z-10'>
      <SectionBgGradient />
      <div className='mb-[100px]'>
        <h2 className='text-white-50 font-bold text-3xl md:text-[55px] text-center mb-6 -tracking-[0.6px] md:leading-[65px]'>
          <span className='text-neonGreen-500'>Built on Tezos,</span>
          <br />
          Designed to Evolve
        </h2>
        <p className='text-center text-base md:text-[23px] text-grey-200 max-w-[600px] mx-auto'>
          Etherlink runs on Tezos’ advanced rollup technology, built for
          security, speed, and decentralization.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-4 md:gap-8'>
        {EVM_BOXES.map((box, index) => (
          <Fade
            triggerOnce
            direction='up'
            delay={100 + index * 100}
            key={index}
          >
            <EvmCard
              topLine={box.topLine}
              title={box.title}
              desc={box.desc}
              link={box.link}
              img={box.img}
              mobileImg={box.mobileImg}
            />
          </Fade>
        ))}
      </div>
    </Container>
  )
}

interface EvmCardProps {
  topLine: string
  title: string
  desc: string
  link: string
  img: string
  mobileImg?: string
}

const EvmCard = ({
  topLine,
  title,
  desc,
  link,
  img,
  mobileImg
}: EvmCardProps) => {
  return (
    <Link href={link} target={isExternalLink(link)}>
      <div
        className='relative rounded-3xl shadow-[0px_0px_6px_0px_rgba(56,255,156,0.40)] backdrop-blur-[6px] z-20 mx-auto
          w-full max-w-[613px] h-[400px] md:h-[400px] overflow-hidden border border-transparent hover:border hover:border-neonGreen-500'
      >
        <img
          className={`absolute top-0 w-full h-full object-cover xl:hidden 
              ${mobileImg?.includes('tezos') ? '-translate-y-8' : ''} 
              ${mobileImg?.includes('tezos') ? 'md:-translate-y-3' : ''}`}
          src={mobileImg}
          alt='mobile bg img'
        />

        <img
          className='absolute top-0 w-full h-full aspect-[16/9] object- hidden xl:block object-cover'
          src={img}
          alt='desktop bg img'
        />
        <div className='absolute bottom-0 rounded-b-3xl p-6 bg-[rgba(27,27,27,0.85)] backdrop-blur-[12px] w-full'>
          <div className='flex items-center flex-wrap justify-between mb-2 h-full'>
            <p className='text-grey-50 font-light text-xs'>{topLine}</p>
            <img src='/img/icons/green-arrow-up-right.svg' alt='arrow' />
          </div>
          <p className='w-full text-neonGreen-500 text-[23px] font-semibold mb-[12px]'>
            {title}
          </p>
          <p className='text-grey-200 leading-[17px] text-sm'>{desc}</p>
        </div>
      </div>
    </Link>
  )
}
