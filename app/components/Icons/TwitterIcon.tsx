import React from 'react'

export const TwitterIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='#38ff9c'
      xmlns='http://www.w3.org/2000/svg'
      className={`shadow-[0px_0px_6px_0px_rgba(56,255,156,0.40)] backdrop-blur-md rounded p-[6px] h-8 w-8 ${className}`}
    >
      <g id='X'>
        <path
          id='Vector'
          d='M13.5222 10.7749L19.4785 4H18.0671L12.8952 9.88256L8.76437 4H4L10.2466 12.8955L4 20H5.41155L10.8732 13.7878L15.2356 20H20L13.5218 10.7749H13.5222ZM11.5889 12.9738L10.956 12.0881L5.92015 5.03974H8.0882L12.1522 10.728L12.7851 11.6137L18.0677 19.0075H15.8997L11.5889 12.9742V12.9738Z'
        />
      </g>
    </svg>
  )
}