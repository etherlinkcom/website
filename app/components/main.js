'use client'

import Container from './container'
import Link from 'next/link'

const MainContent = () => {
  return (
    <div className='flex items-center justify-center w-full lg:w-1/2'>
      <div className='max-w-2xl text-center lg:text-left'>
        <div className='flex flex-col space-y-2 mb-4 md:mb-12'>
          <h1 className={'text-3xl md:text-5xl font-bold mb-4 md:mb-10'}>
            Build Web3 on <span className='text-darkGreen'>Etherlink</span>
          </h1>
          <div className='text-xl leading-normal text-left lg:text-xl xl:text-2xl text-gray-300 mb-4 md:mb-10'>
            An EVM-compatible optimistic rollup with:
            <ul className='list-disc list-inside mt-3 mb-3 text-base md:text-xl'>
              <li className='mb-1.5'>
                <span className='text-darkGreen'>Decentralized</span> - by
                design
              </li>
              <li className='mb-1.5'>
                <span className='text-darkGreen'>Secure</span> - users are
                protected from exploitation
              </li>
              <li>
                <span className='text-darkGreen'>Affordable</span> - think $0.01
                per transaction, not $20
              </li>
            </ul>
            <div>
              {' '}
              Powered by Tezos{' '}
              <Link
                className='text-darkGreen hover:text-lightGreen cursor-pointer'
                href='https://tezos.com/developers/smart-rollups/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Smart Rollup
              </Link>{' '}
              technology.
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-between sm:flex-row l:items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center'>
          <Link
            href='https://docs.etherlink.com'
            target='_blank'
            rel='noopener'
            className='inline-block py-3 w-full sm:w-1/2 text-lg font-medium text-center text-black bg-white border-solid border-2 border-white rounded-md px-7 lg:px-10 lg:py-4 hover:bg-darkGreen hover:border-darkGreen hover:text-black'
          >
            Start Building
          </Link>
          <Link
            href='https://x.com/intent/user?screen_name=etherlinkcom'
            target='_blank'
            rel='noopener'
            className='inline-block py-3 w-full sm:w-1/2 text-lg font-medium text-center text-white border-solid border-2 border-white rounded-md px-7 lg:px-6 lg:py-4 hover:bg-darkGreen hover:border-darkGreen hover:text-black'
          >
            Follow Etherlink
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Main() {
  return (
    <Container className='flex flex-wrap justify-center'>
      <MainContent />
    </Container>
  )
}
