import React, { useEffect, useRef } from 'react'
import {
  TABLE_BORDER_COLOR,
  StrategyPill,
  TutorialStepCard,
  TutorialProps
} from './Tutorials'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaNavButton } from './DesktopTutorialTable'
import { STRATEGIES_DATA, StrategyId } from './fixture'
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

  // Helper to change strategy & step, then blur any focused pill to clear mobile :focus/:active styles
  const changeStrategy = (id: StrategyId, step: number) => {
    setSelectedStrategyId(id)
    setCurrentStep(step)
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  // Scroll the selected pill into view only if it's outside the visible area
  useEffect(() => {
    const idx = STRATEGIES_DATA.findIndex(s => s.id === selectedStrategyId)
    const pillEl = pillRefs.current[idx]
    const container = pillsContainerRef.current
    if (pillEl && container) {
      const pillRect = pillEl.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      if (
        pillRect.left < containerRect.left ||
        pillRect.right > containerRect.right
      ) {
        pillEl.scrollIntoView({
          behavior: 'smooth',
          inline: 'nearest',
          block: 'nearest'
        })
      }
    }
  }, [selectedStrategyId])

  // Embla carousel setup
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
  const hasPrevStrategy = currentStrategyIndex > 0
  const hasNextStrategy =
    currentStrategyIndex >= 0 &&
    currentStrategyIndex < STRATEGIES_DATA.length - 1

  // Whenever strategy or step changes, scroll the carousel to the correct slide
  useEffect(() => {
    if (!tutorialsApi) return
    const tutorials = selectedStrategy.tutorials
    const realIdx = tutorials.findIndex(t => t.step === currentStep)
    if (realIdx < 0) return
    const emblaTarget = realIdx + (hasPrevStrategy ? 1 : 0)
    tutorialsApi.scrollTo(emblaTarget)
  }, [
    selectedStrategyId,
    currentStep,
    tutorialsApi,
    selectedStrategy.tutorials,
    hasPrevStrategy
  ])

  // Handle carousel snap events: always return a cleanup function
  useEffect(() => {
    if (!tutorialsApi) {
      // still return a destructor to satisfy EffectCallback signature
      return () => {}
    }

    const onTutorialSelect = () => {
      const idx = tutorialsApi.selectedScrollSnap()
      const tutorials = selectedStrategy.tutorials
      const count = tutorials.length
      const offset = hasPrevStrategy ? 1 : 0
      const relative = idx - offset

      if (relative < 0 && hasPrevStrategy) {
        const prev = STRATEGIES_DATA[currentStrategyIndex - 1]
        const lastStep = prev.tutorials[prev.tutorials.length - 1].step
        changeStrategy(prev.id, lastStep)
      } else if (relative >= count && hasNextStrategy) {
        const next = STRATEGIES_DATA[currentStrategyIndex + 1]
        const first = next.tutorials[0].step
        changeStrategy(next.id, first)
      } else if (relative >= 0 && relative < count) {
        const step = tutorials[relative].step
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
    currentStrategyIndex
  ])

  return (
    <div
      className={`border ${TABLE_BORDER_COLOR} rounded-xl w-full h-full block md:hidden`}
    >
      <div
        className={`flex items-center py-3 px-4 border-b ${TABLE_BORDER_COLOR}`}
      >
        <EmblaNavButton
          onClick={() =>
            pillsContainerRef.current?.scrollBy({
              left: -100,
              behavior: 'smooth'
            })
          }
          disabled={false}
          isMobile
        />
        <div
          ref={pillsContainerRef}
          className='flex overflow-x-auto items-center gap-2 hover:cursor-pointer'
        >
          {STRATEGIES_DATA.map((strategy, idx) => {
            const isSelected = strategy.id === selectedStrategyId
            const firstStep = strategy.tutorials[0].step
            return (
              <div
                key={strategy.id}
                ref={el => {
                  pillRefs.current[idx] = el
                }}
                className='shrink-0'
              >
                <StrategyPill
                  strategy={strategy.name}
                  isSelected={isSelected}
                  onSelect={() => changeStrategy(strategy.id, firstStep)}
                />
              </div>
            )
          })}
        </div>
        <EmblaNavButton
          className='rotate-180'
          onClick={() =>
            pillsContainerRef.current?.scrollBy({
              left: 100,
              behavior: 'smooth'
            })
          }
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
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${t.step === currentStep ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      <div
        ref={tutorialsRef}
        key={selectedStrategyId}
        className={`px-3 py-3 embla__viewport overflow-hidden border-b ${TABLE_BORDER_COLOR}`}
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

      <div className='flex items-center justify-between py-3 px-6'>
        <p className='font-semibold text-grey-100'>Projects</p>
        <div className='flex items-center gap-2'>
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
