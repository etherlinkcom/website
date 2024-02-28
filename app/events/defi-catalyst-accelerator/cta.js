import Link from 'next/link'

export default function Cta() {
  return (
    <div className='flex flex-col mt-16'>
      <h1 className='text-3xl font-semibold'>
        DCA <i>with</i> us
      </h1>
      <h2>
        Join our community of crypto founders and the wider Etherlink community.
      </h2>
      <div className='mt-6 mb-4'>
        <Link
          href='https://tt-tezos.typeform.com/to/EURHmEhg'
          target='_blank'
          rel='noopener'
          className='inline-block py-3 w-full md:w-1/3 lg:w-1/6 text-lg font-medium text-center text-black bg-white border-solid border-2 border-white rounded-md px-7 lg:px-10 lg:py-4 hover:bg-darkGreen hover:border-darkGreen hover:text-black mt-3'
        >
          Apply Now
        </Link>
      </div>
    </div>
  )
}
