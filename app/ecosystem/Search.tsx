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
            border border-white-50 
            rounded-full py-3 px-4 pl-10
            text-white placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-green-500
            transition
          '
        />
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
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

      <div className='mt-4'>
        <h3 className='text-white font-semibold mb-2'>Trending searches</h3>
        <div className='flex flex-wrap gap-2'>
          {TRENDING.map(term => (
            <button
              key={term}
              onClick={() => updateSearch(term)}
              className={`
                text-sm text-white px-3 py-1.5 rounded-full
                bg-gray-700 hover:bg-gray-600
                transition
                ${search === term ? 'ring-2 ring-green-400' : ''}
              `}
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
