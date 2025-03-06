import React from 'react'
import Container from '../../container'
import { PrimaryButton } from '../../buttons/PrimaryButton'
import { GhostButton } from '../../buttons/GhostButton'

export const NewMain = () => {
  return (
    <div>
      <img
        className='absolute top-0 w-[870px] h-[360px] md:w-[2320px] md:h-[960px] object-cover left-1/2 transform -translate-x-1/2'
        src='/img/builders/etherlink-bg.svg'
        alt='bg img'
      />
      <Container className='min-h-[calc(100vh-104px)] md:min-h-[calc(100vh-138px)] relative justify-center px-8 py-24 mx-auto flex flex-col items-start'>
        <div className='pb-16 text-center md:text-left'>
          <h1 className='text-4xl md:text-[69px] font-bold text-white tracking-[-0.7px] md:tracking-[-1.1px] leading-[1.1]'>
            The <span className='text-neonGreen-500'>fast, fair</span>
            <br /> and (nearly) <span className='text-neonGreen-500'>
              free
            </span>{' '}
            L2
          </h1>
          <p
            className='mt-6 text-base md:text-[28px] text-grey-200 md:max-w-2xl 
                tracking-[-0.32px] md:racking-[-0.56px] leading-1 md:leading-[35px]'
          >
            Bridge assets, swap instantly, and explore apps all with low fees
            and fast transactions
          </p>
          <div className='flex items-center flex-col md:flex-row gap-6 w-full mt-[104px] md:mt-[30px]'>
            <PrimaryButton
              className='w-full md:w-auto'
              text='Bridge now'
              href='https://bridge.etherlink.com/'
              icon={<img src='/img/icons/wire.svg' alt='icon' />}
            />
            <GhostButton
              className='w-full md:w-auto'
              text='Start building'
              href='#developers'
              icon={<img src='/img/icons/BiSliderAlt.svg' alt='icon' />}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
