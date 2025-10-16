import React from 'react'
import Link from 'next/link'

type Image = {
  src: string
  alt: string
  link?: string
  tooltip?: string
}

interface HeroCardProps {
  title: string
  images: Image[]
}

export const HeroCard = ({ title, images }: HeroCardProps) => {
  return (
    <div className='flex flex-col flex-1 gap-4 p-6 rounded-3xl border border-black-400 bg-grey-700 backdrop-blur-[6px]'>
      <p className='text-xs font-light white-500'>{title}</p>
      <div className='flex items-center gap-3'>
        {images.map(img => {
          const ImgEl = (
            <img src={img.src} alt={img.alt} className='w-auto h-8' />
          )

          return (
            <div key={img.alt} className='relative group'>
              {img.link ? (
                <Link href={img.link} target='_blank'>
                  {ImgEl}
                </Link>
              ) : (
                ImgEl
              )}

              {img.tooltip && (
                <div className='absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block whitespace-nowrap bg-grey-500 text-white text-xs rounded-md px-2 py-1 z-20'>
                  {img.tooltip}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
