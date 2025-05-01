import React from 'react'
import {
  STRATEGIES,
  FAKE_IMAGES,
  TABLE_BORDER_COLOR,
  StrategyPill,
  TutorialStepCard,
  TutorialProps
} from './Tutorials'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons } from './usePrevNextButtons'
import { EmblaNavButton } from './DesktopTutorialTable'

export const MobileTutorialTable = ({
  selectedStrategy,
  setSelectedStrategy
}: TutorialProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    axis: 'x',
    containScroll: false
  })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div
      className={`border ${TABLE_BORDER_COLOR} rounded-xl w-full h-full block md:hidden`}
    >
      {/* title */}
      <div
        className={`flex items-center py-3 px-6 border-b  ${TABLE_BORDER_COLOR}`}
      >
        <EmblaNavButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <div ref={emblaRef} className='embla__viewport overflow-hidden '>
          <div className='flex items-center gap-2 hover:cursor-pointer z-10 embla__container'>
            {STRATEGIES.map(strategy => (
              <div className='embla__slide shrink-0' key={strategy}>
                <StrategyPill
                  strategy={strategy}
                  isSelected={strategy === selectedStrategy}
                  onSelect={() => setSelectedStrategy(strategy)}
                />
              </div>
            ))}
          </div>
        </div>
        <EmblaNavButton
          className='rotate-180'
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>
      {/* image */}
      <div>
        <img className='' src='/img/defi/stepCard.jpg' alt='card' />
      </div>
      {/* tutorial steps */}
      <div
        className={`p-3 flex gap-2 overflow-auto border-b ${TABLE_BORDER_COLOR}`}
      >
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div className='w-[96%] shrink-0' key={index}>
              <TutorialStepCard step={index + 1} />
            </div>
          ))}
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
