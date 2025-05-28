import React from 'react'
import { PrimaryButton } from '../components/buttons/PrimaryButton'

export const Cta = () => {
  return (
    <div
      className='relative flex flex-col md:flex-row flex-wrap w-full gap-5 mx-auto md:items-center justify-between
            pt-16 px-12 pb-14 lg:flex-nowrap rounded-xl bg-[linear-gradient(225deg,_#262626_7.3%,_#101010_87.03%)]'
    >
      <img
        className='absolute top-0 right-0  rounded-tr-xl'
        src='/img/ecosystem/Banner SVG top.svg'
        alt='bg img'
      />
      <div className='text-left'>
        <h2 className='text-white-50 text-[35px] font-bold -tracking-[0.7px]'>
          Make money with DeFi on Etherlink
        </h2>
        <p className='text-lg -tracking-[0.36px] text-grey-50'>
          Grow your portfolio with simple DeFi strategies for every risk level.
        </p>
      </div>

      <PrimaryButton
        className='text-grey-700 hover:bg-newGreen flex-shrink-0'
        text='Learn more'
        href='/defi'
      />
      <img
        className='absolute bottom-0 left-0'
        src='/img/ecosystem/Banner SVG bottom.svg'
        alt='bg img'
      />
    </div>
  )
}
