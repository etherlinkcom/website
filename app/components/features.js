import React from 'react'
import Container from './container'

export default function Features() {
  return (
    <Container>
      <div className='grid gap-10 lg:grid-cols-2 xl:grid-cols-3 -mb-4'>
        <div className='lg:col-span-2 xl:col-auto'>
          <div className='flex flex-col w-full h-full p-10 rounded-2xl bg-trueGray-800 shadow-md shadow-slate-400/40 hover:shadow-lg hover:shadow-darkGreen'>
            <h2 className='text-2xl mb-6 leading-normal text-darkGreen text-center'>
              Decentralized Sequencer
            </h2>
            <p className='text-2xl leading-normal text-center'>
              The <span className='text-darkGreen'>decentralized</span>{' '}
              sequencer reduces the risk of{' '}
              <span className='text-darkGreen'>centralised control</span> and{' '}
              <span className='text-darkGreen'>manipulation</span>.
            </p>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col w-full h-full p-10 rounded-2xl bg-trueGray-800 shadow-md shadow-slate-400/40 hover:shadow-lg hover:shadow-darkGreen'>
            <h2 className='text-2xl mb-6 leading-normal text-darkGreen text-center'>
              MEV Protection
            </h2>
            <p className='text-2xl leading-normal text-center'>
              Every year users lose{' '}
              <span className='text-darkGreen'>millions</span> of dollars,
              Etherlink solves that with{' '}
              <span className='text-darkGreen'>MEV protection</span>{' '}
              out-of-the-box.
            </p>
            <div className='mb-4'></div>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col w-full h-full p-10 rounded-2xl bg-trueGray-800 shadow-md shadow-slate-400/40 hover:shadow-lg hover:shadow-darkGreen'>
            <h2 className='text-2xl mb-6 leading-normal text-darkGreen text-center'>
              Very Low Fees
            </h2>
            <p className='text-2xl leading-normal text-center'>
              Etherlink has super low fees. How low? Think{' '}
              <span className='text-darkGreen'>$0.01</span> per transaction,{' '}
              <span className='text-darkGreen'>not</span> $20.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
