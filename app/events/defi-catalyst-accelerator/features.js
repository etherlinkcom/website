import React from 'react'
import Image from 'next/image'

const FEATURE_CONTENT = [
  {
    title: 'Mentorship & Guidance',
    text: 'Targeted support from the Core DeFi team of the Tezos ecosystem and experienced mentors in the space. We will help you validate ideas, focus your time & resources, complement your team and eventually raise money from our network of VC partners.'
  },
  {
    title: '$200k Funding',
    text: 'Receive a potential investment of $200k designed to support you while you raise your seed round.'
  },
  {
    title: 'Expert Sessions',
    text: 'DeFi specific working sessions from UI/UX, Product Development, Core Engineering, Liquidity, Security & Legal experts of their respective fields.'
  },
  {
    title: 'Network Turbocharged',
    text: 'Mulitple in-person networking opportunities will be hosted for the benefit of the cohort, including an evening together with leading Asia-based Web3 investors, and meetups with the Web3 community in Singapore.'
  }
]

const SECTORS = [
  'User-Friendly Web 2.5 DeFi Platforms / Crypto Neobanks',
  'Digital Asset Management Platform / Automated Strategy Vaults',
  'Sports Betting',
  'Real World Assets (RWA)',
  'Innovative Trading Marketplaces'
]

export default function Features() {
  return (
    <div className='flex flex-col py-10 md:py-20'>
      <div className='mb-10 md:mb-20 w-max-auto md:w-3/4 text-center self-center'>
        <h1 className='text-xl md:text-2xl mb-6'>
          DCA is a DeFi-focused accelerator program aiming to support startups
          (Builders/Developers) building on Etherlink.
        </h1>
        <h1 className='text-xl md:text-2xl'>
          The DCA begins with a 2-week in-person bootcamp in Singapore. The
          remaining 4 weeks are completed remotely.
        </h1>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 mb-4'>
        {FEATURE_CONTENT.map((data, index) => (
          <Box key={index} {...data} />
        ))}
      </div>

      <div className='mt-10 md:mt-20'>
        <div className='flex flex-col'>
          <h1 className='text-2xl md:text-3xl text-center font-semibold'>
            Who is DCA for?
          </h1>
          <h2 className='text-lg md:text-2xl text-center mt-6 w-3/4 self-center'>
            The program is open to all early-stage projects but we believe we
            can add the most value to founders at the Idea or Ideation stage!
          </h2>
        </div>

        <div className='flex items-center justify-center w-full my-7 md:my-16'>
          <Image
            src='/img/dca/timeline.png'
            width={1300}
            height={617}
            alt='DCA Timeline'
            loading='eager'
          />
        </div>

        <div className='flex flex-col md:flex-row gap-6 md:gap-0'>
          <p className='text-xl md:text-2xl md:w-1/2 md:pr-20'>
            Through the DCA we want to bring to the community on-chain projects
            with a financial angle. This might include but is not limited to the
            following sectors.
          </p>
          <ul className='list-disc pl-5 text-2xl'>
            {SECTORS.map((data, index) => (
              <li className='text-lg md:text-2xl mb-1' key={index}>
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const Box = ({ title, text }) => {
  return (
    <div className='p-8 rounded-2xl bg-neutral-800 shadow-md shadow-slate-400/40 hover:shadow-lg hover:shadow-darkGreen'>
      <h2 className='text-xl md:text-2xl leading-normal text-darkGreen text-center mb-6'>
        {title}
      </h2>
      <p className='text-md md:text-lg leading-normal text-center'>{text}</p>
    </div>
  )
}
