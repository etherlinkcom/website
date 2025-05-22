'use client'
import React, { ChangeEvent } from 'react'

type SearchProps = {
  search: string
  updateSearch: (newTerm: string) => void
}

const TRENDING = ['Dev tools', 'Infrastructure', 'Gaming', 'Payments', 'NFTs']

export const Search = ({ search, updateSearch }: SearchProps) => {
  return (
    <div className='w-full'>
      <div className='relative w-full'>
        <input
          type='text'
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            updateSearch(e.target.value)
          }
          placeholder='What projects are you looking for?'
          className='
            w-full
            bg-transparent
            border-[2px] border-grey-200
            rounded-full
            py-[13px] px-[24px]
            text-white placeholder-grey-200
            focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus:border-grey-200
            transition
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
              d='M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z'
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
                text-sm text-grey-50
                px-4 py-3
                rounded-full
                bg-grey-400 hover:bg-grey-500
                transition
              '
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
