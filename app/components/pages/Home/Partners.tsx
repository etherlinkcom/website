'use client'
import React from 'react'
import { PARTNERS } from './constants'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoscroll from 'embla-carousel-auto-scroll'

export const Partners = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoscroll({})])

  return (
    <div className='relative flex flex-col items-center my-20'>
      <h1 className='text-white font-bold text-4xl md:text-6xl text-center mb-10'>
        Join the <span className='text-newGreen'>others building</span> on
        Etherlink
      </h1>

      <div className='max-w-7xl overflow-hidden' ref={emblaRef}>
        <div className='flex items-center bg-neutral  embla__container'>
          {PARTNERS.map((data, index) => (
            <div className={`flex-none mx-4 embla__slide`} key={index}>
              <Image
                draggable={false}
                className='md:w-64'
                width={150}
                height={100}
                src={data.image}
                alt={data.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
