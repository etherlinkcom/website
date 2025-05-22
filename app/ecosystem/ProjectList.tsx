'use client'
import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Container from '../components/container'
import { ProjectCard } from './ProjectCard'
import { Search } from './Search'
import { FilterButton } from './FilterButton'
import { SortButton, SortOrder } from './SortButton'
import { Project, TagKeys, TAGS_MAP } from '../../utils/airtable/ecosystem'
import Cta from '../components/cta'

export const ProjectList = ({ projects }: { projects: Project[] }) => {
  const router = useRouter()
  const params = useSearchParams()

  const [search, setSearch] = useState('')
  const [selectedTags, setSelectedTags] = useState<TagKeys[]>([])
  const [sortOrder, setSortOrder] = useState<SortOrder | null>(null)
  const [filterOpen, setFilterOpen] = useState(false)
  const [inited, setInited] = useState(false)
  const [visibleCount, setVisibleCount] = useState(9)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const q = params.get('search') ?? ''
    setSearch(q)
    setInited(true)
  }, [params])

  useEffect(() => {
    if (!inited) return
    const sp = new URLSearchParams()
    if (search) sp.set('search', search)
    router.replace(`/ecosystem${sp.toString() ? `?${sp.toString()}` : ''}`, {
      scroll: false
    })
  }, [search, inited, router])

  const searched = useMemo(() => {
    if (!search.trim()) return projects
    const term = search.toLowerCase()
    return projects.filter(
      p =>
        p.Project.toLowerCase().includes(term) ||
        p.Description.toLowerCase().includes(term) ||
        p.Tags.some(t => TAGS_MAP[t].toLowerCase().includes(term))
    )
  }, [projects, search])

  const filtered = useMemo(() => {
    if (!selectedTags.length) return searched
    return searched.filter(p => p.Tags.some(t => selectedTags.includes(t)))
  }, [searched, selectedTags])

  const sorted = useMemo(() => {
    const arr = [...filtered]
    if (sortOrder === 'asc')
      return arr.sort((a, b) => a.Project.localeCompare(b.Project))
    if (sortOrder === 'desc')
      return arr.sort((a, b) => b.Project.localeCompare(a.Project))
    return arr
  }, [filtered, sortOrder])

  useEffect(() => {
    setVisibleCount(9)
  }, [search, selectedTags, sortOrder])

  useEffect(() => {
    if (!sentinelRef.current) return
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && visibleCount < sorted.length) {
          setVisibleCount(prev => Math.min(prev + 6, sorted.length))
        }
      },
      { root: null, rootMargin: '-50px' }
    )
    obs.observe(sentinelRef.current)
    return () => obs.disconnect()
  }, [sorted, visibleCount])

  const firstBatch = sorted.slice(0, Math.min(visibleCount, 9))
  const secondBatch = visibleCount > 9 ? sorted.slice(9, visibleCount) : []

  return (
    <>
      <Container className='mb-6 md:mb-14'>
        <Search search={search} updateSearch={setSearch} />
      </Container>
      <div className='bg-grey-800 rounded-tl-[60px] rounded-tr-[60px] py-8 md:py-12'>
        <Container>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4'>
            <h1 className='text-[23px] md:text-[35px] font-bold text-white-50'>
              All Projects
            </h1>
            <div className='flex gap-[12px] md:gap-[10px]'>
              <FilterButton
                selected={selectedTags}
                onSelect={setSelectedTags}
                onOpenChange={open => setFilterOpen(open)}
              />
              <div className={`${filterOpen ? 'hidden' : 'block'} md:block`}>
                <SortButton selected={sortOrder} onSelect={setSortOrder} />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
            {firstBatch.map((p, i) => (
              <ProjectCard key={p.Slug || i} {...p} />
            ))}

            <div className='col-span-1 sm:col-span-2 xl:col-span-3'>
              <Cta
                headerText='List a project on the Etherlink ecosystem'
                descriptionText='Submit your project to be listed on the Etherlink ecosystem today or request an update to an existing entry.'
                primaryButton={{
                  text: 'Submit a Project',
                  link: 'https://tt-tezos.typeform.com/to/Z48NYwJr'
                }}
              />
            </div>

            {secondBatch.map((p, i) => (
              <ProjectCard key={p.Slug || 9 + i} {...p} />
            ))}
          </div>

          <div ref={sentinelRef} />
        </Container>
      </div>
    </>
  )
}
