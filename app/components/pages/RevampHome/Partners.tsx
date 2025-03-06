'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoscroll from 'embla-carousel-auto-scroll'
import { PARTNERS } from './fixture'
import Link from 'next/link'

export const Partners = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    Autoscroll({ stopOnInteraction: false })
  ])

  return (
    <Link href='/ecosystem'>
      <div className='relative flex flex-col items-center mb-[60px] md:mb-[100px] z-10'>
        <GraditentLine className='top-0' />
        <GraditentLine className='bottom-0' />
        <div
          className='relative py-10 md:mx-[104px] overflow-hidden max-w-[1300px]'
          ref={emblaRef}
        >
          <div className='flex items-center bg-neutral gap-1 embla__container'>
            {PARTNERS.map((data, index) => (
              <div className='flex-none embla__slide' key={index}>
                <img
                  className='object-contain rounded-lg mx-2 w-12 h-12'
                  src={data.image}
                  alt={data.alt}
                />
              </div>
            ))}
          </div>
          <div className='hidden sm:block absolute top-0 w-full h-full bg-gradient-to-r from-[#171717] from-0% via-transparent via-10%' />
          <div className='hidden sm:block absolute top-0 w-full h-full bg-gradient-to-l from-[#171717] from-0% via-transparent via-10%' />
        </div>
      </div>
    </Link>
  )
}

const GraditentLine = ({ className }: { className?: string }) => {
  return (
    <div
      className={`absolute max-w-[1300px] w-[80%] h-0.5 rounded-lg opacity-60 ${className}`}
    >
      <div className='w-full h-full bg-gradient-to-r from-[#38FF9C00] from-10% via-[#35ec91] via-38% to-[#38FF9C00] to-100%'></div>
    </div>
  )
}
