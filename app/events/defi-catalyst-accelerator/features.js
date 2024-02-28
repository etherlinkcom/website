import React from 'react'
import Image from 'next/image'

const FEATURE_CONTENT = [
  {
    title: 'Mentorship & Guidance',
    bodyText:
      'Targeted support from the Core DeFi team of the Tezos ecosystem and experienced mentors in the space. We will help you validate ideas, focus your time & resources, complement your team and eventually raise money from our network of VC partners.'
  },
  {
    title: '$200k Funding',
    bodyText:
      'Receive a potential investment of $200k designed to support you while you raise your seed round.'
  },
  {
    title: 'Expert Sessions',
    bodyText:
      'DeFi specific working sessions from UI/UX, Product Development, Core Engineering, Liquidity, Security & Legal experts of their respective fields.'
  },
  {
    title: 'Network Turbocharged',
    bodyText:
      'Mulitple in-person networking opportunities will be hosted for the benefit of the cohort, including an evening together with leading Asia-based Web3 investors, and meetups with the Web3 community in Singapore.'
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
    <div className='my-20'>
      <div className='mb-12'>
        <h1 className='text-3xl font-semibold mb-6'>
          DCA is a DeFi-focused accelerator program aiming to support startups
          (Builders/Developers) building on Etherlink / Tezos.
        </h1>
        <h1 className='text-3xl font-semibold'>
          The DCA begins with a 2-week in-person bootcamp in Singapore. The
          remaining 4 weeks are completed remotely.
        </h1>
      </div>

      <div className='grid gap-10 xl:grid-rows-2 xl:grid-cols-2 grid-rows-4 grid-cols-1 -mb-4'>
        {FEATURE_CONTENT.map((data, index) => (
          <FeatureBox key={index} {...data} />
        ))}
      </div>

      <div className='mt-20'>
        <h1 className='text-3xl font-semibold'>Who is DCA for?</h1>
        <h2 className='text-xl mt-6'>
          The program is open to all early-stage projects but we believe we can
          add the most value to founders at the Idea or Ideation stage!
        </h2>

        <div className='flex items-center justify-center w-full mt-10'>
          <Image
            src='/img/dca/timeline.png'
            width={1300}
            height={617}
            alt='DCA Timeline'
            loading='eager'
          />
        </div>

        <div className='mt-5'>
          <p className='text-2xl mt-10'>
            Through the DCA we want to bring to the community on-chain projects
            with a financial angle. This might include but is not limited to the
            following sectors.
          </p>
          <ul className='list-disc pl-5 mt-5 text-2xl'>
            {SECTORS.map((data, index) => (
              <li className='mb-1' key={index}>
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const FeatureBox = ({ title, bodyText }) => {
  return (
    <div className='flex flex-col border-2 p-7 rounded-2xl'>
      <h2 className='text-2xl leading-normal text-left mb-3'>{title}</h2>
      <p className='text-l leading-normal text-left'>{bodyText}</p>
    </div>
  )
}
