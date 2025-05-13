import React from 'react'
import {
  TABLE_BORDER_COLOR,
  StrategyPill,
  TutorialStepCard,
  TutorialProps
} from './Tutorials'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons } from './usePrevNextButtons'
import { EmblaNavButton } from './DesktopTutorialTable'
import { STRATEGIES_DATA } from './fixture'
import Link from 'next/link'

export const MobileTutorialTable = ({
  selectedStrategyId,
  setSelectedStrategyId,
  selectedStrategy
}: TutorialProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    axis: 'x',
    containScroll: 'trimSnaps'
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
        className={`flex items-center py-3 px-6 border-b ${TABLE_BORDER_COLOR}`}
      >
        <EmblaNavButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          isMobile
        />
        <div ref={emblaRef} className='embla__viewport overflow-hidden'>
          <div className='flex items-center gap-2 hover:cursor-pointer z-10 embla__container'>
            {STRATEGIES_DATA.map(strategy => (
              <div className='embla__slide shrink-0' key={strategy.id}>
                <StrategyPill
                  strategy={strategy.name}
                  isSelected={strategy.id === selectedStrategyId}
                  onSelect={() => setSelectedStrategyId(strategy.id)}
                />
              </div>
            ))}
          </div>
        </div>
        <EmblaNavButton
          className='rotate-180'
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          isMobile
        />
      </div>
      {/* image */}
      <div>
        <img className='' src='/img/defi/stepCard.jpg' alt='card' />
      </div>
      {/* tutorial steps */}
      <div
        key={selectedStrategyId}
        className={`p-3 flex gap-2 overflow-auto border-b ${TABLE_BORDER_COLOR}`}
      >
        {selectedStrategy.tutorials.map((tutorial, index) => (
          <div className='w-[96%] shrink-0' key={index}>
            <TutorialStepCard {...tutorial} />
          </div>
        ))}
      </div>
      {/* projects */}
      <div
        className={`flex items-center justify-between py-3 px-6 border-b ${TABLE_BORDER_COLOR}`}
      >
        <p className='font-semibold text-grey-100'>Projects</p>
        {/* hide this for now */}
        {/* <div className='flex items-center gap-1'>
          <img className='h-6' src='/img/defi/p-mobile.jpg' alt='icons' />
          <img src='/img/defi/chevron-down.svg' alt='arrow icon' />
        </div> */}
        <div className={`flex items-center gap-2`}>
          {selectedStrategy.projectInvolved.map(p => (
            <Link href={p.link} target='_blank' key={p.name}>
              <img
                className='w-6 h-6 rounded-lg'
                src={p.icon}
                alt='project image'
              />
            </Link>
          ))}
        </div>
      </div>
      {/* earning */}
      <div className={`flex items-center justify-between py-3 px-6`}>
        <p className='font-semibold text-grey-100'>Earning Potential</p>
        <p className='font-semibold text-neonGreen-500'>
          {selectedStrategy.earning}
        </p>
      </div>
    </div>
  )
}
