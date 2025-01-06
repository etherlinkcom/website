import React, { useEffect, useState } from 'react'
import { NavItem } from './fixture'

// SVG icons as components
const ChevronDown = () => (
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
    className='ml-1 h-4 w-4'
  >
    <path d='m6 9 6 6 6-6' />
  </svg>
)

const ChevronUp = () => (
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
    className='ml-1 h-4 w-4'
  >
    <path d='m18 15-6-6-6 6' />
  </svg>
)

const ArrowUpRight = () => (
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
    className='h-4 w-4 ml-2'
  >
    <path d='M7 17 17 7' />
    <path d='M7 7h10v10' />
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

  if (!item.dropdown) {
    return (
      <a
        href={item.link}
        target={item?.link?.startsWith('http') ? '_blank' : '_self'}
        className={`flex items-center justify-between px-6 py-2 text-[#BCBCBC] text-sm font-bold 
                ${item.isNestedItem ? 'pl-8 pr-6 bg-[#151515]' : ''} ${item.isLastNestedItem ? 'rounded-b-2xl' : ''}
            `}
        onClick={closeParent}
      >
        <span>{item.name}</span>
        {item.link?.startsWith('http') && <ArrowUpRight />}
      </a>
    )
  }

  return (
    <div className='w-full'>
      <button
        className={`flex items-center justify-between w-full px-6 py-2 text-sm font-bold rounded-t-2xl ${isOpen ? 'text-[#28B56F]  bg-[#1B1B1B]' : 'text-[#BCBCBC]'}`}
        onClick={e => {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
      >
        <span>{item.name}</span>
        {item.items && (isOpen ? <ChevronUp /> : <ChevronDown />)}
      </button>

      {isOpen && item.items && (
        <div className='w-full'>
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
        <div className='flex gap-2'>
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
                  className='inline-flex items-center px-6 py-2  text-[#BCBCBC] text-sm font-bold'
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
  return (
    <div className='relative'>
      <button
        className={`inline-flex items-center px-6 py-2 text-sm font-bold ${isOpen ? 'text-[#28B56F]  bg-[#151515]' : 'text-[#BCBCBC]'}`}
        onClick={onClick}
      >
        {item.name}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isOpen && item.items && (
        <div className='absolute flex flex-col gap-2 left-0 mt-2 w-56 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 p-2'>
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
