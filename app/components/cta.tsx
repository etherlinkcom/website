'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { PrimaryButton } from './buttons/PrimaryButton'
import { GhostButton } from './buttons/GhostButton'

export default function Cta({
  headerText,
  descriptionText,
  primaryButton,
  ghostButton
}: {
  headerText: string
  descriptionText: string
  primaryButton: {
    text: string
    link: string
  }
  ghostButton?: {
    text: string
    link: string
  }
}) {
  return (
    <div
      className="flex flex-col md:flex-row flex-wrap w-full mb-16 gap-5 mx-auto md:items-center justify-between
        px-[28px] pt-[34px] pb-[36px]  md:px-[48px] md:pt-[64px] md:pb-[56px] lg:flex-nowrap rounded-xl bg-[url('/CTA-Mobile.png')] md:bg-[url('/CTA-bg.png')] bg-cover"
    >
      <div className='flex-grow text-left text-black max-w-[560px] lg:w-full'>
        <h2 className='text-[30px] md:text-[55px] font-semibold md:font-bold -tracking-[1.1px]'>
          {headerText}
        </h2>
        <p className='mt-2 md:mt-4 font-light text-lg max-w-[600px] -tracking-[0.46px]'>
          {descriptionText}
        </p>
      </div>
      <div className='flex flex-col md:flex-row gap-6 md:gap-4 h-fit'>
        <PrimaryButton
          className='bg-white text-black hover:bg-newGreen'
          text={primaryButton.text}
          href={primaryButton.link}
          icon={<img src='/img/home/arrow-right.svg' alt='arrow right icon' />}
        />
        {ghostButton && (
          <GhostButton
            icon={<img src='/img/home/bridge-icon.svg' alt='bridge icon' />}
            className=''
            text={ghostButton.text}
            href={ghostButton.link}
          />
        )}
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
        className='flex items-center justify-center gap-2 bg-black text-newGreen text-xl md:text-2xl font-semibold px-7 md:px-14 py-3 md:py-5 rounded-xl'
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
