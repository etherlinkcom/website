'use client'
import React, { useState } from 'react'
import { FlipContent, FeatureTitle, FEATURES, Feature } from './constants'
import { Fade } from 'react-awesome-reveal'
import dynamic from 'next/dynamic'
import { CarouselBoxView } from './CarouselBoxView'
import { PrimaryButton } from '../../buttons/PrimaryButton'
import { GhostButton } from '../../buttons/GhostButton'
import Container from '../../container'
import Image from 'next/image'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export const Main = () => {
  return (
    <Container className='relative min-h-screen flex flex-col items-center justify-center w-full mb-24 lg:mb-44 mt-24 md:mt-30 lg:mt-34 xl:mt-40'>
      {/* background image */}
      <Lottie
        className='absolute -translate-y-[500px] md:-translate-y-[420px] z-0  w-[800px] md:w-[1800px]'
        animationData={require('./lottie/Head.json')}
      />
      <div className='z-10 w-full'>
        <div className='mx-auto'>
          <Fade triggerOnce direction='down' delay={200}>
            <h1 className='text-center text-[36px] md:text-[69px] font-semibold leading-tight text-white -tracking-[1.38px] mb-3'>
              <span className='text-white'>
                The{' '}
                <span className='text-neon-green-500'>
                  fast<span className='text-white'>,</span> fair{' '}
                </span>
                and (nearly) <span className='text-neon-green-500'>free</span>{' '}
                L2
              </span>
            </h1>
          </Fade>
          <Fade triggerOnce delay={400}>
            <p className='text-center mt-2 font-normal text-[16px] md:text-[28px] text-[#9B9B9B] -tracking-[1.38px]'>
              Powered by Tezos Smart Rollups Technology
            </p>
          </Fade>

          <div className='relative flex flex-col md:flex-row md:items-center justify-center gap-[24px] md:gap-6 mt-[80px] mb-[104px] md:my-14 w-ful'>
            <Fade triggerOnce delay={600}>
              <PrimaryButton
                className='w-full'
                text='Start building'
                href='https://docs.etherlink.com/'
                icon={
                  <img src='/img/home/arrow-right.svg' alt='arrow right icon' />
                }
              />
              <GhostButton
                className='w-full'
                text='EVM bridge'
                href='https://www.etherlinkbridge.com/bridge'
                icon={<img src='/img/home/bridge-icon.svg' alt='bridge icon' />}
              />
            </Fade>
          </div>

          <div className='hidden lg:grid lg:grid-cols-3 gap-8 w-full md:max-w-[1536px] mx-auto mt-[104px] md:mt-[208px]'>
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

        <CarouselBoxView />
      </div>
    </Container>
  )
}

export const FeatureBox = ({
  image,
  alt,
  text,
  description,
  flipContent
}: Feature) => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div
      className='flex px-6 py-6 rounded-3xl h-[540px] md:h-[660px] backdrop-blur bg-[#1B1B1B] p-2
        shadow-[0px_0px_6px_0px_rgba(56,255,156,0.40)] hover:cursor-pointer border-2 border-transparent hover:border-2 hover:border-neon-green-500 group'
      onClick={() => setIsClicked(!isClicked)}
    >
      <div
        className={`grid grid-rows-[1fr_1fr_auto] grid-cols-1 min-h-[300px] transition-opacity duration-1000 ease overflow-hidden
          ${isClicked ? 'opacity-0 w-0 h-0' : 'opacity-100 w-full'}`}
      >
        <div
          className='flex flex-col justify-center rounded-xl py-10 font-medium text-white
            mb-6 bg-grey-500 group-hover:bg-[#5C72FB] transition-colors duration-300 ease-in'
        >
          <Image
            draggable={false}
            className='mx-auto w-auto'
            width={160}
            height={160}
            src={image}
            alt={alt}
          />
        </div>
        <div className='flex flex-col gap-4 py-1 px-1 h-full'>
          {text}
          <p className='text-gray-400 text-sm md:text-base max-w-72'>
            {description}
          </p>
          <div className='w-full h-full flex flex-col justify-end lg:items-start mt-6'>
            <GhostButton
              className='group-hover:bg-neon-green-500 group-hover:text-black transition-colors duration-300 -tracking-[0.36px]'
              text='Learn more'
              animation={false}
            />
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-opacity duration-1000 ease
            ${isClicked ? 'opacity-100' : 'opacity-0 w-0 h-0'}
          `}
      >
        <div className='grid grid-rows-[1fr_1fr_1fr] grid-cols-1 min-h-[300px] h-full justify-around gap-10'>
          {flipContent.map((data, index) => (
            <BackContent flipContent={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

const BackContent = ({ flipContent }: { flipContent: FlipContent }) => {
  return (
    <div className='flex flex-col relative w-full '>
      <FeatureTitle title={flipContent.title} subTitle={flipContent.subTitle} />

      {typeof flipContent.description === 'string' ? (
        <p className='text-gray-400 text-sm md:text-base p-2.5'>
          {flipContent.description}
        </p>
      ) : (
        flipContent.description
      )}

      <div className='absolute right-0'>{flipContent.icon}</div>
    </div>
  )
}
