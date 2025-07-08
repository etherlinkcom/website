import React, {
  ComponentPropsWithRef,
  useEffect,
  useRef,
  useState
} from 'react'
import {
  TABLE_BORDER_COLOR,
  StrategyPill,
  TutorialStepCard,
  TutorialProps
} from './Tutorials'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons } from './usePrevNextButtons'
import { STRATEGIES_DATA } from './fixture'
import Link from 'next/link'
import ReactPlayer from 'react-player'

export const DesktopTutorialTable = ({
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
    containScroll: false
  })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const [isPlaying, setIsPlaying] = useState(false)

  // If user switches steps, reset playing
  useEffect(() => {
    setIsPlaying(false)
  }, [currentStep])

  useEffect(() => {
    if (selectedStrategy.tutorials.length > 0) {
      setCurrentStep(selectedStrategy.tutorials[0].step)
    }
  }, [selectedStrategyId, selectedStrategy.tutorials, setCurrentStep])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      const scrollIndex = emblaApi.selectedScrollSnap()
      const tutorials = selectedStrategy.tutorials
      const lastTutorialIndex = tutorials.length - 1

      if (scrollIndex <= lastTutorialIndex) {
        const step = tutorials[scrollIndex]?.step
        if (step !== undefined && step !== currentStep) {
          setCurrentStep(step)
        }
      } else {
        const strategyIndex = STRATEGIES_DATA.findIndex(
          s => s.id === selectedStrategyId
        )
        if (strategyIndex >= 0 && strategyIndex < STRATEGIES_DATA.length - 1) {
          const nextId = STRATEGIES_DATA[strategyIndex + 1].id
          setSelectedStrategyId(nextId)
        }
      }
    }

    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [
    emblaApi,
    selectedStrategy,
    currentStep,
    setCurrentStep,
    selectedStrategyId,
    setSelectedStrategyId
  ])

  const pillsContainerRef = useRef<HTMLDivElement | null>(null)
  const pillRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const index = STRATEGIES_DATA.findIndex(s => s.id === selectedStrategyId)
    const pillEl = pillRefs.current[index]
    if (pillEl) {
      pillEl.scrollIntoView({
        behavior: 'smooth',
        inline: 'nearest',
        block: 'nearest'
      })
    }
  }, [selectedStrategyId])

  const currentStrategyIndex = STRATEGIES_DATA.findIndex(
    s => s.id === selectedStrategyId
  )
  const hasNextStrategy =
    currentStrategyIndex >= 0 &&
    currentStrategyIndex < STRATEGIES_DATA.length - 1

  return (
    <div
      className={`border ${TABLE_BORDER_COLOR} rounded-xl w-full h-full hidden md:block`}
    >
      {/* ── TITLES ROW: Strategy Pills ─────────────────────────────────────────────── */}
      <div
        className={`flex overflow-auto items-center gap-6 py-3 px-6 border-b ${TABLE_BORDER_COLOR}`}
        ref={pillsContainerRef}
      >
        <p className='text-grey-100 text-lg font-semibold'>Strategies</p>
        <div className='flex overflow-auto items-center gap-2 hover:cursor-pointer z-10'>
          {STRATEGIES_DATA.map((strategy, idx) => (
            <div
              key={strategy.id}
              ref={el => {
                if (el) pillRefs.current[idx] = el
                else pillRefs.current[idx] = null
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
      </div>
      <div className='flex'>
        <div className={`w-1/3 border-r ${TABLE_BORDER_COLOR}`}>
          <div
            className={`flex justify-between items-center py-2 px-3 border-b ${TABLE_BORDER_COLOR}`}
          >
            <p className='text-grey-100 font-semibold pl-3'>Tutorial Steps</p>
            <div className='flex items-center'>
              <EmblaNavButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <EmblaNavButton
                className='rotate-180'
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
          {/* ── Embla viewport for tutorial slides ───────────────────────────────── */}
          <div
            key={selectedStrategyId}
            ref={emblaRef}
            className={`p-3 h-[300px] border-b embla__viewport overflow-hidden ${TABLE_BORDER_COLOR}`}
          >
            <div className='flex gap-4 embla__container'>
              {selectedStrategy.tutorials.map((tutorial, index) => (
                <div
                  key={tutorial.step}
                  className='embla__slide shrink-0 w-full'
                >
                  <TutorialStepCard currentStep={currentStep} {...tutorial} />
                </div>
              ))}

              {hasNextStrategy && (
                <div
                  className='embla__slide shrink-0 w-full'
                  aria-hidden='true'
                />
              )}
            </div>
          </div>
          {/* Projects involved section */}
          <div className={`flex border-b ${TABLE_BORDER_COLOR}`}>
            <div className={`px-6 py-2`}>
              <p className='font-semibold text-grey-100'>Projects involved</p>
            </div>
          </div>
          <div className={`flex`}>
            <div className={`flex items-center gap-2 px-6 py-2`}>
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

        {/* ── RIGHT COLUMN: Image for the current tutorial step ─────────────────── */}
        <div className='relative w-2/3 rounded-br-xl overflow-hidden'>
          {selectedStrategy.tutorials.map(t => {
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
                  <ReactPlayer
                    src={t.video}
                    controls
                    playing={isPlaying}
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
      </div>
    </div>
  )
}

type PropType = ComponentPropsWithRef<'button'> & {
  className?: string
  isMobile?: boolean
}

export const EmblaNavButton: React.FC<PropType> = props => {
  const { className, isMobile, disabled, children, ...restProps } = props

  return (
    <button
      className={`embla__button embla__button--prev bg-grey-900 backdrop-blur-[10px] rounded-[8px] p-2 ${className}`}
      type='button'
      disabled={disabled}
      {...restProps}
    >
      {isMobile ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M13.25 15.2501L9.75 12.0001L13.25 8.75012'
            stroke='#BCBCBC'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.65 20.051C11.4249 20.276 11.1198 20.4023 10.8016 20.4023C10.4834 20.4023 10.1782 20.276 9.95316 20.051L2.75316 12.851C2.5282 12.626 2.40182 12.3208 2.40182 12.0026C2.40182 11.6844 2.5282 11.3792 2.75316 11.1542L9.95316 3.9542C10.1795 3.73561 10.4826 3.61466 10.7972 3.61739C11.1119 3.62012 11.4129 3.74633 11.6353 3.96882C11.8578 4.19131 11.984 4.49228 11.9868 4.80692C11.9895 5.12155 11.8686 5.42468 11.65 5.651L6.49836 10.8026L20.4016 10.8026C20.7198 10.8026 21.025 10.929 21.2501 11.1541C21.4751 11.3791 21.6016 11.6843 21.6016 12.0026C21.6016 12.3209 21.4751 12.6261 21.2501 12.8511C21.025 13.0762 20.7198 13.2026 20.4016 13.2026L6.49836 13.2026L11.65 18.3542C11.8749 18.5792 12.0013 18.8844 12.0013 19.2026C12.0013 19.5208 11.8749 19.826 11.65 20.051Z'
            fill={`${disabled ? '#515151' : '#BCBCBC'}`}
          />
        </svg>
      )}
      {children}
    </button>
  )
}
