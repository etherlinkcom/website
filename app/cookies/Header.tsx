import React from 'react'

export const Header = ({ text }: { text: string }) => {
  return (
    <p className='text-neonGreen-500 text-[24px] font-semibold leading-[32px] -tracking-[0.48px] mb-6 md:mb-8'>
      {text}
    </p>
  )
}
