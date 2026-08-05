import React from 'react'
import { useNavigate } from '@tanstack/react-router'

export default function Topbar(){
  const nav = useNavigate()
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white sticky top-0 z-40 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center font-bold">GW</div>
          <div>
            <div className="font-semibold">BlueWave</div>
            <div className="text-xs opacity-80">Interactive platform</div>
          </div>
        </div>
        <nav className="flex gap-2">
          <button onClick={()=>nav('/')} className="px-3 py-2 rounded-md hover:bg-white/10">Home</button>
          <button onClick={()=>nav('/mode')} className="px-3 py-2 rounded-md hover:bg-white/10">Mode</button>
          <button onClick={()=>nav('/about')} className="px-3 py-2 rounded-md hover:bg-white/10">About</button>
        </nav>
      </div>
    </header>
  )
}
