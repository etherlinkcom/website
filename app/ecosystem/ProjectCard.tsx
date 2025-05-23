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
  Featured: boolean
  hideLogo?: boolean
}

export const ProjectCard = ({
  Logo,
  Project,
  Description,
  Tags,
  Twitter,
  Website,
  Featured,
  hideLogo
}: ProjectCardProps) => {
  return (
    <div
      className='flex flex-col bg-grey-600 rounded-[28px] p-6 gap-4 justify-between border border-grey-500 backdrop-blur-md 
        focus:border focus:border-neonGreen-900 focus:bg-grey-500 hover:shadow-[0px_4px_52px_0px_rgba(0,0,0,0.41)]'
    >
      <div className='flex items-center gap-4'>
        {hideLogo ? (
          <></>
        ) : (
          Logo[0]?.url && (
            <img
              className='w-[60px] h-[60px] object-contain rounded-xl'
              src={Logo[0].url}
              alt={Project + ' Logo'}
            />
          )
        )}
        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-grey-50 text-2xl'>{Project}</h1>
          <div className='flex items-center gap-2 flex-wrap'>
            {Featured && (
              <div className='bg-neonGreen-800 text-white-50 rounded-[44px] text-white text-xs p-2 text-center'>
                Featured
              </div>
            )}
            {Tags.map((category, index) => (
              <div
                key={index}
                className='bg-grey-400 text-white-50 rounded-[44px] text-white text-xs p-2 text-center'
              >
                {TAGS_MAP[category]}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className='w-full text-black-100'>{Description}</p>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          {!!Twitter && (
            <Link href={Twitter} target='_blank'>
              <img
                className='rounded-lg p-2 bg-grey-900 hover:bg-[#373737]'
                src='/img/ecosystem/X.svg'
                alt='twitter'
              />
            </Link>
          )}
          {!!Website && (
            <Link href={Website} target='_blank'>
              <img
                className='rounded-lg p-2 bg-grey-900 hover:bg-[#373737]'
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
