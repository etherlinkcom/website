'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Container from '../../container'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
import { SectionBgGradient } from './SectionBgGradient'
import { Fade } from 'react-awesome-reveal'

export const ExperienceSection = () => {
  return (
    <Container className='relative pb-32'>
      <SectionBgGradient />
      <div className='mb-[104px] md:mb-[204px]'>
        <h2 className='text-neonGreen-500 font-bold text-3xl md:text-6xl text-center mb-3 -tracking-[1.1px]'>
          Future-proof,
          <br />
          <span className='text-white-50 font-bold text-3xl md:text-6xl text-center -tracking-[1.1px]'>
            open, and scalable
          </span>
        </h2>

        <p className='text-center mt-2 font-light md:text-[23px] text-grey-200 -tracking-[0.46px]'>
          Build with confidence on an upgradable, permissionless network.
        </p>
      </div>

      <div className='flex flex-col gap-[104px] lg:gap-72'>
        <Fade triggerOnce direction='up' delay={100}>
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
            subTitle='compatible'
            desc='Smoothly deploy any EVM codebase and migrate your users and assets from Ethereum 1, and other interoperable chains, enabling seamless interaction and asset transfers across different networks.'
          />
        </Fade>
        <Fade triggerOnce direction='up' delay={200}>
          <CustomFlex
            flexReverse={true}
            lottie={
              <Lottie
                className='max-w-[342px]'
                animationData={require('./lottie/open.json')}
              />
            }
            blockImg={
              <img
                className='absolute -top-12'
                src='/img/home/block1.svg'
                alt='block line'
              />
            }
            title='Open and'
            subTitle='permissionless'
            desc='Users retain full ownership of assets. This non-custodial architecture Is resistant to censorship'
          />
        </Fade>
        <Fade triggerOnce direction='up' delay={300}>
          <CustomFlex
            lottie={
              <Lottie
                className='max-w-[342px]'
                animationData={require('./lottie/evm.json')}
              />
            }
            className='mb-20 md:mb-0'
            blockImg={
              <img
                className='absolute -top-12'
                src='/img/home/block1.svg'
                alt='block line'
              />
            }
            title='Future-proof'
            subTitle='network'
            desc="Etherlink's upgradability is facilitated through Tezos' established on-chain governance system, enabling community-driven development and progression"
          />
        </Fade>
        <Fade triggerOnce direction='up' delay={400}>
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
                className='absolute -top-12'
                src='/img/home/block1.svg'
                alt='block line'
              />
            }
            title='Comprehensive'
            subTitle='toolkit'
            desc='Leverage familiar tools like Metamask, Hardhat, and Foundry. Access a wide range of integrations, including Subsquid, Fireblocks, Thirdweb, and The Graph'
          />
        </Fade>
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
          <h3
            className={`text-start text-2xl sm:text-3xl font-semibold leading-none -tracking-[0.56px] mb-3`}
          >
            <span className='text-newGreen'>{title}</span> {subTitle}
          </h3>
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
