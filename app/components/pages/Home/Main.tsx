'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowButton } from '../../buttons/ArrowButton'
import { Button } from '../../buttons/Button'
import { FEATURES, Feature } from './constants'
import { Fade } from 'react-awesome-reveal'
import dynamic from 'next/dynamic'
import { CarouselBoxView } from './CarouselBoxView'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export const Main = () => {
  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center w-full mb-24 lg:mb-44 mt-24 md:mt-30 lg:mt-34 xl:mt-40'>
      {/* background image */}
      <div className='flex justify-center'>
        <Lottie
          className='absolute top-0 xl:inset-0 z-0 w-full'
          animationData={require('./bg-animation.json')}
        />
      </div>
      <div className='z-10 w-full'>
        <div className='px-8 mx-auto'>
          <Fade triggerOnce direction='down' delay={200}>
            <h1 className='text-left md:text-center text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-white'>
              <span className='text-newGreen'>
                Fast, Fair and <span className='text-white'>(Nearly)</span> Free
              </span>
              <br />
              Layer 2 Blockchain
            </h1>
          </Fade>
          <Fade triggerOnce delay={400}>
            <p className='text-center mt-2 font-light text-lg xl:text-3xl text-white'>
              Non-custodial scaling solution <br /> powered by Tezos Smart
              Rollups technology
            </p>
          </Fade>

          <div className='relative flex flex-col md:flex-row md:items-center justify-center gap-3 md:gap-6 my-7 md:my-14 w-full'>
            <Fade triggerOnce delay={600}>
              <ArrowButton
                text='Build'
                link='https://docs.etherlink.com/'
                className='bg-newGreen hover:bg-lightGreen text-black text-xl md:text-2xl font-semibold px-7 md:px-14 py-3 md:py-5'
              />
              <Button text='Follow' link='https://twitter.com/etherlink' />
            </Fade>
          </div>

          <div className='hidden lg:grid lg:grid-cols-3 gap-6 w-full md:max-w-[1536px] mx-auto'>
            {FEATURES.map((data, index) => (
              <Fade
                direction='up'
                triggerOnce
                delay={800 + 100 * index}
                key={index}
              >
                <FeatureBox {...data} />
              </Fade>
            ))}
          </div>
        </div>

        <div className='pl-8'>
          <CarouselBoxView />
        </div>
      </div>
    </div>
  )
}

export const FeatureBox = ({ image, alt, text, description }: Feature) => {
  return (
    <div className='px-8 py-6 rounded-xl h-full backdrop-blur-md bg-midBlack/70 border border-[#242424]'>
      <div
        className='flex flex-col justify-center rounded-lg py-10 font-medium text-white mb-6'
        style={{
          backgroundColor: 'rgba(89, 173, 140, 0.03)'
        }}
      >
        <Image
          draggable={false}
          className='mx-auto w-auto h-32'
          width={100}
          height={100}
          src={image}
          alt={alt}
        />
      </div>
      <div className='flex flex-col gap-4 py-6 px-1'>
        {text}
        <p className='text-gray-400 text-sm md:text-base'>{description}</p>
      </div>
    </div>
  )
}
