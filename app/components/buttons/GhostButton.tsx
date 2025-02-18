'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export const GhostButton = ({
  text,
  onClick,
  href,
  icon,
  className,
  animation = true
}: {
  text: string
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
  className?: string
  animation?: boolean
}) => {
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      if (href.includes('bridge')) window.open(href, '_self')

      if (href.startsWith('http')) window.open(href, '_blank')
      else router.push(href)
    } else if (onClick) {
      onClick()
    }
  }
  return (
    <button
      onClick={handleClick}
      className={`relative px-5 py-2.5 bg-[#1B1B1B] shadow-[0px_0px_6px_0px_rgba(51,232,142,0.40)] 
        rounded-3xl cursor-pointer overflow-hidden group ${className} text-newGreen`}
      role='button'
    >
      <div className='flex justify-center gap-2'>
        <span className='relative z-10 text-lg font-semibold'>{text}</span>
        {icon}
      </div>
      {animation && (
        <span className='absolute inset-0 border-2 border-newGreen rounded-3xl opacity-0 group-hover:animate-circling'></span>
      )}
    </button>
  )
}
