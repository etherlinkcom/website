import React from 'react'
import { Dropdown } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react'
import { NavbarItem } from './fixture'
import Link from 'next/link'
import { isExternalLink } from '.'

const customDropdownTheme: CustomFlowbiteTheme['dropdown'] = {
  arrowIcon: 'ml-2 h-4 w-4',
  content: 'py-1 focus:outline-none text-gray-300 m-2',
  floating: {
    item: {
      container:
        'hover:bg-[#232323] text-white hover:text-newGreen transition-all duration-500 rounded',
      base: 'text-base px-3 py-2'
    },
    style: {
      auto: 'bg-midBlack'
    }
  },
  inlineWrapper:
    'flex items-center text-gray-300 hover:text-newGreen hover:bg-[#232323] px-3 py-2 rounded-[32px] text-base transition-all duration-500 px-6 py-3'
}

export const NavbarList = ({ dropdown, title, link, items }: NavbarItem) => {
  if (dropdown && !!items) {
    return (
      <Dropdown
        theme={customDropdownTheme}
        label={title}
        dismissOnClick={false}
        inline
      >
        {items.map((data, index) => (
          <Dropdown.Item
            as='a'
            href={data.link}
            target={isExternalLink(data.link)}
            key={index}
          >
            {data.name}
          </Dropdown.Item>
        ))}
      </Dropdown>
    )
  }
  return (
    <Link
      href={link as string}
      className='w-full px-6 py-3 rounded-[32px] text-gray-300 text-base hover:text-newGreen hover:bg-[#232323] transition-all duration-500'
      target={isExternalLink(link as string)}
      rel='noopener noreferrer'
    >
      {title}
    </Link>
  )
}
