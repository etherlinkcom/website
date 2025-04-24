import React from 'react'
import Container from '../components/container'

const STRATEGIES = [
  'Basis Trade',
  'BTC Fi',
  'Nuclear Speculation',
  'Community Speculation',
  'Market Making'
]

export const Tutorials = () => {
  return (
    <div className='relative'>
      <Container className='py-10 md:py-24'>
        {/* tutorials table */}
        <div className='border border-grey-100 rounded-xl w-full h-full'>
          {/* titles */}
          <div className='flex items-center gap-6 py-3 px-6 border-b border-grey-100 mb-10'>
            <p className='text-grey-100 text-lg font-semibold'>Strategies</p>
            <div className='flex items-center gap-2 hover:cursor-pointer z-10'>
              {STRATEGIES.map(strategy => (
                <StrategyPill key={strategy} strategy={strategy} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

interface StrategyPillProps {
  strategy: string
}

const StrategyPill = ({ strategy }: StrategyPillProps) => {
  return (
    <div className='px-3 py-1.5 text-center rounded-lg border border-black-400 hover:cursor-pointer'>
      <p className='text-sm font-semibold text-grey-200'>{strategy}</p>
    </div>
  )
}
