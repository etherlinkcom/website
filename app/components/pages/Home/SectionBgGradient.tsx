import React from 'react'
import Image from 'next/image'

export const SectionBgGradient = ({ className }: { className?: string }) => {
  return (
    <Image
      src='/img/home/gradient.svg'
      className={`block absolute left-1/2 -translate-x-1/2 
        object-cover md:w-[500px] md:h-[500px] -top-20 md:-top-28 ${className}`}
      alt='gradient bg'
      width={100}
      height={100}
    />
  )
}
