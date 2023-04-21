import React from 'react'
import Navbar from './Navbar'

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-16">{children}</div>
    </>
  )
}

export default MainLayout
