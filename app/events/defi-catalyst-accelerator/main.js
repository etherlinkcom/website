import Image from 'next/image'
import Link from 'next/link'

export default function Main() {
  return (
    <div className='flex flex-col items-center justify-between xl:flex-row w-full mb-10'>
      <div className='flex items-center justify-center xl:mr-12'>
        <Image
          src='/img/dca/DCA_Hero_Etherlink_02.png'
          width='600'
          height='617'
          className={'object-cover'}
          alt='DCA Hero Image'
          loading='eager'
        />
      </div>
      <div className='flex flex-col items-center justify-center xl:w-1/2 max-w-2xl text-center mt-12 xl:mt-0'>
        <h2 className='text-md text-slate-400 mb-2'>
          Applications open until the 31st of March 2024
        </h2>
        <h1 className='text-4xl font-bold mb-2'>
          DeFi Catalyst <span className='text-darkGreen'>Accelerator</span>
        </h1>
        <h2 className='text-xl text-slate-400 font-semibold'>
          Exceptional founders driving REAL DeFi innovation.
        </h2>
        <div className='flex flex-row justify-between sm:w-3/4 space-x-4 mt-6'>
          <Link
            href='https://tt-tezos.typeform.com/to/EURHmEhg'
            target='_blank'
            rel='noopener'
            className='inline-block py-3 w-full sm:w-1/2 text-lg font-medium text-center text-black bg-white border-solid border-2 border-white rounded-md px-7 lg:px-10 lg:py-4 hover:bg-darkGreen hover:border-darkGreen hover:text-black mt-3'
          >
            Apply Now
          </Link>
          <Link
            href='#schedule'
            rel='noopener'
            className='flex items-center justify-center py-3 w-full sm:w-1/2 text-lg font-medium text-center text-white border-solid border-2 border-white rounded-md px-7 lg:px-6 lg:py-4 hover:bg-darkGreen hover:border-darkGreen hover:text-black mt-3'
          >
            Schedule
          </Link>
        </div>
      </div>
    </div>
  )
}
