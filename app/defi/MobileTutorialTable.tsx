import React from 'react'
import {
  STRATEGIES,
  FAKE_IMAGES,
  TABLE_BORDER_COLOR,
  StrategyPill,
  TutorialStepCard
} from './Tutorials'

export const MobileTutorialTable = () => {
  return (
    <div
      className={`border ${TABLE_BORDER_COLOR} rounded-xl w-full h-full block md:hidden`}
    >
      {/* title */}
      <div
        className={`flex items-center py-3 px-6 border-b ${TABLE_BORDER_COLOR}`}
      >
        <div className='flex items-center gap-2 hover:cursor-pointer z-10 overflow-auto'>
          {STRATEGIES.map(strategy => (
            <StrategyPill key={strategy} strategy={strategy} />
          ))}
        </div>
      </div>
      {/* image */}
      <div>
        <img className='' src='/img/defi/stepCard.jpg' alt='card' />
      </div>
      {/* tutorial steps */}
      <div className={`p-3 border-b ${TABLE_BORDER_COLOR}`}>
        <TutorialStepCard />
      </div>
      {/* projects */}
      <div
        className={`flex items-center justify-between py-3 px-6 border-b ${TABLE_BORDER_COLOR}`}
      >
        <p className='font-semibold text-grey-100'>Projects</p>
        <div className='flex items-center gap-1'>
          <img className='h-6' src='/img/defi/p-mobile.jpg' alt='icons' />
          <img src='/img/defi/chevron-down.svg' alt='arrow icon' />
        </div>
      </div>
      {/* earning */}
      <div className={`flex items-center justify-between py-3 px-6`}>
        <p className='font-semibold text-grey-100'>Earning Potential</p>
        <p className='font-semibold text-neonGreen-500'>310% APR</p>
      </div>
    </div>
  )
}
