'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './react-swiper.css'
import { Pagination } from 'swiper/modules'
import Link from 'next/link'
import { ExploreEcosystemCard } from './EcosystemCarousel'
import { Project } from '../../../../utils/airtable/ecosystem'

export const EcosystemCarouselMobile = ({
  projects
}: {
  projects: Project[]
}) => {
  return (
    <div>
      <div className='mb-10'>
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
          {projects.map((data, index) => (
            <SwiperSlide key={index}>
              <ExploreEcosystemCard {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link href='/ecosystem'>
        <p
          className='text-neon-green-500 bg-[#1B1B1B] shadow-[0px_0px_6px_0px_rgba(51,232,142,0.40)] 
            rounded-3xl px-4 py-2 text-lg text-center w-full'
        >
          See all
        </p>
      </Link>
    </div>
  )
}
