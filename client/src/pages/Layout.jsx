import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <h1>Layout</h1>

      {/* Nested routes yahan render honge */}
      <Outlet />
    </div>
  )
}

export default Layout
