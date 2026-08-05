import React, { useState } from 'react'
import axios from 'axios'

export default function ModeTools(){
  const [mode, setMode] = useState<string | null>(null)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const runMode = async (m:string) => {
    setMode(m)
    try {
      const res = await axios.post(`/api/modes/${m}`, { input })
      setOutput(res.data.result)
    } catch {
      setOutput('Failed to run mode')
    }
  }

  return (
    <div className="bg-white rounded-xl p-4 shadow space-y-3">
      <div className="flex items-center gap-2">
        <button onClick={()=>setMode('smart')} className={`px-3 py-2 rounded ${mode==='smart' ? 'bg-blue-600 text-white' : 'border'}`}>Smart</button>
        <button onClick={()=>setMode('discover')} className={`px-3 py-2 rounded ${mode==='discover' ? 'bg-blue-600 text-white' : 'border'}`}>Discover</button>
        <button onClick={()=>setMode('advice')} className={`px-3 py-2 rounded ${mode==='advice' ? 'bg-blue-600 text-white' : 'border'}`}>Advice</button>
        <button onClick={()=>setMode('study')} className={`px-3 py-2 rounded ${mode==='study' ? 'bg-blue-600 text-white' : 'border'}`}>Study</button>
        <button onClick={()=>setMode('deep')} className={`px-3 py-2 rounded ${mode==='deep' ? 'bg-blue-600 text-white' : 'border'}`}>Deep Learning</button>
      </div>

      <div>
        <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Input for the selected mode" className="w-full border rounded p-2 h-24" />
        <div className="mt-2 flex gap-2">
          <button onClick={()=>runMode(mode ?? 'smart')} className="px-3 py-2 bg-blue-600 text-white rounded">Run</button>
          <button onClick={()=>{ setInput(''); setOutput('') }} className="px-3 py-2 border rounded">Clear</button>
        </div>
      </div>

      <div className="mt-2">
        <div className="font-semibold">Result</div>
        <div className="mt-1 p-3 border rounded min-h-[60px] bg-slate-50">{output || 'No result yet'}</div>
      </div>
    </div>
  )
}
