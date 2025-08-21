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

export const MobileTutorialTable = ({
  selectedStrategyId,
  setSelectedStrategyId,
  selectedStrategy,
  currentStep,
  setCurrentStep
}: TutorialProps) => {
  const pillsContainerRef = useRef<HTMLDivElement | null>(null)
  const pillRefs = useRef<(HTMLDivElement | null)[]>([])
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const [shouldLoadVideos, setShouldLoadVideos] = useState(false)

  // Lazy load videos when section is near viewport
  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadVideos(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !shouldLoadVideos) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Section is in viewport, play the selected video based on device

            const selectedVideo = videoRefs.current[currentStep - 1]

            console.log('Playing video:', selectedVideo)

            if (selectedVideo) {
              videoRefs.current.forEach(video => {
                if (video) {
                  video.currentTime = 0
                }
              })
              selectedVideo
                .play()
                .catch(e => console.log('Desktop video play error:', e))
            }
          } else {
            // Section is out of viewport, pause and reset all videos
            videoRefs.current.forEach(video => {
              if (video) {
                video.pause()
                video.currentTime = 0
              }
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
    }
  }, [currentStep, shouldLoadVideos])

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
      ref={sectionRef}
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
        {selectedStrategy.tutorials.map((t, index) => {
          const isActive = t.step === currentStep
          return (
            <div
              key={t.step}
              className={`
                absolute inset-0 transition-opacity duration-300
                ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
              `}
            >
              {t.video ? (
                <video
                  ref={(el: HTMLVideoElement | null) => {
                    videoRefs.current[index] = el
                    return undefined
                  }}
                  src={t.video}
                  poster={t.image}
                  loop
                  muted
                  playsInline
                  className='w-full h-full object-cover'
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
