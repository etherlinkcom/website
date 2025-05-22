import React, { useState, useRef, useEffect, useCallback } from 'react'

export type SortOrder = 'asc' | 'desc'
const SORT_OPTIONS: { value: SortOrder; label: string }[] = [
  { value: 'asc', label: 'A → Z' },
  { value: 'desc', label: 'Z → A' }
]

type SortButtonProps = {
  selected: SortOrder | null
  onSelect: (order: SortOrder) => void
}

export const SortButton = ({ selected, onSelect }: SortButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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

  // close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className='relative inline-block text-left z-30'>
      {/* trigger */}
      <button
        onClick={() => setIsOpen(v => !v)}
        className={`
          relative p-3 md:px-4 md:py-3 bg-[#1B1B1B]
          shadow-[0px_0px_6px_0px_rgba(51,232,142,0.40)]
          rounded-3xl cursor-pointer overflow-hidden group
        `}
        aria-expanded={isOpen}
      >
        <div className='flex justify-center gap-2 items-center'>
          <span className='hidden md:block relative z-10 font-semibold text-neonGreen-500'>
            Sort
          </span>
          <img
            className='w-4 h-4'
            src='/img/ecosystem/sort-icon.svg'
            alt='sort icon'
          />
        </div>
      </button>

      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className='fixed inset-0 bg-[rgba(0,0,0,0.8)] md:hidden z-40'
          />

          <div
            className={`
              /* mobile drawer */
              fixed inset-x-0 bottom-0
              bg-grey-900 p-4
              rounded-t-[24px]
              border-t border-grey-400
              flex flex-col items-start

              /* desktop dropdown overlay, left-aligned */
              md:absolute md:left-0 md:bottom-auto md:mt-6
              md:w-[250px] md:p-2 md:rounded-[24px] md:border md:border-grey-400  md:-translate-x-[150px]

              z-50
            `}
          >
            <div className='w-full flex items-center justify-between mb-4 md:hidden'>
              <button onClick={() => setIsOpen(false)}>
                <span className='block w-6 h-6'>&#8592;</span>
              </button>
              <h2 className='font-semibold text-white'>Sort</h2>
              <button onClick={() => setIsOpen(false)}>
                <span className='block w-6 h-6'>×</span>
              </button>
            </div>

            <div className='w-full flex flex-col'>
              {SORT_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => {
                    onSelect(opt.value)
                    // no longer closing the panel here
                  }}
                  className={`
                    w-full text-left flex justify-between items-center
                    text-gray-100 text-sm
                    ${
                      opt.value === selected
                        ? 'rounded-[100px] bg-grey-700 py-[10px] px-[13px] md:rounded-none md:bg-transparent md:py-3 md:px-3 font-bold'
                        : 'py-3 px-3'
                    }
                  `}
                >
                  <span>{opt.label}</span>
                  {opt.value === selected && (
                    <svg
                      className='w-4 h-4 text-white-100'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z'
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
