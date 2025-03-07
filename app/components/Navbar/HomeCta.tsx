import React from 'react'
import Link from 'next/link'

export const HomeCta = () => {
  return (
    <div
      className="flex flex-col flex-wrap w-full gap-5 mx-auto items-center justify-center
        px-2 pt-4 pb-2 rounded-3xl bg-[url('/CTA-Mobile.png')] bg-cover"
    >
      <div className='flex-grow text-center text-black max-w-[560px]'>
        <h2 className='text-lg font-bold -tracking-[0.36px]'>
          Ready to get Started?
        </h2>
        <p className='text-xs max-w-[600px] -tracking-[0.24px] mt-2'>
          Useful resources to get started <br /> building on Etherlink
        </p>
      </div>

      <button
        className={`relative px-6 py-2.5 bg-black text-grey-100 shadow-[0px_0px_6px_0px_rgba(255,255,255,0.40)]
            rounded-3xl cursor-pointer overflow-hidden group w-full`}
        role='button'
      >
        <div className='flex justify-center gap-2'>
          <span className='relative z-10 text-sm font-bold'>
            Start Building
          </span>
        </div>
        <a
          href='https://docs.etherlink.com/'
          rel='noopener noreferrer'
          className='absolute inset-0'
        />
        <span className='absolute inset-0 border-2 border-white rounded-3xl opacity-0 group-hover:animate-circling'></span>
      </button>
    </div>
  )
}
