'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import '../Home/react-swiper.css'
import { Pagination } from 'swiper/modules'
import { SPEED_BOXES } from './fixture'
import { SpeedBox } from './Speed'

export const MobileSpeed = () => {
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
        {SPEED_BOXES.map((data, index) => (
          <SwiperSlide key={index}>
            <SpeedBox {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
