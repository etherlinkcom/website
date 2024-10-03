'use client'
import React, { useEffect, useState } from 'react'
import { NAVBAR_ITEMS, Item, NavbarItem } from './fixture'
import Link from 'next/link'
import { X, Discord } from '../icons'
import { Drawer, CustomFlowbiteTheme } from 'flowbite-react'
import { isExternalLink } from '.'
import { CheveronIcon } from '../Icons/CheveronIcon'
import { ArrowRightIcon } from '../Icons/ArrowRightIcon'
import { PrimaryButton } from '../buttons/PrimaryButton'

const customDrawerTheme: CustomFlowbiteTheme['drawer'] = {
  root: {
    base: 'fixed z-40 overflow-y-auto bg-white p-4 transition-transform duration-300 pt-0 bg-grey900 rounded-t-3xl border-t border-grey600',
    backdrop: 'fixed inset-0 z-30 bg-gray-900/50 bg-transparent',
    edge: 'bottom-0',
    position: {
      right: {
        on: 'right-0 bottom-0 h-auto w-full transform-none',
        off: 'right-0 bottom-0 h-auto w-full translate-y-full'
      }
    }
  },
  header: {
    inner: {
      closeButton:
        'absolute end-10 top-8 flex h-6 w-4 items-center justify-center rounded-lg bg-transparent text-grey100 text-sm hover:bg-darkBlack',
      closeIcon: 'h-6 w-6'
    }
  },
  items: {
    base: ''
  }
}

