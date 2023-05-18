import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { AiOutlineClose } from 'react-icons/ai'
import { SidebarData } from '../data/SidebarData'
import Burger from '../assets/burger.png'
import './Sidebar.css'

const Sidebar = ({ isOpen }) => {
  const [theSideBar, setTheSideBar] = useState(isOpen)

  const showSidebar = () => setTheSideBar(true)
  const closeSidebar = () => setTheSideBar(false)

  const iconContextValue = useMemo(() => ({ color: undefined }), [])

  return (
    <IconContext.Provider value={iconContextValue}>
      <div className={theSideBar ? 'sidebar active' : 'sidebar'}>
        <button
          type="button"
          className="menu-bars"
          onClick={showSidebar}
        >
          <img
            src={Burger}
            alt="Burger"
            className="h-10 cursor-pointer"
          />
        </button>
      </div>
      <nav
        className={theSideBar ? 'nav-sidebar active' : 'nav-sidebar'}
      >
        <ul className="nav-sidebar-items">
          <li className="sidebar-toggle">
            <button
              type="button"
              className="menu-bars"
              onClick={closeSidebar}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  closeSidebar()
                }
              }}
            >
              <AiOutlineClose />
            </button>
          </li>
          {SidebarData.map((item) => (
            <li key={item.title} className={item.cName}>
              <Link to={item.path}>
                <span className="font-arial-black">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  )
}

export default Sidebar
