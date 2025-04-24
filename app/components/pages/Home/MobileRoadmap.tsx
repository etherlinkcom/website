'use client'
import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { PHASES } from './constants'
import { Progress } from 'flowbite-react'
import { calculateProgress } from './Roadmap'
import { customProgressTheme } from './Roadmap'

export const MobileRoadmap = () => {
  const swiperInfoRef = useRef<any>()

  const [currentPhase, setCurrentPhase] = useState(2)

  return (
    <div className='md:hidden w-full mx-auto px-6'>
      <div className='flex flex-col h-full'>
        <h1 className='block md:hidden text-white-50 text-2xl'>
          <span className='text-newGreen'>Q{currentPhase}</span> 2024
        </h1>
        <Swiper
          initialSlide={currentPhase - 1}
          ref={swiperInfoRef}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={slide => setCurrentPhase(slide.activeIndex + 1)}
          modules={[Navigation]}
          className='w-full mt-4'
        >
          {PHASES.map((phase, index) => (
            <SwiperSlide key={index}>
              <ul>
                {phase.map((detail, index) => (
                  <div className='flex gap-2' key={index}>
                    {detail.done ? (
                      <img src='/img/home/square-check.svg' alt='check icon' />
                    ) : (
                      <img src='/img/home/square.svg' alt='square icon' />
                    )}
                    <p
                      className={`${detail.done ? 'text-newGreen' : 'text-white-50'} font-light text-lg`}
                    >
                      {detail.name}
                    </p>
                  </div>
                ))}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
        <Progress
          className='block md:hidden mt-6'
          color='newGreen'
          progress={calculateProgress(currentPhase, PHASES)}
          theme={customProgressTheme}
        />
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 w-full -bottom-8'>
        <Swiper slidesPerView={PHASES.length} spaceBetween={10}>
          {PHASES.map((_, index) => (
            <SwiperSlide key={index}>
              <button
                onClick={() => swiperInfoRef?.current?.swiper.slideTo(index)}
                className={`h-1 w-full rounded ${currentPhase - 1 === index ? 'bg-newGreen' : 'bg-white-50'}`}
                key={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
