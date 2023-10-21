import React from 'react'
import NavLink from './NavLink'

interface Props {
  links: any
}

const MenuOverlay = ({links}: Props) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link: any, index: any) => {
        return (
          <li key={index}>
            <NavLink href={link.path} title={link.title}/>
          </li>
        )
      })}
    </ul>
  )
}

export default MenuOverlay