import React, { useState, useRef, useEffect, useMemo } from 'react'
import { TagKeys, TAGS_MAP, keyForTag } from '../../utils/airtable/ecosystem'

type FilterButtonProps = {
  selected: TagKeys[]
  onSelect: (tags: TagKeys[]) => void
  onOpenChange?: (open: boolean) => void
  search: string
  updateSearch: (newTerm: string) => void
}

export const FilterButton = ({
  selected,
  onSelect,
  onOpenChange,
  search,
  updateSearch
}: FilterButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const toggleOpen = () => {
    setIsOpen(prev => {
      const next = !prev
      onOpenChange?.(next)
      return next
    })
  }

  // disable body scroll only when mobile drawer is open
  useEffect(() => {
    const lock = () => {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    }
    const unlock = () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }

    if (isOpen && window.innerWidth < 768) {
      lock()
    } else {
      unlock()
    }

    const onResize = () => {
      if (window.innerWidth >= 768) {
        unlock()
      }
    }
    window.addEventListener('resize', onResize)
    return () => {
      unlock()
      window.removeEventListener('resize', onResize)
    }
  }, [isOpen])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
        onOpenChange?.(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [onOpenChange])

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
    <div ref={ref} className='relative inline-block text-left'>
      <button
        onClick={toggleOpen}
        className={`
          relative p-3 md:px-4 md:py-3 bg-newGreen
          shadow-[0px_0px_6px_0px_rgba(255,255,255,0.40)]
          rounded-3xl cursor-pointer overflow-hidden group
        `}
        aria-expanded={isOpen}
      >
        <div className='flex justify-center items-center'>
          <span
            className={`block md:hidden relative z-10 text-grey-500 font-semibold -tracking-[0.32px] ${selected.length > 0 ? '' : 'mr-2'}`}
          >
            Filters
          </span>
          <span
            className={`hidden md:block relative z-10 text-grey-500 font-semibold -tracking-[0.32px] ${selected.length > 0 ? '' : 'mr-2'}`}
          >
            Project filters
          </span>
          {selected.length > 0 && (
            <span
              className={`text-grey-500 font-semibold -tracking-[0.32px] w-10 ${selected.length > 0 ? 'mr-1 md:mr-2' : ''}`}
            >
              {selected.length && `• ${selected.length}`}
            </span>
          )}
          <img src='/img/ecosystem/BiSliderAlt.svg' alt='filter icon' />
        </div>
      </button>

      {isOpen && (
        <>
          <div
            onClick={() => {
              setIsOpen(false)
              onOpenChange?.(false)
            }}
            className='fixed inset-0 bg-[rgba(0,0,0,0.8)] md:hidden z-40'
          />

          <div
            className={`
              fixed inset-x-0 bottom-0
              bg-grey-900 p-4
              rounded-t-[24px]
              border-t border-grey-400
              flex flex-col items-start
              md:absolute md:left-0 md:bottom-auto md:mt-6
              md:w-[250px] md:p-2 md:rounded-[24px] md:border md:border-grey-400
              z-50
            `}
          >
            <div className='w-full flex items-center justify-between mb-4 md:hidden'>
              <button
                onClick={() => {
                  setIsOpen(false)
                  onOpenChange?.(false)
                }}
              >
                <span className='block w-4 h-4'>&#8592;</span>
              </button>
              <h2 className='text-sm font-semibold text-grey-100 -tracking-[0.28px]'>
                Project filters
              </h2>
              <button
                onClick={() => {
                  setIsOpen(false)
                  onOpenChange?.(false)
                }}
              >
                <span className='block w-4 h-4'>×</span>
              </button>
            </div>

            <div className='w-full flex flex-col gap-1'>
              {items.map(item => (
                <button
                  key={item.value}
                  onClick={() => {
                    const next = item.checked
                      ? selected.filter(v => v !== item.value)
                      : [...selected, item.value]

                    // clean search when we deselect the searchKey in the list
                    const searchKey = keyForTag(search)
                    if (item.checked && searchKey === item.value)
                      updateSearch('')

                    onSelect(next)
                  }}
                  className={`
                    w-full text-left flex justify-between items-center
                    text-gray-100 text-sm
                    ${
                      item.checked
                        ? 'rounded-[100px] bg-grey-700 py-2.5 px-3 md:rounded-none md:bg-transparent md:py-3 md:px-3 font-bold'
                        : 'py-2.5 px-3'
                    }
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
                        d='M16.707 5.293a1 1 0 00-1.414 0L8 12.586 
                           4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 
                           001.414 0l8-8a1 1 0 000-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
