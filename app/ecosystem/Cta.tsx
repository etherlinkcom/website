import React from 'react'
import { PrimaryButton } from '../components/buttons/PrimaryButton'

export const Cta = () => {
  return (
    <div
      className='flex flex-col md:flex-row flex-wrap w-full gap-5 mx-auto md:items-center justify-between
            pt-16 px-12 pb-14 lg:flex-nowrap rounded-xl  bg-[linear-gradient(225deg,_#262626_7.3%,_#101010_87.03%)]'
    >
      <div className='flex-grow text-left'>
        <h2 className='text-white-50 text-[35px] font-bold -tracking-[0.7px]'>
          Tools for every stage of development
        </h2>
        <p className='text-lg -tracking-[0.36px] text-grey-50'>
          Start building on etherlink
        </p>
      </div>

      <PrimaryButton
        className='text-grey-700 hover:bg-newGreen'
        text='Learn more'
        href=''
        icon={<img src='/img/ecosystem/snake.svg' alt='icon' />}
      />
    </div>
  )
}
