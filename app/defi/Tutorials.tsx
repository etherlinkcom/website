'use client'

import React, { useState, useEffect } from 'react'
import Container from '../components/container'
import { DesktopTutorialTable } from './DesktopTutorialTable'
import { MobileTutorialTable } from './MobileTutorialTable'
import { STRATEGIES_DATA, StrategyId, Strategy, Tutorial } from './fixture'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const TABLE_BORDER_COLOR = 'border-black-400'

export interface TutorialProps {
  selectedStrategyId: StrategyId
  setSelectedStrategyId: (s: StrategyId) => void
  selectedStrategy: Strategy
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

export const Tutorials = () => {
  const [selectedStrategyId, setSelectedStrategyId] =
    useState<StrategyId>('t-bill-savings')
  const [currentStep, setCurrentStep] = useState<number>(1)

  // Reset current step
  useEffect(() => {
    setCurrentStep(1)
  }, [selectedStrategyId])

  const selectedStrategy = STRATEGIES_DATA.find(
    strategy => strategy.id === selectedStrategyId
  ) as Strategy

  return (
    <div className='relative' id='strategies'>
      <Container className='relative py-10 md:py-24'>
        <img
          className='absolute hidden md:block top-4 max-h-[230px] w-[80%] object-cover opacity-60
            left-[50%] -translate-x-[50%] z-0 pointer-events-none'
          src='/img/defi/dt-grid.svg'
          alt='grid img'
        />
        <div className='pb-24 text-start md:text-center'>
          <p className='text-[28px] md:text-4xl font-bold leading-[48px] text-neonGreen-500 mb-1 md:mb-2'>
            Start earning <span className='text-white-50'>in a few clicks</span>
          </p>
          <p className='text-grey-200 text-lg md:text-xl -tracking-[0.4px]'>
            Step-by-step guides to the top strategies on Etherlink
          </p>
        </div>
        {/* tutorials table */}
        <DesktopTutorialTable
          selectedStrategyId={selectedStrategyId}
          setSelectedStrategyId={setSelectedStrategyId}
          selectedStrategy={selectedStrategy}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <MobileTutorialTable
          selectedStrategyId={selectedStrategyId}
          setSelectedStrategyId={setSelectedStrategyId}
          selectedStrategy={selectedStrategy}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </Container>
    </div>
  )
}

interface StrategyPillProps {
  strategy: string
  isSelected: boolean
  onSelect: () => void
}

export const StrategyPill = ({
  strategy,
  isSelected,
  onSelect
}: StrategyPillProps) => {
  // hover:cursor-pointer hover:bg-grey-500 hover:border-neonGreen-900
  return (
    <div
      className={`flex items-center justify-center shrink-0 px-3 py-1.5 text-center rounded-lg border
          ${isSelected ? 'bg-grey-500 border-neonGreen-900' : 'bg-grey-700 border-black-400'}
           group`}
      onClick={onSelect}
    >
      <p
        className={`text-sm font-semibold ${isSelected ? 'text-neonGreen-500' : 'text-grey-200'} group-hover:text-neonGreen-500`}
      >
        {strategy}
      </p>
    </div>
  )
}

interface TutorialCardProps extends Tutorial {
  currentStep: number
}

export const TutorialStepCard = ({
  step,
  title,
  description,
  currentStep
}: TutorialCardProps) => {
  return (
    <div
      className={`flex items-center gap-4 py-4 px-6 border ${currentStep === step ? 'border-neonGreen-900 bg-grey-500' : 'border-grey-400 bg-grey-700'} rounded-lg`}
    >
      <div className='flex items-center flex-shrink-0 justify-center text-black-900 text-sm font-semibold bg-neonGreen-500 rounded-full h-6 w-6'>
        {step}
      </div>
      <div>
        <p className='text-neonGreen-500 font-semibold'>{title}</p>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ children }) => <p className='text-grey-200'>{children}</p>,
            a: ({ children, href, ...props }) => (
              <a
                href={href}
                {...props}
                className='text-neonGreen-500'
                target='_blank'
                rel='noopener noreferrer'
              >
                {children}
              </a>
            )
          }}
        >
          {description}
        </ReactMarkdown>
      </div>
    </div>
  )
}
