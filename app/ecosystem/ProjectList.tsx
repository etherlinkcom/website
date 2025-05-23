'use client'
import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Container from '../components/container'
import { ProjectCard } from './ProjectCard'
import { Search } from './Search'
import { FilterButton } from './FilterButton'
import { SortButton, SortOrder } from './SortButton'
import { Project, TagKeys, TAGS_MAP } from '../../utils/airtable/ecosystem'
import { Cta } from './Cta'

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
    const fParam = params.get('filters')
    const f = fParam
      ? (fParam.split(',') as TagKeys[]).filter(t => TAGS_MAP[t])
      : []
    const s = params.get('sort')
    setSearch(q)
    setSelectedTags(f)
    setSortOrder(s === 'asc' || s === 'desc' || s === 'featured' ? s : null)
    setInited(true)
  }, [params])

  useEffect(() => {
    if (!inited) return
    const sp = new URLSearchParams()
    if (search) sp.set('search', search)
    if (selectedTags.length) sp.set('filters', selectedTags.join(','))
    if (sortOrder) sp.set('sort', sortOrder)
    router.replace(`/ecosystem${sp.toString() ? `?${sp.toString()}` : ''}`, {
      scroll: false
    })
  }, [search, selectedTags, sortOrder, inited, router])

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
    let arr = [...filtered]
    if (sortOrder === 'featured') {
      arr.sort((a, b) => {
        if (a.Featured === b.Featured) return a.Project.localeCompare(b.Project)
        return a.Featured ? -1 : 1
      })
    } else if (sortOrder === 'asc') {
      arr.sort((a, b) => a.Project.localeCompare(b.Project))
    } else if (sortOrder === 'desc') {
      arr.sort((a, b) => b.Project.localeCompare(a.Project))
    }
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
        <Search
          search={search}
          updateSearch={setSearch}
          featuredProjects={projects.filter(p => p.Featured)}
        />
      </Container>
      <div className='bg-grey-800 rounded-tl-[60px] rounded-tr-[60px] py-8 md:py-12'>
        <Container>
          <div className='flex items-center justify-between mb-4 gap-4'>
            <h1 className='text-[23px] md:text-[35px] font-bold text-white-50'>
              All Projects
            </h1>
            <div className='flex items-center gap-[12px] md:gap-[10px]'>
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
              <Cta />
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
