'use client'

import React, { useEffect, useState } from 'react'
import { NavItem } from './fixture'
import { isExternalLink } from '.'

const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={`ml-1 h-4 w-4 ${className}`}
  >
    <path d='m6 9 6 6 6-6' />
  </svg>
)

const DropdownItem = ({
  item,
  closeParent
}: {
  item: NavItem
  closeParent: () => void
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(isOpen)
  }, [isOpen])

  if (!item.dropdown) {
    return (
      <a
        href={item.link}
        target={isExternalLink(item.link!)}
        className={`flex items-center justify-between px-6 py-2 text-grey-100 text-sm font-bold hover:text-neon-green-500 transition-colors duration-200 hover:bg-grey-700 hover:text-neonGreen-500
                ${item.isNestedItem ? 'pl-8 pr-6 bg-grey-800' : 'hover:rounded-[32px]'} ${item.isLastNestedItem ? 'rounded-b-2xl' : ''}
            `}
        onClick={closeParent}
      >
        <span>{item.name}</span>
      </a>
    )
  }

  return (
    <div className='w-full hover:bg-grey-800 hover:rounded-[32px]'>
      <button
        className={`group flex items-center justify-between w-full px-6 py-2 text-sm font-bold rounded-t-2xl hover:text-neonGreen-500
            ${isOpen ? 'text-neonGreen-700  bg-grey-700' : 'text-grey-100'}`}
        onClick={e => {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
      >
        <span className='group-hover:text-neon-green-500 transition-colors duration-200'>
          {item.name}
        </span>
        {item.items && (
          <span className='w-6 flex items-center justify-center'>
            <ChevronDown
              className={`transform transition-transform duration-300 ${isOpen ? '-rotate-180' : 'rotate-0 '}`}
            />
          </span>
        )}
      </button>

      {isOpen && item.items && (
        <div
          className={`w-full transition-all duration-700 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
        >
          {item.items.map((subItem, index) => (
            <DropdownItem
              key={index}
              item={subItem}
              closeParent={closeParent}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const DesktopNavbar = ({ items }: { items: NavItem[] }) => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleClick = () => {
      setOpenMenuIndex(null)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('click', handleClick)

      return () => window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex justify-between'>
        <div className='flex '>
          {items.map((item, index) => (
            <div key={index} className='relative inline-block text-left'>
              {item.dropdown ? (
                <div onClick={e => e.stopPropagation()}>
                  <DropdownMenu
                    item={item}
                    isOpen={openMenuIndex === index}
                    onClick={() => {
                      setOpenMenuIndex(openMenuIndex === index ? null : index)
                    }}
                  />
                </div>
              ) : (
                <a
                  href={item.link}
                  target={isExternalLink(item.link!)}
                  className='inline-flex items-center px-6 py-2  text-grey-100 text-sm font-bold
                    hover:text-neonGreen-500 hover:bg-grey-800 rounded-[32px] transition-colors duration-200'
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const DropdownMenu = ({
  item,
  isOpen,
  onClick
}: {
  item: NavItem
  isOpen: boolean
  onClick: () => void
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(isOpen)
  }, [isOpen])

  return (
    <div className='relative'>
      <button
        className={`group inline-flex items-center px-6 py-2 text-sm font-bold hover:bg-grey-800  rounded-[32px] ${isOpen ? 'bg-grey-800' : ''}`}
        onClick={onClick}
      >
        <p
          className={`${isOpen ? 'text-neonGreen-700  bg-grey-800' : 'text-grey-100 group-hover:text-neonGreen-500 transition-colors duration-200'}`}
        >
          {item.name}
        </p>
        <span className='w-6 flex items-center justify-center'>
          <ChevronDown
            className={`transform transition-transform duration-300 ${isOpen ? '-rotate-180' : 'rotate-0'}`}
          />
        </span>
      </button>

      {isOpen && item.items && (
        <div
          className={`absolute flex flex-col gap-1 left-0 mt-2 w-[274px] shadow-lg ring-black ring-opacity-5 overflow-hidden rounded-3xl border border-grey-500 bg-neutral-950 p-2 transition-all duration-500 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
        >
          {item.items.map((subItem, index) => (
            <DropdownItem
              key={index}
              item={subItem}
              closeParent={() => onClick()}
            />
          ))}
        </div>
      )}
    </div>
  )
}
