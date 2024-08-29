import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from './container'
import { EtherlinkLogo } from './EtherlinkLogo'
import { X, Discord, GitHub } from './icons'

const NAVS = [
  { name: 'Blog', link: 'https://medium.com/@etherlink' },
  { name: 'Documentation', link: 'https://docs.etherlink.com' },
  {
    name: 'Brand Assets',
    link: 'https://drive.google.com/drive/folders/1DUhC05bVlISJ2i77kCNP_Tw-G5b48IRT?usp=sharing'
  }
]

export const Footer = () => {
  return (
    <Container className='relative flex flex-col pb-6 pt-[104px]'>
      <div
        className="block absolute top-0 left-1/2 -translate-x-1/2
          w-full h-full bg-[url('/img/home/gradient.svg')] bg-no-repeat bg-cover bg-top"
      />
      {/* top */}
      <div className='flex flex-col md:flex-row justify-between md:items-end border-b border-[#515151] pb-10 md:pb-6 z-50'>
        <div className='flex flex-col justify-start items-center md:items-start'>
          <EtherlinkLogo />
          <div className='flex flex-col md:flex-row mt-6 text-center gap-6 md:gap-0 hover:cursor-pointer'>
            {NAVS.map((nav, index) => {
              if (index === NAVS.length - 1) {
                return (
                  <Link href={nav.link} target='_blank'>
                    <p className='text-white hover:text-newGreen transition-colors duration-300'>
                      {nav.name}
                    </p>
                  </Link>
                )
              }
              return (
                <>
                  <Link href={nav.link} target='_blank'>
                    <p className='text-white hover:text-newGreen transition-colors duration-300'>
                      {nav.name}
                    </p>
                  </Link>
                  <p className='px-4 text-[#515151] hidden md:block'>|</p>
                </>
              )
            })}
          </div>
        </div>
        <div className='flex justify-center md:justify-end items-center gap-4 mt-6 md:mt-0 md:border-l md:border-[#515151] pl-4'>
          <Link
            href='https://discord.gg/etherlink'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Discord className='rounded bg-[#262626]' size={38} />
          </Link>
          <Link
            href='https://github.com/etherlinkcom'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHub className='rounded bg-[#262626]' size={38} />
          </Link>
          <Link
            href='https://twitter.com/etherlink'
            target='_blank'
            rel='noopener noreferrer'
          >
            <X className='rounded bg-[#262626]' size={38} />
          </Link>
        </div>
      </div>
      {/* bottom */}
      <div className='flex items-center flex-col-reverse md:flex-row justify-between pt-10 md:pt-6 gap-6 z-50'>
        <p className='text-[#9B9B9B] text-sm text-center max-w-64 md:max-w-full mx-auto md:mx-0'>
          © Copyright Tezos Foundation 2024. All Rights Reserved.
        </p>
        <div className='flex items-center text-[#9B9B9B] gap-4 justify-center'>
          <p className='text-sm '>Powered by</p>
          <Link href='https://tezos.com' target='_blank'>
            <Image
              width={92}
              height={32}
              src='/tezos-logo-gray.svg'
              alt='Tezos logo'
              className='hover:cursor-pointer'
            />
          </Link>
        </div>
      </div>
    </Container>
  )
}
