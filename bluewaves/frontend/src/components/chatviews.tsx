import React, { useState } from 'react'
import axios from 'axios'

export default function ChatView(){
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{sender:string,text:string}[]>([])

  const send = async () => {
    if(!input.trim()) return
    const userMsg = { sender: 'You', text: input }
    setMessages(prev => [...prev, userMsg])
    const textToSend = input
    setInput('')
    try {
      const res = await axios.post('/api/chat', { text: textToSend })
      setMessages(prev => [...prev, { sender: 'Greatest G Media', text: res.data.reply }])
    } catch {
      setMessages(prev => [...prev, { sender: 'System', text: 'Failed to send message' }])
    }
  }

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <div className="flex justify-between items-center">
        <div className="font-semibold">Chat with Greatest G Media</div>
        <div className="text-sm text-slate-500">Mode: conversational</div>
      </div>

      <div className="mt-4 h-64 overflow-auto border rounded p-3 space-y-3">
        {messages.length === 0 && <div className="text-sm text-slate-400">No messages yet. Start the conversation.</div>}
        {messages.map((m,i)=>(
          <div key={i} className={`p-2 rounded ${m.sender==='You' ? 'bg-blue-50 self-end' : 'bg-slate-50'}`}>
            <div className="text-xs font-semibold">{m.sender}</div>
            <div className="text-sm">{m.text}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter' && send()} className="flex-1 border rounded px-3 py-2" placeholder="Write a message..." />
        <button onClick={send} className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
      </div>
    </div>
  )
}
