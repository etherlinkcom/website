import React from 'react'

export const SectionBgGradient = ({ className }: { className?: string }) => {
  return (
    <div className='relative z-0'>
      <img
        src='/img/home/gradient-bg.svg'
        className={`block absolute left-1/2 -translate-x-1/2 opacity-[0.7] z-0
        object-contain w-ful md:w-[1300px] md:h-[1000px] -top-20 sm:-top-40 md:-top-96 ${className}`}
        alt='gradient bg'
        draggable={false}
      />
    </div>
  )
}
