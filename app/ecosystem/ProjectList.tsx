'use client'
import React, { useState, useMemo } from 'react'
import Container from '../components/container'
import { ProjectCard } from './ProjectCard'
import { Project } from '../../utils/airtable/ecosystem'
import { TagKeys } from '../../utils/airtable/ecosystem'
import { FilterButton } from './FilterButton'

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
