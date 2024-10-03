import React, { useState } from 'react'
import { Dropdown } from 'flowbite-react'
import type {
  CustomFlowbiteTheme,
  FlowbiteDropdownItemTheme
} from 'flowbite-react'
import { NavbarItem } from './fixture'
import Link from 'next/link'
import { isExternalLink } from '.'
import { CheveronIcon } from '../Icons/CheveronIcon'

const customDropdownTheme: CustomFlowbiteTheme['dropdown'] = {
  arrowIcon: 'ml-2 h-4 w-4',
  content:
    'py-1 focus:outline-none text-grey300 m-2 rounded-3xl bg-grey900 space-y-[4px]',
  floating: {
    item: {
      container:
        'hover:bg-grey600 text-white hover:text-newGreen transition-all duration-500 rounded rounded-3xl',
      base: 'text-sm px-3 py-2 w-full px-[24px] block text-grey100 hover:text-newGreen'
    },
    style: {
      auto: 'text-sm bg-grey900 w-[290px] rounded-[24px] border-[1px] border-grey600'
    }
  },
  inlineWrapper:
    'flex items-center text-grey300 hover:text-newGreen hover:bg-grey600 px-3 py-2 rounded-[32px] text-sm transition-all duration-500 px-6 py-3'
}

const customDropdownThemeTwo: FlowbiteDropdownItemTheme = {
  container:
    'hover:bg-grey600 text-white hover:text-newGreen transition-all duration-500 rounded rounded-3xl',
  base: 'text-sm px-3 py-2 w-full px-[24px] block text-grey100 hover:text-newGreen',
  icon: ''
}

export const NavbarList = ({ dropdown, title, link, items }: NavbarItem) => {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: number]: boolean
  }>({})

  const toggleDropdown = (index: number) => {
    setOpenDropdowns(prev => ({ ...prev, [index]: !prev[index] }))
  }

  if (dropdown && !!items) {
    return (
      <Dropdown
        trigger='hover'
        theme={customDropdownTheme}
        label={title}
        dismissOnClick={false}
        inline
      >
        {items.map((data, index) =>
          data.subItems?.length ? (
            <React.Fragment key={index}>
              <Dropdown.Item
                theme={customDropdownThemeTwo}
                as='button'
                onClick={() => toggleDropdown(index)}
                className={`flex items-center w-full ${
                  openDropdowns[index]
                    ? 'rounded-t-[12px] text-neonGreen bg-grey700'
                    : 'rounded-[24px]'
                }`}
              >
                <div className='flex items-center w-full'>
                  <div className='flex-1 text-left'>{data.name}</div>
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
              </Dropdown.Item>

              {openDropdowns[index] && (
                <div className='!mt-0'>
                  {data.subItems.map((subItem, subIndex) => (
                    <Dropdown.Item
                      theme={customDropdownThemeTwo}
                      as='a'
                      href={subItem.link}
                      target={isExternalLink(subItem.link)}
                      key={`${index}-${subIndex}`}
                      className={`hover:text-newGreen bg-grey800 ${
                        subIndex === (data.subItems?.length ?? 0) - 1
                          ? 'rounded-b-[12px]'
                          : ''
                      }`}
                    >
                      {subItem.name}
                    </Dropdown.Item>
                  ))}
                </div>
              )}
            </React.Fragment>
          ) : (
            <Dropdown.Item
              as='a'
              className='w-full px-[24px]'
              href={data.link}
              target={isExternalLink(data.link)}
              key={index}
            >
              {data.name}
            </Dropdown.Item>
          )
        )}
      </Dropdown>
    )
  }

  return (
    <Link
      href={link as string}
      className='w-full px-6 py-3 rounded-[32px] text-grey300 text-sm hover:text-newGreen hover:bg-grey600 transition-all duration-500'
      target={isExternalLink(link as string)}
      rel='noopener noreferrer'
    >
      {title}
    </Link>
  )
}
