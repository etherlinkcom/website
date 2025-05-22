'use client'
import React, {
  ChangeEvent,
  useState,
  useEffect,
  useRef,
  KeyboardEvent
} from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Container from '../components/container'
import { ProjectCard } from './ProjectCard'
import { Search } from './Search'
import { FilterButton } from './FilterButton'
import { SortButton, SortOrder } from './SortButton'
import { Project, TagKeys, TAGS_MAP } from '../../utils/airtable/ecosystem'

export const ProjectList = ({ projects }: { projects: Project[] }) => {
  const router = useRouter()
  const params = useSearchParams()

  const [search, setSearch] = useState('')
  const [selectedTags, setSelectedTags] = useState<TagKeys[]>([])
  const [sortOrder, setSortOrder] = useState<SortOrder | null>(null)
  const [filterOpen, setFilterOpen] = useState(false)
  const [inited, setInited] = useState(false)
  const [visibleCount, setVisibleCount] = useState(6)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const q = params.get('search') ?? ''
    setSearch(q)
    setInited(true)
  }, [])

  useEffect(() => {
    if (!inited) return
    const sp = new URLSearchParams()
    if (search) sp.set('search', search)
    const qs = sp.toString()
    router.replace(`/ecosystem${qs ? `?${qs}` : ''}`, { scroll: false })
  }, [search, inited, router])

  const searched = React.useMemo(() => {
    if (!search.trim()) return projects
    const term = search.toLowerCase()
    return projects.filter(
      p =>
        p.Project.toLowerCase().includes(term) ||
        p.Description.toLowerCase().includes(term) ||
        p.Tags.some(t => TAGS_MAP[t].toLowerCase().includes(term))
    )
  }, [projects, search])

  const filtered = React.useMemo(() => {
    if (!selectedTags.length) return searched
    return searched.filter(p => p.Tags.some(t => selectedTags.includes(t)))
  }, [searched, selectedTags])

  const sorted = React.useMemo(() => {
    const arr = [...filtered]
    if (sortOrder === 'asc')
      return arr.sort((a, b) => a.Project.localeCompare(b.Project))
    if (sortOrder === 'desc')
      return arr.sort((a, b) => b.Project.localeCompare(a.Project))
    return arr
  }, [filtered, sortOrder])

  useEffect(() => {
    setVisibleCount(6)
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
            {sorted.slice(0, visibleCount).map((p, i) => (
              <ProjectCard key={p.Slug || i} {...p} />
            ))}
          </div>
          <div ref={sentinelRef} />
        </Container>
      </div>
    </>
  )
}
