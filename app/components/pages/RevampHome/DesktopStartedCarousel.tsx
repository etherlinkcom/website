'use client'

import React from 'react'
import { STARTED_BOXES } from './fixture'
import { StartedBoxProps } from './MobileStartedCarousel'
import Link from 'next/link'
import { isExternalLink } from '../../Navbar'
import useEmblaCarousel from 'embla-carousel-react'

export const DesktopStartedCarousel = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1
  })

  return (
    <div className='none md:block relative flex flex-col items-center mb-[60px] md:mb-[100px] w-full'>
      <div className='relative py-10 w-full' ref={emblaRef}>
        <div className='flex items-center gap-x-8 embla__container'>
          {STARTED_BOXES.map((data, index) => (
            <div key={index} className='embla__slide shrink-0 w-full'>
              <PanelBox {...data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const PanelBox = ({
  topLine,
  title,
  desc,
  link,
  desktopImg
}: StartedBoxProps) => {
  return (
    <div className='h-[350px] rounded-3xl shadow-[0_0_6px_0_rgba(56,255,156,0.4)]'>
      <Link href={link} target={isExternalLink(link)}>
        <div className='relative h-full w-full'>
          <div
            className='absolute rounded-l-3xl bg-[rgba(27,27,27,0.85)] backdrop-blur-[12px]
             left-0 h-full flex flex-col justify-between p-6 z-10'
          >
            <div>
              <p className='text-grey-50 text-xs font-light mb-2'>{topLine}</p>
              <p className='text-neonGreen-500 font-semibold text-[23px]'>
                {title}
              </p>
            </div>
            <p className='text-grey-200'>{desc}</p>
          </div>
          <img
            className='absolute right-0 object-cover h-full w-full z-0 rounded-3xl'
            src={desktopImg}
            alt='bg img'
          />
        </div>
      </Link>
    </div>
  )
}
