import React from 'react'
import Container from '../components/container'

const STRATEGIES = [
  'Basis Trade',
  'BTC Fi',
  'Nuclear Speculation',
  'Community Speculation',
  'Market Making'
]

const FAKE_IMAGES = ['/img/defi/p1.jpg', '/img/defi/p2.jpg', '/img/defi/p3.jpg']

const TABLE_BORDER_COLOR = 'border-black-400'

export const Tutorials = () => {
  return (
    <div className='relative'>
      <Container className='py-10 md:py-24'>
        <div className='pb-14 text-center'>
          <p className='text-4xl font-bold leading-[48px] text-neonGreen-500 mb-2'>
            Start earning <span className='text-white-50'>in a few clicks</span>
          </p>
          <p className='text-grey-200 text-xl -tracking-[0.4px]'>
            Step-by-step guides to the top strategies on Etherlink
          </p>
        </div>
        {/* tutorials table */}
        <div
          className={`border ${TABLE_BORDER_COLOR} rounded-xl w-full h-full`}
        >
          {/* titles */}
          <div
            className={`flex items-center gap-6 py-3 px-6 border-b ${TABLE_BORDER_COLOR}`}
          >
            <p className='text-grey-100 text-lg font-semibold'>Strategies</p>
            <div className='flex items-center gap-2 hover:cursor-pointer z-10'>
              {STRATEGIES.map(strategy => (
                <StrategyPill key={strategy} strategy={strategy} />
              ))}
            </div>
          </div>
          {/* body */}
          <div className='flex'>
            {/* left */}
            <div
              className={`max-w-[440px] w-full border-r ${TABLE_BORDER_COLOR}`}
            >
              {/* tutorials title */}
              <div
                className={`flex justify-between items-center py-2 px-3 border-b ${TABLE_BORDER_COLOR}`}
              >
                <p className='text-grey-100 font-semibold pl-3'>
                  Tutorial Steps
                </p>
                <div className='flex items-center'>
                  <img
                    className='px-3 py-2 hover:cursor-pointer'
                    src='/img/defi/FiArrowLeft.svg'
                    alt='arrow icon'
                  />
                  <img
                    className='px-3 py-2 hover:cursor-pointer'
                    src='/img/defi/FiArrowRight.svg'
                    alt='arrow icon'
                  />
                </div>
              </div>
              {/* tutorials steps */}
              <div className={`p-3 h-[300px] border-b ${TABLE_BORDER_COLOR}`}>
                <TutorialStepCard />
              </div>
              {/* details */}
              {/* 1st row */}
              <div className={`flex border-b ${TABLE_BORDER_COLOR}`}>
                <div
                  className={`px-6 py-2 border-r ${TABLE_BORDER_COLOR} w-1/2`}
                >
                  <p className='font-semibold text-grey-100'>
                    Projects involved
                  </p>
                </div>
                <div className='px-6 py-2 w-1/2'>
                  <p className='font-semibold text-grey-100'>
                    Earning Potential
                  </p>
                </div>
              </div>
              {/* 2nd row */}
              <div className={`flex`}>
                <div
                  className={`flex items-center gap-2 px-6 py-2 border-r ${TABLE_BORDER_COLOR} w-1/2`}
                >
                  {FAKE_IMAGES.map((image, index) => (
                    <img
                      key={index}
                      className='w-6 h-6 rounded-lg'
                      src={image}
                      alt='project image'
                    />
                  ))}
                </div>
                <div className='px-6 py-2 w-1/2'>
                  <p className='font-semibold text-neonGreen-500'>310% APR</p>
                </div>
              </div>
            </div>
            {/* right image */}
            <div className='w-full h-full'>
              <img className='' src='/img/defi/stepCard.jpg' alt='card' />
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

const TutorialStepCard = () => {
  return (
    <div className='flex items-center gap-4 py-4 px-6 bg-lightBlack border border-neonGreen-900 rounded-lg'>
      <div className='flex items-center justify-center text-black-900 text-sm font-semibold bg-neonGreen-500 rounded-full h-6 w-6'>
        1
      </div>
      <div>
        <p className='text-neonGreen-500 font-semibold'>Bridge</p>
        <p className='text-grey-200'>Bridge in USDC using Etherlink Bridge</p>
      </div>
    </div>
  )
}