export const MobileNavbar = ({
  isOpen,
  handleClose
}: {
  isOpen: boolean
  handleClose: () => void
}) => {
  const [currentView, setCurrentView] = useState<'main' | 'dropdown'>('main')
  const [activeDropdown, setActiveDropdown] = useState<Item[] | null>(null)
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: number]: boolean
  }>({})
  const [selectedItemTitle, setSelectedItemTitle] = useState<string>('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'in' | 'out'>('in')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) handleClose()
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleDropdownClick = (item: NavbarItem) => {
    if (isAnimating) return
    setIsAnimating(true)
    setSelectedItemTitle(item.title)
    setDirection('out')
    setTimeout(() => {
      setCurrentView('dropdown')
      setActiveDropdown(item.items ?? null)
      setIsAnimating(false)
    }, 250)
  }

  const handleBackClick = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSelectedItemTitle('')
    setDirection('in')
    setTimeout(() => {
      setCurrentView('main')
      setActiveDropdown(null)
      setIsAnimating(false)
    }, 250)
  }

  const toggleDropdown = (index: number) => {
    setOpenDropdowns(prev => ({ ...prev, [index]: !prev[index] }))
  }

  const itemsWithDropdown = NAVBAR_ITEMS.filter(
    item => item.dropdown && item.items
  )
  const itemsWithoutDropdown = NAVBAR_ITEMS.filter(
    item => !item.dropdown || !item.items
  )

  return (
    <Drawer
      open={isOpen}
      onClose={() => {
        handleClose()
        handleBackClick()
      }}
      backdrop={true}
      theme={customDrawerTheme}
      position='bottom'
    >
      <div
        className='h-[1px] w-[39px] bg-grey600 rounded-full mx-auto'
        style={{ marginTop: '8px' }}
      />
      <Drawer.Header titleIcon={() => null} />

      {/* Header Section with Back Button, Item Title, and Close Button */}
      <div className='flex items-center justify-between px-6'>
        {/* Back Button */}
        {currentView === 'dropdown' && (
          <div
            onClick={handleBackClick}
            className='flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white'
          >
            <ArrowRightIcon fill='#BCBCBC' className='rotate-180 h-4 w-4' />
          </div>
        )}

        {/* Selected Item Title */}
        {currentView === 'dropdown' && (
          <div className='flex-1 text-center font-bold text-grey100'>
            {selectedItemTitle}
          </div>
        )}

        <div className='w-[24px]' />
      </div>

      <div className='flex flex-col w-full gap-4 mt-10 overflow-x-hidden'>
        {currentView === 'main' ? (
          <div
            className={`flex flex-col gap-4 transition-all ${direction === 'out' ? 'slide-out-left' : 'slide-in-left'}`}
          >
            {/* Render the items with dropdowns */}
            {itemsWithDropdown.map((item, index) => (
              <div
                key={index}
                onClick={() => handleDropdownClick(item)}
                className='w-full px-6 py-[10px] rounded-full font-bold text-gray-300 text-sm hover:text-newGreen hover:bg-grey700 text-grey100 transition-all duration-500 cursor-pointer flex justify-between items-center'
              >
                {item.title}
                <CheveronIcon fill='#BCBCBC' />
              </div>
            ))}

            {/* Horizontal stroke */}
            <div className='h-[1px] w-[90%] mx-auto bg-grey600 rounded-full my-2' />

            {/* Render the items without dropdowns */}
            {itemsWithoutDropdown.map((item, index) => (
              <Link
                href={item.link as string}
                className='w-full px-6 py-[10px] rounded-full font-bold text-gray-300 text-sm hover:text-newGreen text-grey100 hover:bg-grey700 transition-all duration-500'
                target={isExternalLink(item.link as string)}
                rel='noopener noreferrer'
                key={index}
                onClick={handleClose}
              >
                {item.title}
              </Link>
            ))}
            {/* Horizontal stroke */}
            <div className='h-[1px] w-[90%] mx-auto bg-grey600 rounded-full my-2' />

            <div
              className={`flex flex-col items-center rounded-3xl w-full px-6 pt-4 pb-2 text-sm text-gray-300 hover:text-newGreen bg-newGreen cursor-pointer`}
              style={{
                backgroundImage: `url('/img/home/mobile-navbar-start-building.svg')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              <div className='flex-1 text-lg font-bold text-darkBlack pb-2'>
                Ready to get Started?
              </div>
              <div className='flex-1 text-xs text-darkBlack pb-6 text-center'>
                Useful resources to get started <br /> building on Etherlink
              </div>
              <div className={`w-full`}>
                <PrimaryButton
                  text='Start Building'
                  href='https://docs.etherlink.com/'
                  className='!bg-grey900 w-full'
                  textClassName='!text-grey100 text-sm'
                />
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`flex flex-col gap-4 transition-all ${direction === 'in' ? 'slide-out-right' : 'slide-in-right'}`}
          >
            {/* Render the active dropdown's items */}
            {activeDropdown?.map((item, index) =>
              item.subItems?.length ? (
                <div key={index}>
                  <div
                    onClick={() => toggleDropdown(index)}
                    className={`flex items-center w-full px-6 py-[10px] text-sm text-gray-300 hover:text-newGreen hover:bg-grey700 cursor-pointer ${
                      openDropdowns[index]
                        ? 'rounded-t-2xl bg-grey700 text-neonGreen'
                        : 'rounded-2xl'
                    } transition-all duration-500`}
                  >
                    <div className='flex-1 font-bold'>{item.name}</div>
                    <div
                      className={`transition-transform duration-300 ${
                        openDropdowns[index] ? '-rotate-90' : 'rotate-90'
                      }`}
                    >
                      <CheveronIcon
                        fill={openDropdowns[index] ? undefined : '#BCBCBC'}
                      />
                    </div>
                  </div>

                  {openDropdowns[index] && (
                    <div className='pl-0 bg-grey800 rounded-b-2xl'>
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          href={subItem.link}
                          target={isExternalLink(subItem.link)}
                          key={`${index}-${subIndex}`}
                          className={`block w-full px-[34px] py-3 rounded-full text-gray-300 font-semibold text-sm hover:text-newGreen hover:bg-grey700 transition-all duration-500 ${
                            subIndex === (item.subItems?.length ?? 0) - 1
                              ? 'rounded-b-md'
                              : ''
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.link}
                  className='w-full px-6 py-[10px] rounded-full text-gray-300 font-bold text-sm hover:text-newGreen hover:bg-grey700 transition-all duration-500'
                  target={isExternalLink(item.link)}
                  key={index}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}

        <div className='flex gap-8 justify-center mt-4 mb-2 px-2 bg-[#15151580] rounded-[16px] text-gray-300 hover:text-white text-base transition-all duration-500'>
          <Link
            href='https://twitter.com/etherlink'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
          >
            <X className='m-2' size={40} />
          </Link>
          <Link
            href='https://discord.gg/etherlink'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1'
          >
            <Discord className='m-2' size={40} />
          </Link>
        </div>
      </div>
    </Drawer>
  )
}
