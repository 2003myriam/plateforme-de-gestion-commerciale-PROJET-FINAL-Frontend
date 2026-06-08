import React from 'react'
import SideBar from '../../components/SideBar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard
