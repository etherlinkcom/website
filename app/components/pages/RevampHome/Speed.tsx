'use client'

import React from 'react'
import Container from '../../container'
import { SPEED_BOXES } from './fixture'
import { Fade } from 'react-awesome-reveal'
import { MobileSpeed } from './MobileSpeed'

export const Speed = () => {
  return (
    <Container className='relative mb-[104px]'>
      <div className='mb-[100px]'>
        <h2 className='text-white font-bold text-3xl md:text-[55px] text-center mb-6 -tracking-[0.6px] md:leading-[65px]'>
          <span className='text-neonGreen-500'>Speed meets</span>{' '}
          <span className='inline md:hidden'>
            <br />
          </span>{' '}
          true decentralization
        </h2>
        <p className='text-center text-base md:text-[23px] text-grey-200'>
          Fast, secure, and permissionless—DeFi without limits.
        </p>
      </div>
      <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {SPEED_BOXES.map((box, index) => (
          <Fade
            triggerOnce
            direction='up'
            delay={100 + index * 100}
            key={index}
          >
            <SpeedBox {...box} />
          </Fade>
        ))}
      </div>
      <MobileSpeed />
    </Container>
  )
}

export interface SpeedBoxProps {
  icon: string
  title: string
  desc: string
}

export const SpeedBox = ({ icon, title, desc }: SpeedBoxProps) => {
  return (
    <div className='rounded-3xl shadow-[0px_0px_6px_0px_rgba(56,255,156,0.40)] backdrop-blur-[6px] h-full'>
      <div className='relative flex items-center justify-center bg-grey-500 rounded-t-3xl backdrop-blur-[6px] pt-8 pb-12'>
        <img className='w-[120px] h-[115px]' src={icon} alt='icon' />
      </div>
      <div className='p-6 bg-[rgba(27, 27, 27, 0.70)]'>
        <p className='text-[23px] text-neonGreen-500 font-semibold'>{title}</p>
        <p className='py-3 text-grey-200 tracking-[-0.32px]'>{desc}</p>
      </div>
    </div>
  )
}
