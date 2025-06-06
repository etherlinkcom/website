import React, { useEffect, useRef } from 'react'
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
  const pillsContainerRef = useRef<HTMLDivElement | null>(null)
  const pillRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const idx = STRATEGIES_DATA.findIndex(s => s.id === selectedStrategyId)
    const pillEl = pillRefs.current[idx]
    if (pillEl) {
      pillEl.scrollIntoView({
        behavior: 'smooth',
        inline: 'nearest',
        block: 'nearest'
      })
    }
  }, [selectedStrategyId])

  const [tutorialsRef, tutorialsApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    axis: 'x',
    containScroll: 'trimSnaps'
  })

  const {
    prevBtnDisabled: stepsPrevDisabled,
    nextBtnDisabled: stepsNextDisabled,
    onPrevButtonClick: onStepsPrev,
    onNextButtonClick: onStepsNext
  } = usePrevNextButtons(tutorialsApi)

  const currentStrategyIndex = STRATEGIES_DATA.findIndex(
    s => s.id === selectedStrategyId
  )
  const hasPrevStrategy = currentStrategyIndex > 0
  const hasNextStrategy =
    currentStrategyIndex >= 0 &&
    currentStrategyIndex < STRATEGIES_DATA.length - 1

  useEffect(() => {
    if (!tutorialsApi) return
    const tutorials = selectedStrategy.tutorials
    const realIdx = tutorials.findIndex(t => t.step === currentStep)
    if (realIdx < 0) return
    const emblaTarget = hasPrevStrategy ? realIdx + 1 : realIdx
    tutorialsApi.scrollTo(emblaTarget)
  }, [
    selectedStrategyId,
    currentStep,
    tutorialsApi,
    selectedStrategy.tutorials,
    hasPrevStrategy
  ])

  useEffect(() => {
    if (!tutorialsApi) return

    const onTutorialSelect = () => {
      const idx = tutorialsApi.selectedScrollSnap()
      const tutorials = selectedStrategy.tutorials
      const lastRealIndex = tutorials.length - 1
      const frontIdx = hasPrevStrategy ? 0 : -1
      const firstReal = hasPrevStrategy ? 1 : 0
      const lastReal = firstReal + lastRealIndex
      const backIdx = hasNextStrategy ? lastReal + 1 : -1

      if (idx === frontIdx && hasPrevStrategy) {
        const prevStrategy = STRATEGIES_DATA[currentStrategyIndex - 1]
        const prevTutorials = prevStrategy.tutorials
        const prevLastStep = prevTutorials[prevTutorials.length - 1].step
        setCurrentStep(prevLastStep)
        setSelectedStrategyId(prevStrategy.id)
      } else if (idx === backIdx && hasNextStrategy) {
        const nextStrategy = STRATEGIES_DATA[currentStrategyIndex + 1]
        const nextFirstStep = nextStrategy.tutorials[0].step
        setCurrentStep(nextFirstStep)
        setSelectedStrategyId(nextStrategy.id)
      } else if (idx >= firstReal && idx <= lastReal) {
        const realIdx = idx - firstReal
        const step = tutorials[realIdx].step
        if (step !== currentStep) {
          setCurrentStep(step)
        }
      }
    }

    tutorialsApi.on('select', onTutorialSelect)
    return () => {
      tutorialsApi.off('select', onTutorialSelect)
    }
  }, [
    tutorialsApi,
    selectedStrategy,
    currentStep,
    hasPrevStrategy,
    hasNextStrategy,
    currentStrategyIndex,
    setCurrentStep,
    setSelectedStrategyId
  ])

  return (
    <div
      className={`border ${TABLE_BORDER_COLOR} rounded-xl w-full h-full block md:hidden`}
    >
      <div
        className={`flex items-center py-3 px-4 border-b ${TABLE_BORDER_COLOR}`}
      >
        <EmblaNavButton
          onClick={() => {
            if (pillsContainerRef.current) {
              pillsContainerRef.current.scrollBy({
                left: -100,
                behavior: 'smooth'
              })
            }
          }}
          disabled={false}
          isMobile
        />
        <div
          ref={pillsContainerRef}
          className='flex overflow-x-auto items-center gap-2 hover:cursor-pointer'
        >
          {STRATEGIES_DATA.map((strategy, idx) => (
            <div
              key={strategy.id}
              ref={el => {
                pillRefs.current[idx] = el
              }}
              className='shrink-0'
            >
              <StrategyPill
                strategy={strategy.name}
                isSelected={strategy.id === selectedStrategyId}
                onSelect={() => setSelectedStrategyId(strategy.id)}
              />
            </div>
          ))}
        </div>
        <EmblaNavButton
          className='rotate-180'
          onClick={() => {
            if (pillsContainerRef.current) {
              pillsContainerRef.current.scrollBy({
                left: 100,
                behavior: 'smooth'
              })
            }
          }}
          disabled={false}
          isMobile
        />
      </div>

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

      <div
        ref={tutorialsRef}
        key={selectedStrategyId}
        className={`
          px-3 py-3
          embla__viewport overflow-hidden
          border-b ${TABLE_BORDER_COLOR}
        `}
      >
        <div className='flex gap-2 embla__container'>
          {hasPrevStrategy && (
            <div
              className='embla__slide shrink-0 w-[calc(100%-12px)]'
              aria-hidden='true'
            />
          )}

          {selectedStrategy.tutorials.map(tutorial => (
            <div
              key={tutorial.title}
              className='embla__slide shrink-0 w-[calc(100%-12px)]'
            >
              <TutorialStepCard currentStep={currentStep} {...tutorial} />
            </div>
          ))}

          {hasNextStrategy && (
            <div
              className='embla__slide shrink-0 w-[calc(100%-12px)]'
              aria-hidden='true'
            />
          )}
        </div>
      </div>

      <div className={`flex items-center justify-between py-3 px-6`}>
        <p className='font-semibold text-grey-100'>Projects</p>
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
    </div>
  )
}
