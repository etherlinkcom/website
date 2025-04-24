'use client'
import React from 'react'
import { PARTNERS } from './constants'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoscroll from 'embla-carousel-auto-scroll'
import { ArrowButton } from '../../buttons/ArrowButton'

export const Partners = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoscroll({})])

  return (
    <div
      className="relative flex flex-col items-center
        bg-[url('/img/ecosystem/hero-bg.svg')] bg-no-repeat 
        bg-cover bg-top pb-[80px]"
    >
      <h1 className='text-white-50 font-bold text-3xl md:text-5xl text-center mb-4'>
        Explore the <span className='text-newGreen'>ecosystem</span>
      </h1>
      <p className='text-base md:text-lg text-gray-300 text-center px-8 mb-8'>
        Discover what industry-leading teams are building on Etherlink and list
        your project
      </p>

      <ArrowButton
        text='View Ecosystem'
        link='/ecosystem'
        className='bg-newGreen hover:bg-lightGreen text-black text-base font-semibold px-7 py-3 min-w-[200px] mb-16'
        arrowWidth={12}
      />

      <div className='relative max-w-7xl overflow-hidden' ref={emblaRef}>
        <div className='flex items-center bg-neutral  embla__container'>
          {PARTNERS.map((data, index) => (
            <div className='flex-none mx-4 embla__slide' key={index}>
              <Image
                draggable={false}
                width={200}
                height={100}
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
  )
}
