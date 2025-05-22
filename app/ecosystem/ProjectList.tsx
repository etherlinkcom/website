'use client'
import React, { useState, useMemo, useEffect, useRef } from 'react'
import Container from '../components/container'
import { ProjectCard } from './ProjectCard'
import { Project } from '../../utils/airtable/ecosystem'
import { TagKeys, TAGS_MAP } from '../../utils/airtable/ecosystem'

export const ProjectList = ({ projects }: { projects: Project[] }) => {
  const [selectedTags, setSelectedTags] = useState<TagKeys[]>([])

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects
    return projects.filter(p => p.Tags.some(tag => selectedTags.includes(tag)))
  }, [projects, selectedTags])

  return (
    <Container>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-[23px] md:text-[35px] font-bold text-white-50'>
          All Projects
        </h1>
        <div className='flex gap-[12px] md:gap-[10px]'>
          <FilterButton selected={selectedTags} onSelect={setSelectedTags} />
          <SortButton onClick={() => {}} />
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8'>
        {filteredProjects.map((p, index) => (
          <ProjectCard {...p} key={index} />
        ))}
      </div>
    </Container>
  )
}

type FilterButtonProps = {
  selected: TagKeys[]
  onSelect: (tags: TagKeys[]) => void
}

const FilterButton = ({ selected, onSelect }: FilterButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const items = useMemo(
    () =>
      (Object.keys(TAGS_MAP) as TagKeys[]).map(value => ({
        value,
        label: TAGS_MAP[value],
        checked: selected.includes(value)
      })),
    [selected]
  )

  return (
    <div ref={ref} className='relative inline-block text-left z-[999]'>
      <button
        onClick={() => setIsOpen(v => !v)}
        className={`
          relative p-3 md:px-4 md:py-3 bg-newGreen
          shadow-[0px_0px_6px_0px_rgba(255,255,255,0.40)]
          rounded-3xl cursor-pointer overflow-hidden group
        `}
        aria-expanded={isOpen}
      >
        <div className='flex justify-center gap-2 md:gap-2.5 items-center'>
          <span className='block md:hidden relative z-10 text-grey-500 font-semibold -tracking-[0.32px]'>
            Filters
          </span>
          <span className='hidden md:block relative z-10 text-grey-500 font-semibold -tracking-[0.32px]'>
            Project filters
          </span>
          <img src='/img/ecosystem/BiSliderAlt.svg' alt='filter icon' />
        </div>
      </button>

      {isOpen && (
        <div
          className={`
            absolute right-0 mt-2
            flex flex-col items-start
            w-[250px] p-2
            rounded-[24px] border border-grey-400
            bg-grey-900
            z-50
          `}
        >
          {items.map(item => (
            <button
              key={item.value}
              onClick={() => {
                const next = item.checked
                  ? selected.filter(v => v !== item.value)
                  : [...selected, item.value]
                onSelect(next)
              }}
              className={`
                w-full text-left px-3 py-3
                flex justify-between items-center
                text-gray-100 text-sm
                ${item.checked ? 'font-bold' : ''}
              `}
            >
              <span>{item.label}</span>
              {item.checked && (
                <svg
                  className='w-4 h-4 text-white-100'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293
                       a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8
                       a1 1 0 000-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const SortButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={`relative p-3 md:px-4 md:py-3 bg-[#1B1B1B] shadow-[0px_0px_6px_0px_rgba(51,232,142,0.40)] 
        rounded-3xl cursor-pointer overflow-hidden group`}
      role='button'
    >
      <div className='flex justify-center gap-2'>
        <span className='hidden md:block relative z-10 text-lg font-semibold text-neonGreen-500'>
          Sort
        </span>
        <img src='/img/ecosystem/sort-icon.svg' alt='sort icon' />
      </div>
    </button>
  )
}

const LoadMoreButton = ({ onClick }: { onClick: () => void }) => {
  const [hover, setHover] = useState(false)

  return (
    <button
      onClick={onClick}
      className='flex items-center gap-1 border border-white-50 rounded-xl px-5 py-2 h-[48px]
        text-base font-semibold hover:bg-lightGreen hover:text-black hover:border-lightGreen transition-all duration-300'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Load more{' '}
      <img
        src={hover ? '/load-black.svg' : '/load-white.svg'}
        alt='load more'
        className='w-5'
      />
    </button>
  )
}
