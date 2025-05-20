'use client'
import React, { useState } from 'react'
import Container from '../components/container'
import { ProjectCard } from './ProjectCard'
import { Project } from '../../utils/airtable/ecosystem'

export const ProjectList = ({ projects }: { projects: Project[] }) => {
  const [numToShow, setNumToShow] = useState(18)

  const totalProjects = projects.length

  const handleClick = () =>
    setNumToShow((prev: number) => {
      const remaining = totalProjects - prev
      if (remaining > 6) return prev + 6
      return prev + remaining
    })

  return (
    <Container>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-[23px] md:text-[35px] font-bold text-white-50'>
          All Projects
        </h1>
        <div className='flex gap-[12px] md:gap-[10px]'>
          <FilterButton onClick={() => {}} />
          <SortButton onClick={() => {}} />
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8'>
        {projects.slice(0, numToShow).map((p, index) => (
          <ProjectCard {...p} key={index} />
        ))}
      </div>
      <p className='text-center text-sm mb-4'>
        Displaying <span className='font-semibold'>{numToShow}</span> of{' '}
        <span className='font-semibold'>{totalProjects}</span> projects
      </p>
      <div className='flex justify-center'>
        {numToShow < totalProjects && <LoadMoreButton onClick={handleClick} />}
      </div>
    </Container>
  )
}

const FilterButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={`relative p-3 md:px-4 md:py-3 bg-newGreen shadow-[0px_0px_6px_0px_rgba(255,255,255,0.40)] 
        rounded-3xl cursor-pointer overflow-hidden group `}
      role='button'
    >
      <div className='flex justify-center gap-2 md:gap-2.5'>
        <span className='block md:hidden relative z-10 text-grey-500 font-semibold -tracking-[0.32px]'>
          Filters
        </span>
        <span className='hidden md:block relative z-10 text-grey-500 font-semibold -tracking-[0.32px]'>
          Project filters
        </span>
        <img src='/img/ecosystem/BiSliderAlt.svg' alt='filter icon' />
      </div>
    </button>
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
