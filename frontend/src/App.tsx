import React from 'react'
import Topbar from './components/Topbar'
import { Outlet } from '@tanstack/react-router'

export default function App(){
  return (
    <div className='min-h-screen'>
      <Topbar />
      <main className='max-w-6xl mx-auto p-6'>
        <Outlet />
      </main>
    </div>
  )
}
