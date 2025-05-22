'use client'
import React, { useState, useMemo } from 'react'
import Container from '../components/container'
import { ProjectCard } from './ProjectCard'
import { Project, TagKeys } from '../../utils/airtable/ecosystem'
import { FilterButton } from './FilterButton'
import { SortButton, SortOrder } from './SortButton'

export const ProjectList = ({ projects }: { projects: Project[] }) => {
  const [selectedTags, setSelectedTags] = useState<TagKeys[]>([])
  const [sortOrder, setSortOrder] = useState<SortOrder | null>(null)
  const [filterOpen, setFilterOpen] = useState(false)

  // 1) Filter by tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects
    return projects.filter(p => p.Tags.some(tag => selectedTags.includes(tag)))
  }, [projects, selectedTags])

  // 2) Sort the filtered list
  const sortedProjects = useMemo(() => {
    const list = [...filteredProjects]
    if (sortOrder === 'asc') {
      return list.sort((a, b) => a.Project.localeCompare(b.Project))
    }
    if (sortOrder === 'desc') {
      return list.sort((a, b) => b.Project.localeCompare(a.Project))
    }
    return list
  }, [filteredProjects, sortOrder])

  return (
    <div className='bg-grey-800 rounded-tl-[60px] rounded-tr-[60px] py-8 md:py-12'>
      <Container>
        <div className='flex items-center justify-between mb-8 '>
          <h1 className='text-[23px] md:text-[35px] font-bold text-white-50'>
            All Projects
          </h1>
          <div className='relative flex gap-[12px] md:gap-[10px]'>
            <FilterButton
              selected={selectedTags}
              onSelect={setSelectedTags}
              onOpenChange={setFilterOpen}
            />
            <div className={`${filterOpen ? 'hidden' : 'block'} md:block`}>
              <SortButton selected={sortOrder} onSelect={setSortOrder} />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8'>
          {sortedProjects.map((p, index) => (
            <ProjectCard {...p} key={index} />
          ))}
        </div>
      </Container>
    </div>
  )
}
