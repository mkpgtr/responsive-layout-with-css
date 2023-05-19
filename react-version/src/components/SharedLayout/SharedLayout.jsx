import React from 'react'
import './SharedLayout.css'
import ThingsLearnt from '../../pages/ThingsLearnt/ThingsLearnt'
import { Outlet } from 'react-router-dom'
const SharedLayout = () => {
  return (
    <div class="main-container">
        <Outlet />
    </div>
  )
}

export default SharedLayout