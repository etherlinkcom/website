import React from 'react'
import { ArrowButton } from '../components/buttons/ArrowButton'

export const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mx-auto px-8
        bg-[url('/img/ecosystem/hero-bg.svg')] bg-no-repeat bg-cover bg-top pt-[100px] pb-[80px] -translate-y-20"
    >
      <h1 className='text-4xl md:text-5xl font-bold mb-4 text-center'>
        <span className='text-newGreen'>Etherlink</span> ecosystem
      </h1>
      <p className='text-base md:text-lg text-center font-normal max-w-2xl mb-8'>
        Discover apps and integrations in the Etherlink ecosystem across NFTs,
        Gaming, Defi, DAOs and more.
      </p>
      <div className='flex flex-col md:flex-row gap-3'>
        <ArrowButton
          text='Submit a Project'
          link='https://tt-tezos.typeform.com/to/Z48NYwJr'
          className='bg-newGreen hover:bg-lightGreen text-black text-base font-semibold px-7 py-3 min-w-[200px]'
          arrowWidth={12}
        />
        <ArrowButton
          text='Learn more'
          link='https://docs.etherlink.com/'
          className='bg-transparent hover:bg- border border-white text-white text-base font-semibold px-7 py-3 min-w-[200px]'
          arrowWidth={12}
          arrowColor='white'
        />
      </div>
    </div>
  )
}
