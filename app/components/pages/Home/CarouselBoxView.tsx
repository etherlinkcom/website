'use client'
import React from 'react'
import { FEATURES } from './constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import './react-swiper.css'
import 'swiper/css/pagination'
import { FeatureBox } from './Main'

export const CarouselBoxView = () => {
  return (
    <div className='lg:hidden mobileCarousel'>
      <Swiper
        style={{
          padding: '4px'
        }}
        spaceBetween={25}
        slidesPerView={1.1}
        modules={[Pagination]}
        pagination={{
          clickable: true
        }}
      >
        {FEATURES.map((data, index) => (
          <SwiperSlide key={index}>
            <FeatureBox {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
