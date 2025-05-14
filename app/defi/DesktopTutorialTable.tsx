import React, { ComponentPropsWithRef, useEffect } from 'react'
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

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setCurrentStep(emblaApi.selectedScrollSnap() + 1)
    }

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, setCurrentStep])

  return (
    <div
      className={`border ${TABLE_BORDER_COLOR} rounded-xl w-full h-full hidden md:block`}
    >
      {/* titles */}
      <div
        className={`flex overflow-auto items-center gap-6 py-3 px-6 border-b ${TABLE_BORDER_COLOR}`}
      >
        <p className='text-grey-100 text-lg font-semibold'>Strategies</p>
        <div className='flex overflow-auto items-center gap-2 hover:cursor-pointer z-10'>
          {STRATEGIES_DATA.map(strategy => (
            <StrategyPill
              strategy={strategy.name}
              isSelected={strategy.id === selectedStrategyId}
              onSelect={() => setSelectedStrategyId(strategy.id)}
              key={strategy.id}
            />
          ))}
        </div>
      </div>
      {/* body */}
      <div className='flex'>
        {/* left */}
        <div className={`w-1/3 border-r ${TABLE_BORDER_COLOR}`}>
          {/* tutorials title */}
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
          {/* tutorials steps */}
          <div
            key={selectedStrategyId}
            ref={emblaRef}
            className={`p-3 h-[300px] border-b embla__viewport overflow-hidden ${TABLE_BORDER_COLOR}`}
          >
            <div className='flex gap-4 embla__container'>
              {selectedStrategy.tutorials.map((tutorial, index) => (
                <div key={index} className='embla__slide shrink-0 w-full'>
                  <TutorialStepCard currentStep={currentStep} {...tutorial} />
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
            <div className='px-6 py-2 w-1/2'>
              <p className='font-semibold text-neonGreen-500'>
                {selectedStrategy.earning}
              </p>
            </div>
          </div>
        </div>
        {/* right image */}
        <div className='flex justify-center items-center w-2/3'>
          {selectedStrategy.tutorials
            .filter(t => t.step === currentStep)
            .map(t => (
              <img
                className='h-full w-full object-cover'
                key={t.step}
                src={t.image}
                alt={t.title}
              />
            ))}
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
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
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
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M11.65 20.051C11.4249 20.276 11.1198 20.4023 10.8016 20.4023C10.4834 20.4023 10.1782 20.276 9.95316 20.051L2.75316 12.851C2.5282 12.626 2.40182 12.3208 2.40182 12.0026C2.40182 11.6844 2.5282 11.3792 2.75316 11.1542L9.95316 3.9542C10.1795 3.73561 10.4826 3.61466 10.7972 3.61739C11.1119 3.62012 11.4129 3.74633 11.6353 3.96882C11.8578 4.19131 11.984 4.49228 11.9868 4.80692C11.9895 5.12155 11.8686 5.42468 11.65 5.651L6.49836 10.8026L20.4016 10.8026C20.7198 10.8026 21.025 10.929 21.2501 11.1541C21.4751 11.3791 21.6016 11.6843 21.6016 12.0026C21.6016 12.3209 21.4751 12.6261 21.2501 12.8511C21.025 13.0762 20.7198 13.2026 20.4016 13.2026L6.49836 13.2026L11.65 18.3542C11.8749 18.5792 12.0013 18.8844 12.0013 19.2026C12.0013 19.5208 11.8749 19.826 11.65 20.051Z'
            fill={`${disabled ? '#515151' : '#BCBCBC'}`}
          />
        </svg>
      )}
      {children}
    </button>
  )
}
