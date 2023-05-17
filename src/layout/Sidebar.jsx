import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { SidebarData } from '../data/SidebarData'

import './Sidebar.css'

const Sidebar = () => {
  const [theSideBar, setTheSideBar] = useState(false)

  const showSidebar = () => setTheSideBar(true)
  const closeSidebar = () => setTheSideBar(false)

  return (
    <IconContext.Provider value={{ color: undefined }}>
      <div className="sidebar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav
        className={theSideBar ? 'nav-sidebar active' : 'nav-sidebar'}
      >
        <ul className="nav-sidebar-items" onClick={closeSidebar}>
          <li className="sidebar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose onClick={closeSidebar} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  )
}

export default Sidebar
