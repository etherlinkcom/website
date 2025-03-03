import React from 'react'
import Link from 'next/link'

export const Cta = ({
  title,
  desc,
  btn
}: {
  title: string
  desc: string
  btn: {
    text: string
    link: string
  }
}) => {
  return (
    <div
      className="flex flex-col w-full gap-6 mx-auto items-center px-12 py-10
            lg:flex-nowrap rounded-[32px] bg-[url('/CTA-Mobile.png')] md:bg-[url('/CTA-bg.png')] bg-cover"
    >
      <div className='flex-grow text-center text-grey-900'>
        <h2 className='text-2xl font-semibold -tracking-[0.48px]'>{title}</h2>
        <p className='mt-2 font-light leading-[24px]'>{desc}</p>
      </div>

      <button
        className={`relative px-5 py-2.5 bg-[#1B1B1B] shadow-[0px_0px_6px_0px_rgba(51,232,142,0.40)] 
            rounded-3xl cursor-pointer overflow-hidden group w-full`}
        role='button'
      >
        <Link href='https://discord.com/invite/etherlink' target='_blank'>
          <div className='flex justify-center items-center gap-2'>
            <img src='/img/icons/green-discord.svg' alt='discord icon' />
            <span className='relative z-10 text-lg font-semibold text-neonGreen-200'>
              Join our Discord
            </span>
            <img src='/img/icons/green-discord.svg' alt='discord icon' />
          </div>
          <span className='absolute inset-0 border-2 border-newGreen rounded-3xl opacity-0 group-hover:animate-circling'></span>
        </Link>
      </button>
    </div>
  )
}
