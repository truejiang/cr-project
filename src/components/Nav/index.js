import React from 'react'
import { NavWrapper } from './styled'
import { navConfig } from '@/config'

const Nav = (props) => {
  return (
    <NavWrapper>
      <a href='/' className="logo"></a>
      <ul className="menu">
        {navConfig.map(nav => (
          <li 
          className="hover-links"
          key={nav.name}>
            <a href={nav.routerpath}>{nav.name}</a>
          </li>
        ))}
      </ul>
    </NavWrapper>
  )
}

export default Nav