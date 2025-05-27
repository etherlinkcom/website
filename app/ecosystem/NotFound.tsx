import React from 'react'
import Container from '../components/container'

export const NotFound = ({ search }: { search: string }) => {
  return (
    <Container className='relative max-w-[768px] mx-auto text-center mt-24'>
      <div className='relative flex justify-center mb-6 z-0'>
        <img
          src='/img/home/gradient-bg.svg'
          className='absolute inset-0 -translate-y-[100px] object-cover pointer-events-none'
          alt='gradient bg'
          draggable={false}
        />
        <img
          className='object-contain'
          src='/img/ecosystem/Etherlink-Globe 1.png'
          alt='globe'
          draggable={false}
        />
      </div>
      <p className='text-white-50 text-[23px] md:text-[35px] font-bold md:-tracking-[0.7px] mb-3 md:mb-4'>
        No results for "{search}"
      </p>
      <p className='text-grey-300 text-lg md:text-[23px] md:-tracking-[0.46px] '>
        Try searching for another term.
      </p>
    </Container>
  )
}
