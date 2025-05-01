import type { Metadata } from 'next'
import { Hero } from './Hero'
import { Tutorials } from './Tutorials'
import { OnBoard } from './OnBoard'
import Link from 'next/link'
import Container from '../components/container'

export const metadata: Metadata = {
  title: 'Etherlink DeFi',
  description:
    'A decentralized & EVM compatible Layer-2 blockchain that looks after its users.'
}

const DefiPage = async () => {
  return (
    <div className='bg-grey-900'>
      <Hero />
      <Tutorials />
      <OnBoard />
      <Container className='pt-10'>
        <Cta />
      </Container>
    </div>
  )
}

export default DefiPage

const Cta = () => {
  return (
    <div
      className="flex flex-col md:flex-row w-full gap-6 mx-auto items-center px-12 py-10
            lg:flex-nowrap rounded-[32px] bg-[url('/CTA-Mobile.png')] md:bg-[url('/CTA-bg.png')] bg-cover"
    >
      <div className='flex-grow text-grey-900'>
        <h2 className='font-bold -tracking-[0.48px] text-[28px] md:text-[35px]'>
          Start Earning Today!
        </h2>
        <p className='mt-2 leading-normal text-grey-700'>
          Pick your strategy, onboard, and grow your portfolio
        </p>
      </div>

      <button
        className={`relative px-5 py-2.5 bg-[#1B1B1B] shadow-[0px_0px_6px_0px_rgba(51,232,142,0.40)] 
            rounded-3xl cursor-pointer overflow-hidden group w-full md:w-auto`}
        role='button'
      >
        <Link href={'/'} target='_blank'>
          <div className='flex justify-center items-center gap-2'>
            <span className='relative z-10 text-lg font-semibold text-neonGreen-200'>
              View strategies
            </span>
          </div>
          <span className='absolute inset-0 border-2 border-newGreen rounded-3xl opacity-0 group-hover:animate-circling'></span>
        </Link>
      </button>
    </div>
  )
}
