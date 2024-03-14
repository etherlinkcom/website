'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Container from './container'

export default function Cta({
  headerText,
  descriptionText,
  buttonText,
  buttonUrl
}: {
  headerText: string
  descriptionText: string
  buttonText: string
  buttonUrl: string
}) {
  return (
    <div
      className="flex flex-wrap items-center justify-between w-full max-w-6xl md-10 md:mt-24 mb-2 gap-5 mx-auto 
        px-7 py-10 md:py-7 lg:px-12 lg:py-20 lg:flex-nowrap rounded-xl bg-[url('/img/home/bg-cta.png')]"
    >
      <div className='flex-grow text-left text-black'>
        <h2 className='text-3xl md:text-3xl font-bold lg:text-5xl'>
          {headerText}
        </h2>
        <p className='mt-2 md:mt-4 font-light text-xl'>{descriptionText}</p>
      </div>
      <div className='w-full md:w-auto'>
        <Button text={buttonText} link={buttonUrl} />
      </div>
    </div>
  )
}

export const Button = ({ text, link }: { text: string; link: string }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Link href={link} target={link?.startsWith('http') ? '_blank' : '_self'}>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className='flex items-center justify-center gap-2 bg-black text-newGreen text-xl md:text-2xl font-semibold px-7 md:px-14 py-3 md:py-5 rounded-xl w-full'
      >
        {text}
        <div
          className={
            isHover
              ? 'rotate-45 ease-in-out duration-200'
              : 'ease-in-out duration-200'
          }
        >
          <svg
            width='16'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              id='Vector 1'
              d='M0.451864 16.8715C-0.158661 17.482 -0.155467 18.4687 0.458998 19.0752C1.07346 19.6818 2.06652 19.6786 2.67704 19.0681L0.451864 16.8715ZM19.0514 2.04627C19.0486 1.18567 18.3442 0.490283 17.478 0.493087L3.36241 0.538782C2.49621 0.541586 1.79628 1.24152 1.79907 2.10212C1.80185 2.96272 2.5063 3.65811 3.3725 3.6553L15.9197 3.61469L15.96 16.0808C15.9628 16.9414 16.6672 17.6368 17.5334 17.634C18.3996 17.6312 19.0996 16.9312 19.0968 16.0706L19.0514 2.04627ZM2.67704 19.0681L18.5956 3.14962L16.3704 0.953081L0.451864 16.8715L2.67704 19.0681Z'
              fill='#38FF9C'
            />
          </svg>
        </div>
      </button>
    </Link>
  )
}
