'use client'
import React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoscroll from 'embla-carousel-auto-scroll'
import { ArrowButton } from '../../buttons/ArrowButton'

const PARTNERS = [
  {
    alt: 'blockscout',
    image: '/img/newPartners/blockscout.jpeg'
  },
  {
    alt: 'groupfi',
    image: '/img/newPartners/groupfi.jpeg'
  },
  {
    alt: 'hanji',
    image: '/img/newPartners/hanji.jpeg'
  },
  {
    alt: 'idos',
    image: '/img/newPartners/idos.jpeg'
  },
  {
    alt: 'Layer3',
    image: '/img/newPartners/Layer3.jpeg'
  },
  {
    alt: 'layerZero',
    image: '/img/newPartners/layerZero.jpeg'
  },
  {
    alt: 'pyth',
    image: '/img/newPartners/pyth.jpeg'
  },
  {
    alt: 'redstone',
    image: '/img/newPartners/redstone.png'
  },
  {
    alt: 'theGraph',
    image: '/img/newPartners/theGraph.jpeg'
  },
  {
    alt: 'thirdweb',
    image: '/img/newPartners/thirdweb.jpeg'
  },
  {
    alt: '',
    image: '/img/newPartners/'
  }
]

export const Partners = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoscroll({})])

  return (
    <div className='relative flex flex-col items-center pb-[80px]'>
      <div className='relative overflow-hidden' ref={emblaRef}>
        <div className='flex items-center bg-neutral gap-3 embla__container'>
          {PARTNERS.map((data, index) => (
            <div className='flex-none embla__slide' key={index}>
              <img
                className='object-contain rounded-lg w-12 h-12'
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
