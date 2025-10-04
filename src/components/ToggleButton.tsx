'use client'

import { useState } from 'react'

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false)

  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={`
        relative inline-flex h-12 w-24 items-center rounded-full
        transition-colors duration-300 ease-in-out focus:outline-none overflow-hidden
        ${isOn ? 'bg-gray-900' : ''}
      `}
      style={!isOn ? { backgroundColor: '#0467C4' } : {}}
    >
      {/* Layered gradient curves for sky */}
      {!isOn && (
        <>
          <div className="absolute inset-0 rounded-full opacity-100" style={{ backgroundColor: '#1D75CC', clipPath: 'ellipse(40% 100% at 40% 50%)' }} />
          <div className="absolute inset-0 rounded-full opacity-100" style={{ backgroundColor: '#3E84D6', clipPath: 'ellipse(55% 100% at 13% 50%)' }} />
          <div className="absolute inset-0 rounded-full opacity-100" style={{ backgroundColor: '#5494DC', clipPath: 'ellipse(70% 100% at -15% 50%)' }} />
        </>
      )}

      {/* Cloud shadow - darker copy behind */}
      {/* <div className="absolute flex items-start" style={{ transform: 'translate(-4px, -8px)' }}>
        <div className="w-5 h-5 rounded-full ml-10 mt-9.75" style={{ backgroundColor: '#ccc' }} />
        <div className="w-4 h-4 rounded-full -ml-1 mt-11" style={{ backgroundColor: '#ccc' }} />
        <div className="w-5 h-5 rounded-full -ml-2.5 mt-9.25" style={{ backgroundColor: '#ccc' }} />
        <div className="w-10 h-10 rounded-full -ml-2.5 mt-4.75" style={{ backgroundColor: '#ccc' }} />
      </div> */}

      {/* Cloud circles on the right */}
      <div className="absolute flex items-start">
        <div className="w-5 h-5 rounded-full bg-white ml-10 mt-9.75" />
        <div className="w-4 h-4 rounded-full bg-white -ml-1 mt-11" />
        <div className="w-5 h-5 rounded-full bg-white -ml-2.5 mt-9.25" />
        <div className="w-10 h-10 rounded-full bg-white -ml-2.5 mt-4.75" />
      </div>

      <span
        className={`
          inline-block h-10 w-10 transform rounded-full
          transition-all duration-300 ease-in-out
          ${isOn ? 'translate-x-12 bg-gray-400' : 'translate-x-1 bg-yellow-400'}
        `}
      />
    </button>
  )
}