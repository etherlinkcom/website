'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import '../Home/react-swiper.css'
import { Pagination } from 'swiper/modules'
import Link from 'next/link'
import { isExternalLink } from '../../Navbar'
import { STARTED_BOXES } from './fixture'

export const MobileStartedCarousel = () => {
  return (
    <div className='block md:hidden mb-10 mt-4'>
      <Swiper
        className='mobileCarousel'
        style={{
          padding: '4px'
        }}
        spaceBetween={12}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{
          clickable: true
        }}
      >
        {STARTED_BOXES.map((data, index) => (
          <SwiperSlide key={index}>
            <StartedBox {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export interface StartedBoxProps {
  topLine: string
  title: string
  desc: string
  link: string
  mobileImg: string
  desktopImg: string
}

const StartedBox = ({ topLine, title, desc, link }: StartedBoxProps) => {
  return (
    <Link href={link} target={isExternalLink(link)}>
      <div className='relative flex flex-col rounded-xl h-[340px] bg-[#38ff9c] backdrop-blur-[12px]'>
        <img src='' alt='' />
        <div className='absolute flex flex-col bottom-0 p-6 w-full bg-[rgba(27,27,27,0.85)]'>
          <div className='flex items-center flex-wrap justify-between mb-4 h-full'>
            <p className='text-grey-50 font-light text-xs'>{topLine}</p>
            <img src='/img/icons/green-arrow-up-right.svg' alt='arrow' />
          </div>
          <p className='text-neonGreen-500 text-[23px] font-semibold'>
            {title}
          </p>
          <p className='text-grey-200 text-sm mt-4'>{desc}</p>
        </div>
      </div>
    </Link>
  )
}
