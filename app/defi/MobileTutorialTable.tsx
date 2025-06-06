import React, { useEffect } from 'react'
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
  const [pillsRef, pillsApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    axis: 'x',
    containScroll: 'trimSnaps'
  })

  const {
    prevBtnDisabled: pillsPrevDisabled,
    nextBtnDisabled: pillsNextDisabled,
    onPrevButtonClick: onPillsPrev,
    onNextButtonClick: onPillsNext
  } = usePrevNextButtons(pillsApi)

  useEffect(() => {
    if (!pillsApi) return
    const pillIdx = STRATEGIES_DATA.findIndex(s => s.id === selectedStrategyId)
    if (pillIdx >= 0) pillsApi.scrollTo(pillIdx)
  }, [selectedStrategyId, pillsApi])

  const [tutorialsRef, tutorialsApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    axis: 'x',
    containScroll: 'trimSnaps'
  })

  const currentStrategyIndex = STRATEGIES_DATA.findIndex(
    s => s.id === selectedStrategyId
  )
  const hasNextStrategy =
    currentStrategyIndex >= 0 &&
    currentStrategyIndex < STRATEGIES_DATA.length - 1

  useEffect(() => {
    if (selectedStrategy.tutorials.length > 0) {
      setCurrentStep(selectedStrategy.tutorials[0].step)
    }
  }, [selectedStrategyId, selectedStrategy.tutorials, setCurrentStep])

  useEffect(() => {
    if (!tutorialsApi) return

    const onSelect = () => {
      const idx = tutorialsApi.selectedScrollSnap()
      const tutorials = selectedStrategy.tutorials
      const lastIndex = tutorials.length - 1

      if (idx <= lastIndex) {
        const step = tutorials[idx]?.step
        if (step !== undefined && step !== currentStep) {
          setCurrentStep(step)
        }
      } else {
        if (hasNextStrategy) {
          const nextId = STRATEGIES_DATA[currentStrategyIndex + 1].id
          setSelectedStrategyId(nextId)
        }
      }
    }

    tutorialsApi.on('select', onSelect)
    return () => {
      tutorialsApi.off('select', onSelect)
    }
  }, [
    tutorialsApi,
    selectedStrategy,
    currentStep,
    setCurrentStep,
    hasNextStrategy,
    currentStrategyIndex,
    setSelectedStrategyId
  ])

  return (
    <div
      className={`border ${TABLE_BORDER_COLOR} rounded-xl w-full h-full block md:hidden`}
    >
      {/* ── TITLE: Strategy Pills ───────────────────────────────────────────── */}
      <div
        className={`flex items-center py-3 px-4 border-b ${TABLE_BORDER_COLOR}`}
      >
        <EmblaNavButton
          onClick={onPillsPrev}
          disabled={pillsPrevDisabled}
          isMobile
        />
        <div ref={pillsRef} className='embla__viewport overflow-hidden'>
          <div className='flex items-center gap-2 hover:cursor-pointer z-10 embla__container'>
            {STRATEGIES_DATA.map(strategy => (
              <div
                className='embla__slide shrink-0'
                key={strategy.id}
                id={selectedStrategyId}
              >
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
          onClick={onPillsNext}
          disabled={pillsNextDisabled}
          isMobile
        />
      </div>
      {/* ── IMAGE FOR CURRENT TUTORIAL STEP ───────────────────────────────────── */}
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
          {selectedStrategy.tutorials.map((tutorial, index) => (
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
      {/* ── PROJECTS ROW ───────────────────────────────────────────────────────── */}
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
