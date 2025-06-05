import React, { useRef, useEffect } from 'react'
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
  selectedStrategy,
  currentStep,
  setCurrentStep
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

  const viewportRef = useRef<HTMLDivElement | null>(null)
  const slideRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const root = viewportRef.current
    if (!root) return

    const io = new IntersectionObserver(
      entries => {
        // pick the entry with the greatest visibility that is intersecting
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible) return

        const index = slideRefs.current.findIndex(el => el === visible.target)
        const step = selectedStrategy.tutorials[index]?.step
        if (step && step !== currentStep) setCurrentStep(step)
      },
      {
        root, // observe relative to the scroll viewport
        threshold: 0.6 // “in view” means at least 60 % visible
      }
    )

    slideRefs.current.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [
    selectedStrategyId,
    selectedStrategy.tutorials,
    currentStep,
    setCurrentStep
  ])

  return (
    <div
      className={`border ${TABLE_BORDER_COLOR} rounded-xl w-full h-full block md:hidden`}
    >
      {/* title */}
      <div
        className={`flex items-center py-3 px-4 border-b ${TABLE_BORDER_COLOR}`}
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
      <div
        className={`relative w-full aspect-[4/3] border-b ${TABLE_BORDER_COLOR}`}
      >
        {selectedStrategy.tutorials.map(t => (
          <img
            key={t.step}
            src={t.image}
            alt={t.title}
            loading='lazy'
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-opacity duration-300
              ${t.step === currentStep ? 'opacity-100' : 'opacity-0'}
            `}
          />
        ))}
      </div>
      {/* tutorial steps */}
      <div
        ref={viewportRef}
        key={selectedStrategyId}
        className={`px-3 py-3 flex gap-2 overflow-x-auto snap-x snap-mandatory scroll-pl-3 border-b ${TABLE_BORDER_COLOR}`}
      >
        {selectedStrategy.tutorials.map((tutorial, index) => (
          <div
            ref={el => {
              if (el) {
                slideRefs.current[index] = el // add on mount
              } else {
                delete slideRefs.current[index] // remove on unmount
              }
            }}
            className='w-[96%] shrink-0 snap-start'
            key={tutorial.title}
          >
            <TutorialStepCard currentStep={currentStep} {...tutorial} />
          </div>
        ))}
      </div>
      {/* projects */}
      <div className={`flex items-center justify-between py-3 px-6`}>
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
                className='w-6 h-6 rounded-[4px]'
                src={p.icon}
                alt='project image'
              />
            </Link>
          ))}
        </div>
      </div>
      {/* earning */}
      {/* hide this for now */}
      {/* <div className={`flex items-center justify-between py-3 px-6`}>
        <p className='font-semibold text-grey-100'>Earning Potential</p>
        <p className='font-semibold text-neonGreen-500'>
          {selectedStrategy.earning}
        </p>
      </div> */}
    </div>
  )
}
