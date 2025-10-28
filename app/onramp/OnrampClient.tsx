'use client'

import { useRef, useLayoutEffect } from 'react'
import Link from 'next/link'
import Container from '../components/container'
import { OnBoardCard, OnBoardCardProps } from '../components/OnBoardCard'

const ONBOARD_DATA: OnBoardCardProps[] = [
  {
    org: 'Centralized Exchange',
    title: 'Gate',
    description: 'Buy and transfer $XTZ to Etherlink',
    link: 'https://www.gate.io/',
    image: '/img/defi/Gate.webp'
  },
  {
    org: 'Centralized Exchange',
    title: 'KuCoin',
    description: 'Buy and transfer $XTZ to Etherlink',
    link: 'https://www.kucoin.com/',
    image: '/img/defi/kucoin-logo.svg'
  },
  {
    org: 'Centralized Exchange',
    title: 'AscendEX',
    description: 'Buy and transfer $XTZ to Etherlink',
    link: 'https://www.ascendex.com/',
    image: '/img/defi/ascendex-logo.webp'
  },
  {
    org: 'Tezos',
    title: 'Tezos Bridge',
    description: 'Bridge your assets to Etherlink from Tezos L1',
    link: 'https://bridge.etherlink.com/tezos/',
    image: '/img/defi/etherlink-b.webp'
  },
  {
    org: 'EVM Bridge',
    description: 'Bridge your assets to Etherlink from other EVM chains',
    title: 'Etherlink EVM Bridge',
    link: 'https://bridge.etherlink.com/evm/',
    image: '/img/defi/etherlink-b.webp'
  },
  {
    org: 'Swap Bridge',
    title: 'Jumper',
    description: 'User-friendly cross-chain swap and bridge aggregator built on Li.Fi, supporting 25+ networks and major DEXs',
    link: 'https://jumper.exchange/',
    image: '/img/defi/jumper-logo.png'
  },
  {
    org: 'Swap Bridge',
    title: 'KyberSwap',
    description: 'Cross-chain decentralized trading solution that helps users find the best swap rates',
    link: 'https://kyberswap.com/cross-chain?from=1&to=42793&tokenIn=eth&tokenOut=xtz',
    image: '/img/defi/kyberswap-logo.png'
  },
  {
    org: 'Onramp',
    title: 'Transak',
    description: 'Buy $XTZ using fiat',
    link: 'https://global.transak.com/',
    image: '/img/defi/Transak.webp'
  },
  {
    org: 'Onramp',
    title: 'Banxa',
    description: 'Buy $XTZ using fiat',
    link: 'https://checkout.banxa.com/',
    image: '/img/defi/banxa-logo.png'
  }
]

export const OnrampClient = () => {


  return (
    <div className='relative'>
      <Container className='py-10 md:py-24'>
        <img
          className='absolute bottom-[850px] md:bottom-[220px] -left-[250px] md:-left-[250px] max-w-[960px] max-h-[560px] md:opacity-80 z-[50] pointer-events-none'
          src='/img/defi/gradient.svg'
          alt='bg gradient'
          draggable={false}
        />
        <div className='pb-14 text-start md:text-center'>
          <p className='text-[28px] md:text-4xl font-bold leading-[48px] text-neonGreen-500 mb-1 md:mb-2'>
            Many easy <span className='text-white-50'>ways to onboard</span>
          </p>
          <p className='text-grey-200 text-lg md:text-xl -tracking-[0.4px]'>
            Transfer from a CEX, bridge assets, or use fiat
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {ONBOARD_DATA.map(item => (
            <OnBoardCard {...item} key={item.org} />
          ))}
        </div>
        <div className='mt-12 pb-14 text-start md:text-center'>
          <p className='text-xs leading-normal text-grey-200 mb-1 md:mb-2'>
            Please check each site for the applicable terms of use and privacy policy details.
            One or more of the following limitations may apply &mdash; identity verification, transaction fees, purchase limits, country restrictions.
          </p>
        </div>
      </Container>
    </div>
  )
}
