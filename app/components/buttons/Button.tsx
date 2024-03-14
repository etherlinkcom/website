import React from 'react'
import Link from 'next/link'

export const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link href={link} target={link?.startsWith('http') ? '_blank' : '_self'}>
      <button className='flex items-center justify-center border-2 hover:border-lightGreen bg-transparent hover:bg-lightGreen text-white hover:text-black text-xl md:text-2xl font-semibold px-7 md:px-14 py-3 md:py-5 rounded-xl ease-in-out duration-300 w-full'>
        {text}
      </button>
    </Link>
  )
}
