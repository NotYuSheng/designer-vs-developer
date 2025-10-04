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

      {/* Cloud shadows with rotation - darker copy offset behind */}
      <div className="absolute inset-0" style={{ transform: `rotate(2deg)`, transformOrigin: 'center' }}>
        <div className="rounded-full absolute" style={{ left: `3px`, top: `40px`, width: '20px', height: '20px', backgroundColor: '#ADAEBD' }} />
        <div className="rounded-full absolute" style={{ left: `18px`, top: `33px`, width: '30px', height: '30px', backgroundColor: '#ADAEBD' }} />
        <div className="rounded-full absolute" style={{ left: `41px`, top: `30px`, width: '20px', height: '20px', backgroundColor: '#ADAEBD' }} />
        <div className="rounded-full absolute" style={{ left: `49px`, top: `30px`, width: '27px', height: '27px', backgroundColor: '#ADAEBD' }} />
        <div className="rounded-full absolute" style={{ left: `57px`, top: `21px`, width: '30px', height: '30px', backgroundColor: '#ADAEBD' }} />
        <div className="rounded-full absolute" style={{ left: `67px`, top: `15px`, width: '27px', height: '27px', backgroundColor: '#ADAEBD' }} />
        <div className="rounded-full absolute" style={{ left: `77px`, top: `0px`, width: '32px', height: '32px', backgroundColor: '#ADAEBD' }} />
      </div>

      {/* Cloud circles - each with x, y, size */}
      <div className="rounded-full bg-white absolute" style={{ left: '3px', top: '43px', width: '20px', height: '20px' }} />
      <div className="rounded-full bg-white absolute" style={{ left: '18px', top: '40px', width: '24px', height: '24px' }} />
      <div className="rounded-full bg-white absolute" style={{ left: '35px', top: '37px', width: '22px', height: '22px' }} />
      <div className="rounded-full bg-white absolute" style={{ left: '47px', top: '41px', width: '20px', height: '20px' }} />
      <div className="rounded-full bg-white absolute" style={{ left: '58px', top: '36px', width: '22px', height: '22px' }} />
      <div className="rounded-full bg-white absolute" style={{ left: '70px', top: '25px', width: '28px', height: '28px' }} />
      <div className="rounded-full bg-white absolute" style={{ left: '78px', top: '10px', width: '32px', height: '32px' }} />
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