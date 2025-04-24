import React from 'react'
import Link from 'next/link'
import { TagKeys, TAGS_MAP } from '../../utils/airtable/ecosystem'

export interface ProjectCardProps {
  Logo: Array<{
    id: string
    url: string
    filename: string
    size: number
    type: string
  }>
  Project: string
  Description: string
  Tags: TagKeys[]
  Twitter?: string
  Website?: string
}

export const ProjectCard = ({
  Logo,
  Project,
  Description,
  Tags,
  Twitter,
  Website
}: ProjectCardProps) => {
  return (
    <div className='flex flex-col bg-lightBlack rounded-xl py-8 px-6 gap-6 justify-between'>
      <div className='flex items-center gap-4'>
        {Logo[0]?.url && (
          <img
            className='w-[50px] h-[50px] object-contain rounded-xl'
            src={Logo[0].url}
            alt={Project + ' Logo'}
          />
        )}
        <h1 className='font-bold text-white-50 text-xl'>{Project}</h1>
      </div>
      <p className='w-full text-gray-300 text-sm'>{Description}</p>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2 flex-wrap'>
          {Tags.map((category, index) => (
            <div
              key={index}
              className='bg-darkBlack text-gray-300 text-xs rounded p-2 text-center'
            >
              {TAGS_MAP[category]}
            </div>
          ))}
        </div>
        <div className='flex items-center gap-1'>
          {!!Twitter && (
            <Link href={Twitter} target='_blank'>
              <img
                className='rounded-lg p-2 bg-[#2f2f2f] hover:bg-[#373737]'
                src='/img/ecosystem/X.svg'
                alt='twitter'
              />
            </Link>
          )}
          {!!Website && (
            <Link href={Website} target='_blank'>
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
