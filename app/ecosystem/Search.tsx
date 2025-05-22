'use client'
import React, {
  ChangeEvent,
  useState,
  useEffect,
  useRef,
  KeyboardEvent,
  useCallback
} from 'react'
import { Project } from '../../utils/airtable/ecosystem'
import { ProjectCard } from './ProjectCard'

type SearchProps = {
  search: string
  updateSearch: (newTerm: string) => void
  featuredProjects?: Project[]
}

const TRENDING = ['Dev tools', 'Infrastructure', 'Gaming', 'Payments', 'NFTs']

export const Search = ({
  search,
  updateSearch,
  featuredProjects
}: SearchProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const drawerInputRef = useRef<HTMLInputElement>(null)

  const toggleBodyScroll = useCallback((disable: boolean) => {
    document.documentElement.style.overflow = disable ? 'hidden' : 'auto'
  }, [])

  useEffect(() => {
    toggleBodyScroll(drawerOpen)
    return () => toggleBodyScroll(false)
  }, [drawerOpen])

  useEffect(() => {
    if (drawerOpen) {
      drawerInputRef.current?.focus()
    }
  }, [drawerOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setDrawerOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleDrawerKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setDrawerOpen(false)
    }
  }

  const handleTrendingClick = (term: string) => {
    updateSearch(term)
    setDrawerOpen(false)
  }

  return (
    <>
      {/* MOBILE: readonly trigger */}
      <div className='relative w-full md:hidden my-[20px]'>
        <input
          readOnly
          value={search}
          placeholder='What projects are you looking for?'
          onClick={() => setDrawerOpen(true)}
          className='
            w-full bg-transparent
            border-[2px] border-grey-200
            rounded-full py-[13px] px-[24px]
            text-white placeholder-grey-200
            focus:outline-none transition
          '
        />
        <div className='absolute inset-y-0 right-6 flex items-center pointer-events-none'>
          <svg
            className='w-5 h-5 text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-4.35-4.35m0 0A7.5 7.5 0 
                 103.5 3.5a7.5 7.5 0 0013.15 13.15z'
            />
          </svg>
        </div>
      </div>

      {/* DESKTOP: inline input + trending */}
      <div className='hidden md:block'>
        <div className='relative w-full'>
          <input
            type='text'
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateSearch(e.target.value)
            }
            placeholder='What projects are you looking for?'
            className='
              w-full bg-transparent
              border-[2px] border-grey-200
              rounded-full py-[13px] px-[24px]
              text-white placeholder-grey-200
              focus:outline-none focus:border-grey-200 focus:ring-0 focus-visible:ring-0
            '
          />
          <div className='absolute inset-y-0 right-6 flex items-center pointer-events-none'>
            <svg
              className='w-5 h-5 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-4.35-4.35m0 0A7.5 7.5 0 
                   103.5 3.5a7.5 7.5 0 0013.15 13.15z'
              />
            </svg>
          </div>
        </div>
        <div className='flex gap-10 items-center mt-4'>
          <h3 className='text-grey-100 text-lg font-semibold'>
            Trending searches
          </h3>
          <div className='flex flex-wrap gap-3'>
            {TRENDING.map(term => (
              <button
                key={term}
                onClick={() => updateSearch(term)}
                className='
                  text-sm text-grey-50 px-4 py-3
                  rounded-full bg-grey-400 hover:bg-grey-500 transition
                '
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {drawerOpen && (
        <div className='fixed inset-0 z-[1000] md:hidden flex overflow-y-scroll bg-grey-900'>
          <div className='relative inset-y-0 right-0 w-full p-4 transition-transform duration-300'>
            <button
              onClick={() => {
                setDrawerOpen(false)
                console.log('click')
              }}
              className='absolute top-4 right-4 text-white text-2xl leading-none z-10'
            >
              ×
            </button>
            <div className='relative w-full mb-6'>
              <input
                ref={drawerInputRef}
                type='text'
                value={search}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateSearch(e.target.value)
                }
                onKeyDown={handleDrawerKey}
                className='
                  w-full bg-transparent
                  border-[2px] border-grey-200 mt-[60px]
                  rounded-full py-[13px] px-[24px]
                  text-white placeholder-grey-200
                  focus:outline-none focus:border-grey-200 focus:ring-0 focus-visible:ring-0
                '
              />
              <div className='absolute inset-y-0 right-6 top-14 flex items-center pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-4.35-4.35m0 0A7.5 7.5 0 
                       103.5 3.5a7.5 7.5 0 0013.15 13.15z'
                  />
                </svg>
              </div>
            </div>
            <h3 className='text-[#EDEDED] font-bold px-[13px] py-[13px]'>
              Trending searches
            </h3>
            <div className='flex flex-col flex-wrap gap-3'>
              {TRENDING.map(term => (
                <button
                  key={term}
                  onClick={() => handleTrendingClick(term)}
                  className='text-[#EDEDED] px-[13px] py-[13px] text-start text-sm'
                >
                  {term}
                </button>
              ))}
            </div>
            {featuredProjects?.length && (
              <div className='mt-4 pb-10'>
                <h3 className='text-[#EDEDED] font-bold px-[13px] pt-[13px] mb-[30px]'>
                  Featured projects
                </h3>
                <div className='flex flex-col gap-4'>
                  {featuredProjects.map(p => (
                    <ProjectCard {...p} hideLogo key={p.Project} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
