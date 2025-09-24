import React from 'react'
import Link from 'next/link'

type Image = {
  src: string
  alt: string
  link?: string
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
        {images.map(img =>
          img.link ? (
            <Link href={img.link} target='_blank' key={img.alt}>
              <img src={img.src} alt={img.alt} />
            </Link>
          ) : (
            <img src={img.src} alt={img.alt} key={img.alt} />
          )
        )}
      </div>
    </div>
  )
}
