import React from 'react'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { GhostButton } from '../components/buttons/GhostButton'
import Container from '../components/container'

export const Hero = () => {
  return (
    <div>
      <Container className='py-24'>
        <div className=''>
          {/* text and buttons */}
          <p className='text-neonGreen-500 text-xs md:text-sm font-semibold md:font-bold mb-4 md:mb-2'>
            $11,000,000 bridged to Etherlink to date
          </p>
          <h1
            className='grey-50 text-4xl md:text-[56px] font-bold leading-[48px] md:leading-[68px] 
            -tracking-[0.72px] md:-tracking-[1.12px] md:max-w-[600px] mb-5 md:mb-2'
          >
            Make money with DeFi on Etherlink
          </h1>
        </div>
        <div>{/* icons */}</div>
      </Container>
    </div>
  )
}
