'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ProjectCardProps } from '../../../ecosystem/ProjectCard'
import Link from 'next/link'
import Image from 'next/image'
import { CheveronIcon } from '../../Icons/CheveronIcon'
import { TwitterIcon } from '../../Icons/TwitterIcon'
import { ArrowRightIcon } from '../../Icons/ArrowRightIcon'
import { Project, TAGS_MAP } from '../../../../utils/airtable/ecosystem'

export const EcosystemCarousel = ({ projects }: { projects: Project[] }) => {
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
          {projects.map((data, index) => (
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
  Logo,
  Project,
  Description,
  Tags,
  Twitter,
  Website
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
            src={Logo[0].url}
            alt={Project + ' Logo'}
            width={30}
            height={30}
          />
          <p className='font-bold text-white text-xl pl-2'>{Project}</p>
        </div>
        <div className='flex items-center gap-2 z-50'>
          {!!Twitter && (
            <Link href={Twitter} target='_blank'>
              <TwitterIcon className='hover:fill-black hover:bg-newGreen transition-colors duration-300' />
            </Link>
          )}
          {!!Website && (
            <Link href={Website} target='_blank'>
              <ArrowRightIcon className='hover:fill-black hover:bg-newGreen transition-colors duration-300' />
            </Link>
          )}
        </div>
      </div>
      <p className='w-full text-gray-300 text-sm mb-[24px] h-full'>
        {Description}
      </p>
      <div className='flex items-center gap-2 h-full'>
        {Tags.map((category, index) => (
          <div
            key={index}
            className='bg-darkBlack text-gray-300 text-xs rounded p-2 text-center'
          >
            {TAGS_MAP[category]}
          </div>
        ))}
      </div>
      {/* <span className='absolute inset-0 border-2 border-newGreen rounded-3xl opacity-0 group-hover:animate-circling' /> */}
    </div>
  )
}
