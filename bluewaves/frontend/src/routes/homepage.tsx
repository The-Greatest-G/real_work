import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ChatView from '../components/ChatView'
import ModeTools from '../components/ModeTools'

export default function HomePage(){
  const { data: user } = useQuery(['user'], async ()=> (await axios.get('/api/user')).data)
  const { data: msg } = useQuery(['welcome'], async ()=> (await axios.get('/api/messages')).data)

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <section className="md:col-span-1 space-y-4">
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 font-bold text-xl">G</div>
            <div>
              <div className="font-bold">{user?.name ?? 'gogfrey'}</div>
              <div className="text-sm text-slate-500">{user?.role ?? 'Developer'}</div>
              <div className="text-xs text-slate-400 mt-1">{user?.location ?? 'Iwambi, Mbeya'}</div>
            </div>
          </div>
          <div className="mt-4 text-sm">{msg?.text ?? 'Welcome'}</div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow space-y-2">
          <div className="font-semibold">Quick actions</div>
          <div className="flex gap-2">
            <button className="px-3 py-2 bg-blue-600 text-white rounded" onClick={()=>window.location.href='/mode'}>Open Mode</button>
            <button className="px-3 py-2 border rounded" onClick={()=>alert('Profile editor placeholder')}>Edit Profile</button>
            <button className="px-3 py-2 border rounded" onClick={()=>alert('Tip: Keep iterating')}>Get Tip</button>
          </div>
        </div>
      </section>

      <section className="md:col-span-2 space-y-4">
        <ModeTools />
        <ChatView />
      </section>
    </div>
  )
}
