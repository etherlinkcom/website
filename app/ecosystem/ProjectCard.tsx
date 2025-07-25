import React, { Dispatch, SetStateAction, useCallback } from 'react'
import Link from 'next/link'
import { TagKeys } from '../../utils/airtable/ecosystem'
import { useTagsMap } from '../../utils/airtable/TagsContext'

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
  setSelectedTags?: Dispatch<SetStateAction<TagKeys[]>>
  projectCardSelectedTag?: TagKeys | null
  setProjectCardSelectedTag?: Dispatch<SetStateAction<TagKeys | null>>
}

export const ProjectCard = ({
  Logo,
  Project,
  Description,
  Tags,
  Twitter,
  Website,
  Featured,
  hideLogo,
  setSelectedTags,
  projectCardSelectedTag,
  setProjectCardSelectedTag
}: ProjectCardProps) => {
  const TAGS_MAP = useTagsMap()

  const handleTagSelect = useCallback(
    (tag: TagKeys) => {
      if (
        projectCardSelectedTag === tag ||
        !setSelectedTags ||
        !setProjectCardSelectedTag
      ) {
        return
      }

      setSelectedTags(prev => {
        // if the tag is already selected, do nothing
        if (prev.includes(tag)) {
          return [...prev]
        }

        const withoutOld = projectCardSelectedTag
          ? prev.filter(t => t !== projectCardSelectedTag)
          : prev

        return withoutOld.includes(tag) ? withoutOld : [...withoutOld, tag]
      })
      setProjectCardSelectedTag(tag)
    },
    [projectCardSelectedTag, setSelectedTags, setProjectCardSelectedTag]
  )

  return (
    <div
      className='flex flex-col bg-grey-600 rounded-[28px] p-6 gap-4 border border-grey-500 backdrop-blur-md 
        focus:border focus:border-neonGreen-900 focus:bg-grey-500 hover:shadow-[0px_4px_52px_0px_rgba(0,0,0,0.41)]'
    >
      <div className='flex items-center gap-4'>
        {hideLogo ? (
          <></>
        ) : (
          Logo[0]?.url && (
            <img
              className='w-[60px] h-[60px] object-contain rounded-xl self-start'
              src={Logo[0].url}
              alt={Project + ' Logo'}
            />
          )
        )}
        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-grey-50 text-2xl'>{Project}</h1>
          <div className='flex items-center gap-2 flex-wrap'>
            {Featured && (
              <div className='bg-neonGreen-800 text-white-50 rounded-[44px] text-white text-xs py-1 px-2 text-center'>
                Featured
              </div>
            )}
            {Tags.map((category, index) => (
              <div
                key={index}
                className='bg-grey-400 text-white-50 rounded-[44px] text-white text-xs py-1 px-2 text-center hover:cursor-pointer'
                onClick={() => handleTagSelect(category)}
              >
                {TAGS_MAP[category]}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className='w-full text-black-100'>{Description}</p>
      <div className='flex items-end justify-between flex-1'>
        <div className='flex items-center gap-4'>
          {!!Website && (
            <Link href={Website} target='_blank'>
              <img
                className='rounded-lg p-2 bg-grey-900 hover:bg-[#373737]'
                src='/img/ecosystem/website.svg'
                alt='website'
              />
            </Link>
          )}
          {!!Twitter && (
            <Link href={Twitter} target='_blank'>
              <img
                className='rounded-lg p-2 bg-grey-900 hover:bg-[#373737]'
                src='/img/ecosystem/X - White.svg'
                alt='twitter'
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
