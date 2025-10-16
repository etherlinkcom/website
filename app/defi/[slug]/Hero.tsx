import React from 'react'
import { PrimaryButton } from '../../components/buttons/PrimaryButton'
import { HeroCard } from './HeroCard'
import { GraditentLine } from '../../components/pages/RevampHome/Partners'
import { Strategy } from '../fixture'

export const Hero = ({ strategy }: { strategy: Strategy }) => {
  return (
    <>
      <div className='pb-10 pt-14 md:pt-20 md:pb-28'>
        <div className='mb-14 md:mb-20'>
          <p className='text-sm font-bold text-neonGreen-500 mb-2 md:mb-4'>
            {strategy.strategyType}
          </p>
          <h1 className='text-4xl text-grey-50 md:text-[56px] font-bold -tracking-[0.72px] md:-tracking-[1.12px] mb-2 md:mb-4'>
            {strategy.name}
          </h1>
          <p className='text-grey-200 text-lg md:text-xl leading-[26px] mb-[140px] md:mb-20 max-w-[560px]'>
            {strategy.description}
          </p>
          <PrimaryButton
            href='#step1'
            text='Go to steps'
            className='w-full md:w-auto'
          />
        </div>
        <div className='flex flex-col md:flex-row gap-8 w-full'>
          <HeroCard title='YIELD PROVIDER' images={strategy.yieldProvider} />
          <HeroCard title='TOKENS USED' images={strategy.tokenUsed} />
          <HeroCard title='PROJECTS USED' images={strategy.projectInvolved} />
        </div>
      </div>
      <GraditentLine className='left-[50%] -translate-x-[56%]' />
    </>
  )
}
