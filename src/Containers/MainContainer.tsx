import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

function MainContainer() {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar/>
        <div className='flex items-start px-32'>
            <Sidebar/>
            <div className="min-h-screen w-full m-4"> <Outlet /></div>
        </div>
    </div>
  )
}

export default MainContainer