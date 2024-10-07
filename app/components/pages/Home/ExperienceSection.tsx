'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import Container from '../../container'
import { FeatureTitle } from './constants'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
import { SectionBgGradient } from './SectionBgGradient'

export const ExperienceSection = () => {
  return (
    <Container className='relative pb-32'>
      <SectionBgGradient />
      <div className='mb-[104px] md:mb-[204px]'>
        <h2 className='text-white font-bold text-3xl md:text-6xl text-center mb-3 -tracking-[1.1px]'>
          Experience an Exploitation
        </h2>
        <h2 className='text-newGreen font-bold text-3xl md:text-6xl text-center -tracking-[1.1px]'>
          Free EVM Environment
        </h2>
        <p className='text-center mt-2 font-light md:text-[23px] text-[#9B9B9B] -tracking-[0.46px]'>
          Building towards a secure, decentralized and permissionless network
        </p>
      </div>

      <div className='flex flex-col gap-[104px] lg:gap-72'>
        <CustomFlex
          blockImg={
            <img
              className='absolute -top-12'
              src='/img/home/block1.svg'
              alt='block line'
            />
          }
          lottie={
            <Lottie
              className='max-w-[342px]'
              animationData={require('./lottie/eth.json')}
            />
          }
          title='EVM'
          subTitle='Compatible'
          desc='Smoothly deploy any EVM codebase and migrate your users and assets from Ethereum 1, and other interoperable chains, enabling seamless interaction and asset transfers across different networks.'
        />
        <CustomFlex
          flexReverse={true}
          lottie={
            <Lottie
              className='max-w-[342px]'
              animationData={require('./lottie/evm.json')}
            />
          }
          className='mb-20 md:mb-0'
          blockImg={
            <img
              className='absolute -top-16 md:-top-32'
              src='/img/home/block2.svg'
              alt='block line'
            />
          }
          title='Smart Rollup'
          subTitle='Technology'
          desc={
            <p className='text-[#9B9B9B] text-sm md:text-lg -tracking-[0.36px] font-normal'>
              Etherlink is powered by a{' '}
              <a
                href='https://tezos.com/developers/smart-rollups/'
                target='_blank'
                className='underline text-newGreen'
              >
                Smart Rollup
              </a>
              , an enshrined, optimistic rollup technology implemented by Tezos.
            </p>
          }
        />
        <CustomFlex
          lottie={
            <Lottie
              className='max-w-[342px]'
              animationData={require('./lottie/open.json')}
            />
          }
          blockImg={
            <img
              className='absolute -top-32 md:-top-48'
              src='/img/home/block3.svg'
              alt='block line'
            />
          }
          title='Open and'
          subTitle='Permissionless'
          desc='Users retain full ownership of assets. This non-custodial architecture is resistant to censorship.'
        />
        <CustomFlex
          lottie={
            <Lottie
              className='max-w-[342px]'
              animationData={require('./lottie/rollup.json')}
            />
          }
          flexReverse={true}
          blockImg={
            <img
              className='absolute -top-0'
              src='/img/home/block4.svg'
              alt='block line'
            />
          }
          title='Future-proof'
          subTitle='Network'
          desc="Etherlink's upgradability is facilitated through Tezos' established on-chain governance system, enabling community-driven development and progression"
        />
      </div>
    </Container>
  )
}

const CustomFlex = ({
  blockImg,
  lottie,
  title,
  subTitle,
  desc,
  flexReverse = false,
  className
}: {
  blockImg: React.ReactNode
  lottie: React.ReactNode
  title: string
  subTitle: string
  desc: React.ReactNode | string
  flexReverse?: boolean
  className?: string
}) => {
  return (
    <div
      className={`flex flex-col  ${flexReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center ${className} gap-[80px]`}
    >
      <div className='relative'>
        {blockImg}
        <img src='/img/home/grid.svg' alt='bg grid' />

        <div className='absolute top-1/2 -translate-y-1/2 flex flex-col w-full px-7 md:px-16 pt-4'>
          <FeatureTitle
            title={title}
            subTitle={subTitle}
            className='mb-2 text-md md:text-3xl'
          />
          {typeof desc === 'string' ? (
            <p className='text-[#9B9B9B] text-sm md:text-lg -tracking-[0.36px] font-normal'>
              {desc}
            </p>
          ) : (
            desc
          )}
        </div>
      </div>

      <div className='flex justify-center lg:w-[50%] translate-y-8 md:translate-y-0'>
        {lottie}
      </div>
    </div>
  )
}
