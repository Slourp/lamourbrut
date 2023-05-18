import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { SidebarData } from '../data/SidebarData'
import Burger from '../assets/burger.png'

import './Sidebar.css'

const Sidebar = ({ isOpen, onClose }) => {
  const [theSideBar, setTheSideBar] = useState(isOpen)

  const showSidebar = () => setTheSideBar(true)
  const closeSidebar = () => {
    setTheSideBar(false)
    onClose()
  }

  return (
    <IconContext.Provider value={{ color: undefined }}>
      <div className={theSideBar ? 'sidebar active' : 'sidebar'}>
        <Link to="#" className="menu-bars" onClick={showSidebar}>
          <img
            src={Burger}
            alt="Burger"
            className="h-10 cursor-pointer"
          />
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
                  <span className='font-arial-black'>{item.title}</span>
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
