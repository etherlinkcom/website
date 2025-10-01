'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export const PrimaryButton = ({
  text,
  onClick,
  href,
  icon,
  className,
  newTab
}: {
  text: string
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
  className?: string
  newTab?: boolean
}) => {
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      if (newTab) window.open(href, '_blank')
      else if (href.includes('etherlink.com')) window.open(href, '_self')

      if (href.startsWith('http')) window.open(href, '_blank')
      else router.push(href)
    }
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`relative px-5 py-2.5 bg-newGreen shadow-[0px_0px_6px_0px_rgba(255,255,255,0.40)] 
        rounded-3xl cursor-pointer overflow-hidden group ${className}`}
      role='button'
    >
      <div className='flex justify-center gap-2'>
        <span className='relative z-10 text-lg text-lightBlack font-semibold'>
          {text}
        </span>
        {icon}
      </div>
      <span className='absolute inset-0 border-2 border-white-50 rounded-3xl opacity-0 group-hover:animate-circling'></span>
    </button>
  )
}
