'use client'

import React, { useRef } from 'react'
import {
  STRATEGIES,
  FAKE_IMAGES,
  TABLE_BORDER_COLOR,
  StrategyPill,
  TutorialStepCard
} from './Tutorials'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons } from './usePrevNextButtons'

export const DesktopTutorialTable = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    axis: 'x',
    containScroll: false
  })
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const slideRef = useRef<HTMLDivElement | null>(null)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div
      className={`border ${TABLE_BORDER_COLOR} rounded-xl w-full h-full hidden md:block`}
    >
      {/* titles */}
      <div
        className={`flex items-center gap-6 py-3 px-6 border-b ${TABLE_BORDER_COLOR}`}
      >
        <p className='text-grey-100 text-lg font-semibold'>Strategies</p>
        <div className='flex items-center gap-2 hover:cursor-pointer z-10'>
          {STRATEGIES.map(strategy => (
            <StrategyPill key={strategy} strategy={strategy} />
          ))}
        </div>
      </div>
      {/* body */}
      <div className='flex'>
        {/* left */}
        <div className={`max-w-[440px] w-full border-r ${TABLE_BORDER_COLOR}`}>
          {/* tutorials title */}
          <div
            className={`flex justify-between items-center py-2 px-3 border-b ${TABLE_BORDER_COLOR}`}
          >
            <p className='text-grey-100 font-semibold pl-3'>Tutorial Steps</p>
            <div className='flex items-center'>
              <img
                className='px-3 py-2 hover:cursor-pointer'
                src='/img/defi/FiArrowLeft.svg'
                alt='arrow icon'
                onClick={onPrevButtonClick}
              />
              <img
                className='px-3 py-2 hover:cursor-pointer'
                src='/img/defi/FiArrowRight.svg'
                alt='arrow icon'
                onClick={onNextButtonClick}
              />
            </div>
          </div>
          {/* tutorials steps */}
          <div
            ref={emblaRef}
            className={`p-3 h-[300px] border-b embla__viewport overflow-hidden ${TABLE_BORDER_COLOR}`}
          >
            <div className='flex gap-4 embla__container'>
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    ref={index === 0 ? slideRef : null}
                    key={index}
                    className='embla__slide shrink-0 w-full z-0'
                  >
                    <TutorialStepCard step={index + 1} />
                  </div>
                ))}
            </div>
          </div>
          {/* details */}
          {/* 1st row */}
          <div className={`flex border-b ${TABLE_BORDER_COLOR}`}>
            <div className={`px-6 py-2 border-r ${TABLE_BORDER_COLOR} w-1/2`}>
              <p className='font-semibold text-grey-100'>Projects involved</p>
            </div>
            <div className='px-6 py-2 w-1/2'>
              <p className='font-semibold text-grey-100'>Earning Potential</p>
            </div>
          </div>
          {/* 2nd row */}
          <div className={`flex`}>
            <div
              className={`flex items-center gap-2 px-6 py-2 border-r ${TABLE_BORDER_COLOR} w-1/2`}
            >
              {FAKE_IMAGES.map((image, index) => (
                <img
                  key={index}
                  className='w-6 h-6 rounded-lg'
                  src={image}
                  alt='project image'
                />
              ))}
            </div>
            <div className='px-6 py-2 w-1/2'>
              <p className='font-semibold text-neonGreen-500'>310% APR</p>
            </div>
          </div>
        </div>
        {/* right image */}
        <div className='flex justify-center items-center '>
          <img
            className='object-contain'
            src='/img/defi/stepCard.jpg'
            alt='card'
          />
        </div>
      </div>
    </div>
  )
}
