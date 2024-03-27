'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowButton } from '../../buttons/ArrowButton'
import { Button } from '../../buttons/Button'
import { FEATURES } from './constants'
import { Fade } from 'react-awesome-reveal'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export const Main = () => {
  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center xl:-mt-20'>
      {/* background image */}
      <div className='flex justify-center'>
        <Lottie
          className='absolute top-0 xl:inset-0 z-0 w-full'
          animationData={require('./bg-animation.json')}
        />
      </div>
      <div className='z-50'>
        <Fade triggerOnce direction='down' delay={200}>
          <h1 className='text-left md:text-center text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-white'>
            <span className='text-newGreen'>A Truly Decentralized</span>
            <br />
            Layer 2 Blockchain
          </h1>
        </Fade>
        <Fade triggerOnce delay={400}>
          <p className='text-center mt-2 font-light text-lg xl:text-3xl text-white'>
            Powered by Tezos Smart Rollups Technology
          </p>
        </Fade>

        <div className='relative flex flex-col md:flex-row md:items-center justify-center gap-3 md:gap-6 my-7 md:my-14 w-full'>
          <Fade triggerOnce delay={600}>
            <ArrowButton text='Build' link='https://docs.etherlink.com/' />
            <Button text='Follow' link='https://twitter.com/etherlink' />
          </Fade>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 text-center w-full'>
          {FEATURES.map((data, index) => (
            <Fade
              direction='up'
              triggerOnce
              delay={800 + 100 * index}
              key={index}
            >
              <div className='flex flex-col justify-center bg-midBlack rounded-xl px-2 xl:px-3 2xl:px-5 py-7 xl:py-9 2xl:py-14 text-lg md:text-3xl font-medium text-white h-full'>
                <Image
                  draggable={false}
                  className='mx-auto mb-6 w-auto h-auto xl:h-28 2xl:h-36'
                  width={100}
                  height={100}
                  src={data.image}
                  alt={data.alt}
                />
                {data.text}
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  )
}
