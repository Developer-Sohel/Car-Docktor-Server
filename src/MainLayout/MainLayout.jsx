import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Component/Navbar'
import { Footer } from '../Component/Footer'

export const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet></Outlet>
       <Footer/>
    </div>
  )
}
