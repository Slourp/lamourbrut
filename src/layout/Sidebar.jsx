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

  const handleLinkClick = () => {
    closeSidebar()
  }

  return (
    <IconContext.Provider value={iconContextValue}>
      <div
        className={`sidebar ${
          theSideBar ? 'active' : ''
        } transition-transform duration-300 ease-out`}
      >
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
      <nav className={`nav-sidebar ${theSideBar ? 'active' : ''} `}>
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
              <Link to={item.path} onClick={handleLinkClick}>
                <span className="font-arial-black text-2xl">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  )
}

export default Sidebar
