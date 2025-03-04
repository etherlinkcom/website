'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import '../Home/react-swiper.css'
import { Pagination } from 'swiper/modules'
import Link from 'next/link'
import { isExternalLink } from '../../Navbar'
import { FeaturedProject } from '../../../../utils/airtable/homeFeatured'
import { FeaturedBoxProps } from './DesktopStartedCarousel'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export const MobileStartedCarousel = ({
  featuredProjects
}: {
  featuredProjects: FeaturedProject[]
}) => {
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
        {featuredProjects.map((data, index) => (
          <SwiperSlide key={index}>
            <StartedBox {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const StartedBox = ({
  Title,
  Short_Description,
  Project_Link,
  Mobile_Image
}: FeaturedBoxProps) => {
  return (
    <Link href={Project_Link} target={isExternalLink(Project_Link)}>
      <div className='relative flex flex-col rounded-xl h-[340px] shadow-[0_0_6px_0_rgba(56,255,156,0.4)] hover:border hover:border-neonGreen-500'>
        <img
          className='absolute inset-0 object-cover h-full w-full z-0 rounded-xl'
          src={Mobile_Image[0].url}
          alt='bg img'
        />
        <div className='absolute flex flex-col bottom-0 p-6 w-full bg-[rgba(27,27,27,0.85)] backdrop-blur-[12px] rounded-b-3xl'>
          <div className='flex items-center flex-wrap justify-between mb-4 h-full'>
            <p className='text-grey-50 font-light text-xs'>FEATURED</p>
            <img src='/img/icons/green-arrow-up-right.svg' alt='arrow' />
          </div>
          <p className='text-neonGreen-500 text-[23px] font-semibold'>
            {Title}
          </p>
          <p className='text-grey-200 text-sm mt-4'>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {Short_Description}
            </ReactMarkdown>
          </p>
        </div>
      </div>
    </Link>
  )
}
