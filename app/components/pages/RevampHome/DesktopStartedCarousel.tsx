'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Link from 'next/link'
import { isExternalLink } from '../../Navbar'
import useEmblaCarousel from 'embla-carousel-react'
import { FeaturedProject } from '../../../../utils/airtable/homeFeatured'

export const DesktopStartedCarousel = ({
  featuredProjects
}: {
  featuredProjects: FeaturedProject[]
}) => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1
  })

  return (
    <div className='hidden md:flex relative flex-col items-center mb-[60px] md:mb-[100px] w-full'>
      <div className='relative py-10 w-full' ref={emblaRef}>
        <div className='flex items-center gap-x-8 embla__container'>
          {featuredProjects.map((data, index) => (
            <div key={index} className='embla__slide shrink-0 w-full'>
              <FeaturedBox {...data} />
            </div>
          ))}
        </div>
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
}

const FeaturedBox = ({
  Title,
  Description,
  Project_Link,
  Desktop_Image
}: FeaturedBoxProps) => {
  return (
    <div className='h-[420px] rounded-3xl shadow-[0_0_6px_0_rgba(56,255,156,0.4)] hover:border hover:border-neonGreen-500'>
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
            <p className='text-grey-200 '>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {Description}
              </ReactMarkdown>
            </p>
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
