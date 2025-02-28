'use client'

import React from 'react'
import Container from '../../container'
import { Fade } from 'react-awesome-reveal'
import { EVM_BOXES } from './fixture'
import { isExternalLink } from '../../Navbar'
import Link from 'next/link'

export const Evm = () => {
  return (
    <Container className='relative mb-[104px]'>
      <div className='mb-[100px]'>
        <h2 className='text-white font-bold text-3xl md:text-[55px] text-center mb-6 -tracking-[0.6px] md:leading-[65px]'>
          <span className='text-neonGreen-500'>EVM Compatibility meets </span>
          <br />
          Tezos performance
        </h2>
        <p className='text-center text-base md:text-[23px] text-grey-200'>
          Unlocking unparalleled scalability for next-gen applications.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {EVM_BOXES.map((box, index) => (
          <Fade
            triggerOnce
            direction='down'
            delay={100 + index * 100}
            key={index}
          >
            <EvmCard
              topLine={box.topLine}
              title={box.title}
              desc={box.desc}
              link={box.link}
              img={box.img}
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
}

const EvmCard = ({ topLine, title, desc, link, img }: EvmCardProps) => {
  return (
    <Link href={link} target={isExternalLink(link)}>
      {/* waiting for img */}
      {/* <img src={img} alt='bg img' /> */}
      <div className='relative rounded-3xl shadow-[0px_0px_6px_0px_rgba(56,255,156,0.40)] backdrop-blur-[6px] h-[300px]'>
        <div className='absolute bottom-0 rounded-b-3xl p-6 bg-[rgba(27,27,27,0.85)] backdrop-blur-[12px]'>
          <div className='flex items-center flex-wrap justify-between mb-4 h-full'>
            <p className='text-grey-50 font-light text-xs'>{topLine}</p>
            <img src='/img/icons/green-arrow-up-right.svg' alt='arrow' />
          </div>
          <p className='w-full text-neonGreen-500 text-[23px] font-semibold'>
            {title}
          </p>
          <p className='py-3 text-grey-200'>{desc}</p>
        </div>
      </div>
    </Link>
  )
}
