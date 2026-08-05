import React from 'react'

export default function AboutPage(){
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-blue-700">About the Developer</h2>
      <div className="bg-white rounded-xl p-4 shadow">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 font-bold text-2xl">G</div>
          <div>
            <div className="font-bold text-lg">gogfrey</div>
            <div className="text-sm text-slate-500">Full-stack developer • UI/UX • ML enthusiast</div>
            <div className="text-xs text-slate-400 mt-1">Iwambi, Mbeya Region, Tanzania</div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="font-semibold">Contact</div>
            <div className="text-sm text-slate-600">Email: <strong>gogfrey@example.com</strong></div>
            <div className="text-sm text-slate-600">GitHub: <strong>github.com/gogfrey</strong></div>
          </div>
          <div>
            <div className="font-semibold">Skills</div>
            <div className="text-sm text-slate-600">JavaScript; TypeScript; React; Node; Python; ML</div>
          </div>
        </div>

        <div className="text-xs text-slate-400 mt-4">Add portfolio links, CV, or social handles to make this profile production-ready</div>
      </div>
    </div>
  )
}
