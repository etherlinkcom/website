import React from 'react'
import Link from 'next/link'

type Category =
  | 'infra'
  | 'bridge'
  | 'dev-tools'
  | 'etherlink-infra'
  | 'data-science'
  | 'etherlink-dev-sdk'
  | 'oracle'
  | 'defi'
  | 'gaming'
  | 'payment'
  | 'dapp'
  | 'gamefi'
  | 'nfts'
  | 'social'
  | 'ecosystem-partner'
  | 'launchpad'
  | 'rwa'

export interface ProjectCardProps {
  image: string
  title: string
  description: string
  categories: Category[]
  twitter?: string
  website?: string
}

export const ProjectCard = ({
  image,
  title,
  description,
  categories,
  twitter,
  website
}: ProjectCardProps) => {
  return (
    <div className='flex flex-col bg-lightBlack rounded-xl py-8 px-6 gap-6 justify-between'>
      <div className='flex items-center gap-4'>
        <img
          className='w-[50px] h-[50px] object-contain rounded-xl'
          src={image}
          alt={title}
        />
        <h1 className='font-bold text-white text-xl'>{title}</h1>
      </div>
      <p className='w-full text-gray-300 text-sm'>{description}</p>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          {categories.map((category, index) => (
            <CategoryBox category={category} key={index} />
          ))}
        </div>
        <div className='flex items-center gap-1'>
          {!!twitter && (
            <Link href={twitter} target='_blank'>
              <img
                className='rounded-lg p-2 bg-[#2f2f2f] hover:bg-[#373737]'
                src='/img/ecosystem/X.svg'
                alt='twitter'
              />
            </Link>
          )}
          {!!website && (
            <Link href={website} target='_blank'>
              <img
                className='rounded-lg p-2 bg-[#2f2f2f] hover:bg-[#373737]'
                src='/img/ecosystem/external-icon.svg'
                alt='website'
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

const convertCategory = (category: Category) => {
  switch (category) {
    case 'bridge':
      return 'Bridge'
    case 'infra':
      return 'Infra'
    case 'dev-tools':
      return 'Dev Tools'
    case 'etherlink-infra':
      return 'Etherlink Infra'
    case 'data-science':
      return 'Data Science'
    case 'etherlink-dev-sdk':
      return 'Etherlink dev sdk'
    case 'social':
      return 'Social'
    case 'oracle':
      return 'Oracle'
    case 'dapp':
      return 'dApp on Etherlink'
    case 'defi':
      return 'DeFi'
    case 'payment':
      return 'Payment'
    case 'gamefi':
      return 'Gamefi on Etherlink'
    case 'nfts':
      return 'NFTs'
    case 'gaming':
      return 'Gaming'
    case 'ecosystem-partner':
      return 'Ecosystem Partner'
    case 'launchpad':
      return 'Launchpad'
    case 'rwa':
      return 'RWA'
  }
}

export const CategoryBox = ({ category }: { category: Category }) => {
  return (
    <div className='bg-darkBlack text-gray-300 text-xs rounded p-2 text-center'>
      {convertCategory(category)}
    </div>
  )
}
