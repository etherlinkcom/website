import React, { useEffect, useRef, useState } from 'react'
import {
  TABLE_BORDER_COLOR,
  StrategyPill,
  TutorialStepCard,
  TutorialProps
} from './Tutorials'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaNavButton } from './DesktopTutorialTable'
import { STRATEGIES_DATA } from './fixture'
import Link from 'next/link'
import ReactPlayer from 'react-player'

export const MobileTutorialTable = ({
  selectedStrategyId,
  setSelectedStrategyId,
  selectedStrategy,
  currentStep,
  setCurrentStep
}: TutorialProps) => {
  const pillsContainerRef = useRef<HTMLDivElement | null>(null)
  const pillRefs = useRef<(HTMLDivElement | null)[]>([])

  const [isPlaying, setIsPlaying] = useState(false)
  const [inView, setInView] = useState(false)
  const [playerResetId, setPlayerResetId] = useState(0)
  const activeWrapperRef = useRef<HTMLDivElement | null>(null)

  const resetFromStart = () => setPlayerResetId(id => id + 1)

  useEffect(() => {
    setIsPlaying(false)
    resetFromStart()
    if (inView) setIsPlaying(true)
  }, [currentStep, inView])

  // Observe only the currently active media wrapper
  useEffect(() => {
    const el = activeWrapperRef.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.5
        setInView(visible)
        if (visible) {
          resetFromStart()
          setIsPlaying(true)
        } else {
          setIsPlaying(false)
          resetFromStart()
        }
      },
      { threshold: [0, 0.5, 1] }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [currentStep])

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

  useEffect(() => {
    if (!tutorialsApi) return

    const onTutorialSelect = () => {
      const idx = tutorialsApi.selectedScrollSnap()
      const tutorials = selectedStrategy.tutorials
      const count = tutorials.length
      const offset = hasPrevStrategy ? 1 : 0
      const relative = idx - offset

      if (relative < 0 && hasPrevStrategy) {
        const prev = STRATEGIES_DATA[currentStrategyIndex - 1]
        setSelectedStrategyId(prev.id)
      } else if (relative >= count && hasNextStrategy) {
        const next = STRATEGIES_DATA[currentStrategyIndex + 1]
        setSelectedStrategyId(next.id)
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
            return (
              <div
                key={strategy.id}
                ref={el => {
                  pillRefs.current[idx] = el
                }}
                className='shrink-0'
              >
                <StrategyPill
                  key={selectedStrategyId}
                  strategy={strategy.name}
                  isSelected={isSelected}
                  onSelect={() => setSelectedStrategyId(strategy.id)}
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
        {selectedStrategy.tutorials.map(t => {
          const isActive = t.step === currentStep
          return (
            <div
              key={t.step}
              ref={isActive ? activeWrapperRef : null}
              className={`
                absolute inset-0 transition-opacity duration-300
                ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
              `}
            >
              {t.video ? (
                <ReactPlayer
                  key={`${t.step}-${isActive ? playerResetId : 'idle'}`}
                  src={t.video}
                  playing={isActive && isPlaying}
                  muted
                  loop
                  width='100%'
                  height='100%'
                  className='absolute inset-0 z-10'
                />
              ) : (
                <img
                  src={t.image}
                  alt={t.title}
                  loading='lazy'
                  className='w-full h-full object-cover'
                />
              )}
            </div>
          )
        })}
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
