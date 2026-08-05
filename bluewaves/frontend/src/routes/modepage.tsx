import React from 'react'
import ModeTools from '../components/ModeTools'

export default function ModePage(){
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-blue-700">Mode Center</h2>
      <p className="text-sm text-slate-500">Choose a mode and interact with its tools</p>
      <ModeTools />
    </div>
  )
}
