'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoscroll from 'embla-carousel-auto-scroll'
import { Partner } from './fixture'

export const PartnerCarousel = ({
  partners,
  speed,
  className
}: {
  partners: Partner[]
  speed: number
  className?: string
}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    Autoscroll({ stopOnInteraction: false, speed })
  ])

  return (
    <div
      className={`relative flex flex-col items-center z-20 bg-grey-900 w-full md:w-fit md:max-w-[calc(100%-65px)] ${className}`}
    >
      <div
        className='relative md:mx-[104px] overflow-hidden max-w-[1300px]'
        ref={emblaRef}
      >
        <div className='flex items-center bg-grey-900 gap-1 embla__container'>
          {partners.map((data, index) => (
            <div className='flex-none embla__slide' key={index}>
              <img
                className='object-cover rounded-lg mx-2 w-[40px] h-[40px]'
                src={data.image}
                alt={data.alt}
              />
            </div>
          ))}
        </div>
        <div className='hidden sm:block absolute top-0 w-full h-full bg-gradient-to-r from-grey-900 from-0% via-transparent via-10%' />
        <div className='hidden sm:block absolute top-0 w-full h-full bg-gradient-to-l from-grey-900 from-0% via-transparent via-10%' />
      </div>
    </div>
  )
}
