import React from 'react'

export const ArrowRightIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='#38ff9c'
      xmlns='http://www.w3.org/2000/svg'
      className={`shadow-[0px_0px_6px_0px_rgba(56,255,156,0.40)] backdrop-blur-md rounded p-[6px] h-8 w-8 ${className}`}
    >
      <g id='HiArrowRight'>
        <path
          id='Vector'
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M8.2345 2.63267C8.38452 2.48269 8.58797 2.39844 8.8001 2.39844C9.01223 2.39844 9.21568 2.48269 9.3657 2.63267L14.1657 7.43267C14.3157 7.58269 14.3999 7.78614 14.3999 7.99827C14.3999 8.2104 14.3157 8.41384 14.1657 8.56387L9.3657 13.3639C9.21482 13.5096 9.01273 13.5902 8.80298 13.5884C8.59322 13.5866 8.39257 13.5024 8.24424 13.3541C8.09592 13.2058 8.01178 13.0051 8.00996 12.7954C8.00814 12.5856 8.08877 12.3835 8.2345 12.2327L11.6689 8.79827H2.4001C2.18792 8.79827 1.98444 8.71398 1.83441 8.56395C1.68438 8.41392 1.6001 8.21044 1.6001 7.99827C1.6001 7.78609 1.68438 7.58261 1.83441 7.43258C1.98444 7.28255 2.18792 7.19827 2.4001 7.19827H11.6689L8.2345 3.76387C8.08452 3.61384 8.00027 3.4104 8.00027 3.19827C8.00027 2.98614 8.08452 2.78269 8.2345 2.63267Z'
        />
      </g>
    </svg>
  )
}