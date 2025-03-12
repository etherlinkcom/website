'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Link from 'next/link'
import { isExternalLink } from '../../Navbar'
import useEmblaCarousel from 'embla-carousel-react'
import { FeaturedProject } from '../../../../utils/airtable/homeFeatured'
import styles from './featuredSection.module.css'
import { usePrevNextButtons } from './usePrevNextButtons'
import { DotButton } from './EmblaDots'
import { EmblaNavButton } from './EmblaNavButton'

export const DesktopStartedCarousel = ({
  featuredProjects
}: {
  featuredProjects: FeaturedProject[]
}) => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    axis: 'x',
    containScroll: false
  })

  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const slideRef = useRef<HTMLDivElement | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const scrollSnaps = featuredProjects.map((_, index) => index)

  const trackScrollPosition = useCallback(() => {
    if (!scrollContainerRef.current || !slideRef.current) return

    const { scrollLeft } = scrollContainerRef.current
    const slideWidth = slideRef.current?.offsetWidth
    const newIndex = Math.round(scrollLeft / slideWidth)

    setSelectedIndex(newIndex)
  }, [])

  useEffect(() => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current

    container.addEventListener('scroll', trackScrollPosition)
    return () => container.removeEventListener('scroll', trackScrollPosition)
  }, [trackScrollPosition])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(scrollContainerRef, slideRef)

  return (
    <div className='relative hidden md:flex flex-col items-center mb-[60px] md:mb-[100px] w-full z-10'>
      <div
        className={`relative pt-10 px-1 pb-5 w-full overflow-auto scrollbar-none overscroll-container z-10 ${styles.overscrollContainer}`}
        ref={node => {
          emblaRef(node)
          scrollContainerRef.current = node
        }}
      >
        <div className='flex items-center gap-x-8 embla__container'>
          {featuredProjects.map((data, index) => (
            <div
              ref={index === 0 ? slideRef : null}
              key={index}
              className='embla__slide shrink-0 w-full z-10'
            >
              <FeaturedBox isFirstSlide={index === 0} {...data} />
            </div>
          ))}
        </div>
      </div>

      <div className='absolute top-1/2 w-[calc(100%+100px)] lg:w-[calc(100%+130px)] z-0'>
        <div className='flex justify-between items-cenetr embla__buttons'>
          <EmblaNavButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <EmblaNavButton
            className='rotate-180'
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>

      <div className='embla__dots flex justify-center items-center gap-2'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            isSelected={index === selectedIndex}
            onClick={() => {
              if (!scrollContainerRef.current || !slideRef.current) return
              const slideWidth = slideRef.current.offsetWidth + 32 // Account for gap
              scrollContainerRef.current.scrollTo({
                left: index * slideWidth,
                behavior: 'smooth'
              })
            }}
          />
        ))}
      </div>
    </div>
  )
}

export interface FeaturedBoxProps {
  Title: string
  Description: string
  Short_Description: string
  Project_Link: string
  Desktop_Image: Array<{
    id: string
    url: string
    filename: string
    size: number
    type: string
  }>
  Mobile_Image: Array<{
    id: string
    url: string
    filename: string
    size: number
    type: string
  }>
  isFirstSlide?: boolean
}

const FeaturedBox = ({
  Title,
  Description,
  Project_Link,
  Desktop_Image,
  isFirstSlide
}: FeaturedBoxProps) => {
  return (
    <div
      className={`h-[400px] rounded-3xl shadow-[0_0_6px_0_rgba(56,255,156,0.4)] border border-transparent 
        hover:border hover:border-neonGreen-500 z-10 ${isFirstSlide ? '' : 'w-[calc(100%-2px)]'}`}
    >
      <Link href={Project_Link} target={isExternalLink(Project_Link)}>
        <div className='relative h-full w-full'>
          <div
            className='absolute rounded-l-3xl bg-[rgba(27,27,27,0.85)] backdrop-blur-[12px]
             left-0 h-full flex flex-col justify-between p-6 z-10 max-w-[400px]'
          >
            <div>
              <p className='text-grey-50 text-xs font-light mb-2'>FEATURED</p>
              <p className='text-neonGreen-500 font-semibold text-[23px]'>
                {Title}
              </p>
            </div>
            <span className='text-grey-200'>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {Description}
              </ReactMarkdown>
            </span>
          </div>
          <img
            className='absolute right-0 object-cover h-full w-full z-0 rounded-3xl'
            src={Desktop_Image[0].url}
            alt='bg img'
          />
        </div>
      </Link>
    </div>
  )
}
