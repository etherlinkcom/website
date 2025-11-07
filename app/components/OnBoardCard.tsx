import React from 'react'
import Link from 'next/link'
import { EventProps, trackPostHog } from '../../utils/trackPostHog'

export interface OnBoardCardProps {
  org: string
  title: string
  description: string
  link: string
  image: string
  event: EventProps
}

export const OnBoardCard = ({
  org,
  title,
  description,
  link,
  image,
  event
}: OnBoardCardProps) => {
  return (
    <Link 
      href={link}
      target={link.includes('bridge') ? '_self' : '_blank'}
      onClick={() => trackPostHog(event.name)}
    >
      <div className='border border-black-400 h-full rounded-lg hover:border-neonGreen-900 group hover:cursor-pointer flex flex-col'>
        <div className='rounded-t-lg'>
          <img className='rounded-t-lg' src={image} alt='card' />
        </div>
        <div className='flex flex-col flex-grow p-6 bg-grey-700 group-hover:bg-grey-500 rounded-b-lg'>
          <div className='flex justify-between mb-1'>
            <p className='text-grey-50 text-xs font-light uppercase'>{org}</p>
            <img src='/img/defi/greenArrow.svg' alt='arrow' />
          </div>
          <p className='text-2xl text-neonGreen-500 font-semibold mb-2'>
            {title}
          </p>
          <p className='text-grey-200'>{description}</p>
        </div>
      </div>
    </Link>
  )
}
