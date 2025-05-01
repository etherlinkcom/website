'use client'

import React, { useState } from 'react'
import Container from '../components/container'
import { DesktopTutorialTable } from './DesktopTutorialTable'
import { MobileTutorialTable } from './MobileTutorialTable'

export const STRATEGIES = [
  'Basis Trade',
  'BTC Fi',
  'Nuclear Speculation',
  'Community Speculation',
  'Market Making'
]

export const FAKE_IMAGES = [
  '/img/defi/p1.jpg',
  '/img/defi/p2.jpg',
  '/img/defi/p3.jpg'
]

export const TABLE_BORDER_COLOR = 'border-black-400'

export interface TutorialProps {
  selectedStrategy: string
  setSelectedStrategy: (s: string) => void
}

export const Tutorials = () => {
  const [selectedStrategy, setSelectedStrategy] =
    useState<string>('Basis Trade')

  return (
    <div className='relative'>
      <Container className='py-10 md:py-24'>
        <div className='pb-14 text-start md:text-center'>
          <p className='text-[28px] md:text-4xl font-bold leading-[48px] text-neonGreen-500 mb-1 md:mb-2'>
            Start earning <span className='text-white-50'>in a few clicks</span>
          </p>
          <p className='text-grey-200 text-lg md:text-xl -tracking-[0.4px]'>
            Step-by-step guides to the top strategies on Etherlink
          </p>
        </div>
        {/* tutorials table */}
        <DesktopTutorialTable
          selectedStrategy={selectedStrategy}
          setSelectedStrategy={setSelectedStrategy}
        />
        <MobileTutorialTable
          selectedStrategy={selectedStrategy}
          setSelectedStrategy={setSelectedStrategy}
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
  return (
    <div
      className={`flex items-center justify-center shrink-0 px-3 py-1.5 text-center rounded-lg ${isSelected ? 'bg-grey-500' : 'bg-grey-700'}
          border ${isSelected ? 'border-neonGreen-900' : 'border-black-400'} hover:cursor-pointer`}
      onClick={onSelect}
    >
      <p
        className={`text-sm font-semibold ${isSelected ? 'text-neonGreen-500' : 'text-grey-200'}`}
      >
        {strategy}
      </p>
    </div>
  )
}

interface TutorialStepCardProps {
  step: number
}

export const TutorialStepCard = ({ step }: TutorialStepCardProps) => {
  return (
    <div className='flex items-center gap-4 py-4 px-6 bg-lightBlack border border-neonGreen-900 rounded-lg'>
      <div className='flex items-center justify-center text-black-900 text-sm font-semibold bg-neonGreen-500 rounded-full h-6 w-6'>
        {step}
      </div>
      <div>
        <p className='text-neonGreen-500 font-semibold'>Bridge</p>
        <p className='text-grey-200'>Bridge in USDC using Etherlink Bridge</p>
      </div>
    </div>
  )
}
