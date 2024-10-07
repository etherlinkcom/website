'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ProjectCardProps, CategoryBox } from '../../../ecosystem/ProjectCard'
import Link from 'next/link'
import Image from 'next/image'
import { CheveronIcon } from '../../Icons/CheveronIcon'
import { TwitterIcon } from '../../Icons/TwitterIcon'
import { ArrowRightIcon } from '../../Icons/ArrowRightIcon'

export const TOP10PROJECTS: ProjectCardProps[] = [
  {
    image: '/img/ecosystem/LayerZero.jpeg',
    title: 'LayerZero',
    description:
      'An omnichain interoperability protocol that allows different blockchains to communicate with each other.',
    categories: ['bridge'],
    twitter: 'https://twitter.com/LayerZero_Labs',
    website: 'https://layerzero.network/'
  },
  {
    image: '/img/ecosystem/Pyth-Network.jpeg',
    title: 'Pyth Network',
    description:
      'Secure your smart contracts with reliable, low-latency market data from institutional sources. ',
    categories: ['infra'],
    twitter: 'https://x.com/PythNetwork',
    website: 'https://pyth.network/'
  },
  {
    image: '/img/ecosystem/TheGraph.jpg',
    title: 'The Graph',
    description:
      'A Web3 protocol for organizing and accessing blockchain data.',
    categories: ['infra'],
    twitter: 'https://x.com/graphprotocol',
    website: 'https://thegraph.com'
  },
  {
    image: '/img/ecosystem/Subsquid.jpeg',
    title: 'Subsquid',
    description:
      'A peer-to-peer network to batch query and aggregate terabytes of on-chain and off-chain data.',
    categories: ['data-science'],
    twitter: 'https://twitter.com/subsquid',
    website: 'https://subsquid.io/'
  },
  {
    image: '/img/ecosystem/Layer3.jpg',
    title: 'Layer3',
    description:
      'Discover the world of crypto like never before with interactive quests that make learning and exploring crypto fun, engaging, and rewarding.',
    categories: ['social'],
    twitter: 'https://x.com/layer3xyz',
    website: 'https://layer3.xyz/'
  },
  {
    image: '/img/ecosystem/Thirdweb.jpg',
    title: 'Thirdweb',
    description:
      'A platform that provides a suite of tools for developers to build, launch, and manage their Web3 projects.',
    categories: ['dev-tools'],
    twitter: 'https://twitter.com/thirdweb',
    website: 'https://thirdweb.com/'
  },
  {
    image: '/img/ecosystem/Redstone.png',
    title: 'Redstone',
    description:
      'Cross-chain data oracle providing pricing data for Smart Contracts & DeFi protocols.',
    categories: ['oracle'],
    twitter: 'https://twitter.com/redstone_defi',
    website: 'https://redstone.finance/'
  },
  {
    image: '/img/ecosystem/Hanji.jpeg',
    title: 'Hanji',
    description: 'An on-chain central limit order book.',
    categories: ['defi'],
    twitter: 'https://twitter.com/HanjiProtocol',
    website: 'https://hanji.io/'
  },
  {
    image: '/img/ecosystem/Rivo.jpeg',
    title: 'Rivo',
    description:
      'A self-custodial yield marketplace designed for earning passive income.',
    categories: ['defi'],
    twitter: 'https://twitter.com/rivoxyz',
    website: 'https://www.rivo.xyz/'
  }
]

export const EcosystemCarousel = () => {
  const swiperInfoRef = useRef<any>()

  return (
    <div>
      <div className='mb-10'>
        <Swiper
          ref={swiperInfoRef}
          style={{
            padding: '4px'
          }}
          modules={[Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={3}
        >
          {TOP10PROJECTS.map((data, index) => (
            <SwiperSlide key={index}>
              <ExploreEcosystemCard {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='flex items-center justify-between pl-8'>
        <div className='flex items-center gap-4'>
          <button
            type='button'
            onClick={() => swiperInfoRef?.current?.swiper.slidePrev()}
            className='flex justify-center items-center shadow-[0px_0px_6px_0px_rgba(56,255,156,0.40)] p-[6px] w-8 text-center
              backdrop-blur-md rounded transition-colors duration-300 hover:bg-newGreen group z-50'
          >
            <CheveronIcon className='group-hover:fill-black transition-colors duration-300 rotate-180' />
          </button>
          <button
            type='button'
            onClick={() => swiperInfoRef?.current?.swiper.slideNext()}
            className='flex justify-center items-center shadow-[0px_0px_6px_0px_rgba(56,255,156,0.40)] p-[6px] w-8 text-center
              backdrop-blur-md rounded transition-colors duration-300 hover:bg-newGreen group z-50'
          >
            <CheveronIcon className='group-hover:fill-black transition-colors duration-300' />
          </button>
        </div>
        <Link href='/ecosystem' className='z-50'>
          <p
            className='text-newGreen bg-[#1B1B1B] shadow-[0px_0px_6px_0px_rgba(51,232,142,0.40)] 
            rounded-3xl px-4 py-2 text-sm transition-colors duration-300 hover:text-black hover:bg-newGreen'
          >
            See all
          </p>
        </Link>
      </div>
    </div>
  )
}

export const ExploreEcosystemCard = ({
  image,
  title,
  description,
  categories,
  twitter,
  website
}: ProjectCardProps) => {
  return (
    <div
      className='relative flex flex-col p-6 bg-[#1B1B1B] shadow-[0px_0px_6px_0px_rgba(51,232,142,0.40)] 
      rounded-3xl h-full group border border-transparent hover:border hover:border-newGreen'
    >
      <div className='flex items-center flex-wrap justify-between mb-4 h-full gap-2'>
        <div className='flex items-center gap-1'>
          <Image
            className='w-[30px] h-[30px] object-contain rounded-xl'
            src={image}
            alt={title}
            width={30}
            height={30}
          />
          <p className='font-bold text-white text-xl'>{title}</p>
        </div>
        <div className='flex items-center gap-2 z-50'>
          {!!twitter && (
            <Link href={twitter} target='_blank'>
              <TwitterIcon className='hover:fill-black hover:bg-newGreen transition-colors duration-300' />
            </Link>
          )}
          {!!website && (
            <Link href={website} target='_blank'>
              <ArrowRightIcon className='hover:fill-black hover:bg-newGreen transition-colors duration-300' />
            </Link>
          )}
        </div>
      </div>
      <p className='w-full text-gray-300 text-sm mb-[24px] h-full'>
        {description}
      </p>
      <div className='flex items-center gap-2 h-full'>
        {categories.map((category, index) => (
          <CategoryBox category={category} key={index} />
        ))}
      </div>
      {/* <span className='absolute inset-0 border-2 border-newGreen rounded-3xl opacity-0 group-hover:animate-circling' /> */}
    </div>
  )
}
