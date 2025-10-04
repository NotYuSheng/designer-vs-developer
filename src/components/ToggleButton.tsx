'use client'

interface ToggleButtonProps {
  isOn: boolean
  onToggle: () => void
}

export default function ToggleButton({ isOn, onToggle }: ToggleButtonProps) {

  // Star component - square with circular cuts at corners creating 4-pointed star
  const Star = ({ size, x, y }: { size: number; x: number; y: number }) => {
    const circleSize = size * 0.99 // Size of cutting circles
    const maskId = `star-mask-${x}-${y}` // Unique ID for this star's mask
    return (
      <div className="absolute" style={{ left: `${x}px`, top: `${y}px`, width: `${size}px`, height: `${size}px` }}>
        <svg width={size} height={size} className="absolute">
          <defs>
            <mask id={maskId}>
              <rect width={size} height={size} fill="white" />
              <circle cx="0" cy="0" r={circleSize/2} fill="black" />
              <circle cx={size} cy="0" r={circleSize/2} fill="black" />
              <circle cx="0" cy={size} r={circleSize/2} fill="black" />
              <circle cx={size} cy={size} r={circleSize/2} fill="black" />
            </mask>
          </defs>
          <rect width={size} height={size} fill="white" mask={`url(#${maskId})`} />
        </svg>
      </div>
    )
  }

  return (
    <button
      onClick={onToggle}
      aria-label={isOn ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`
        relative inline-flex h-12 w-24 items-center rounded-full
        transition-colors duration-300 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 overflow-hidden
        ${isOn ? 'bg-gray-900' : ''}
      `}
      style={!isOn ? { backgroundColor: '#0467C4' } : {}}
    >

      {/* Cloud shadows with rotation - darker copy offset behind */}
      <div
        className="absolute inset-0 transition-transform duration-500"
        style={{
          transform: `rotate(2deg) translateY(${isOn ? '60px' : '0px'})`,
          transformOrigin: 'center',
          transitionTimingFunction: 'cubic-bezier(0.68, -0.3, 0.265, 1.3)',
          zIndex: 0
        }}
      >
        <div className="rounded-full absolute" style={{ left: `3px`, top: `40px`, width: '20px', height: '20px', backgroundColor: '#B8D2F1' }} />
        <div className="rounded-full absolute" style={{ left: `18px`, top: `33px`, width: '30px', height: '30px', backgroundColor: '#B8D2F1' }} />
        <div className="rounded-full absolute" style={{ left: `41px`, top: `30px`, width: '20px', height: '20px', backgroundColor: '#B8D2F1' }} />
        <div className="rounded-full absolute" style={{ left: `49px`, top: `30px`, width: '27px', height: '27px', backgroundColor: '#B8D2F1' }} />
        <div className="rounded-full absolute" style={{ left: `57px`, top: `21px`, width: '30px', height: '30px', backgroundColor: '#B8D2F1' }} />
        <div className="rounded-full absolute" style={{ left: `67px`, top: `15px`, width: '27px', height: '27px', backgroundColor: '#B8D2F1' }} />
        <div className="rounded-full absolute" style={{ left: `77px`, top: `0px`, width: '32px', height: '32px', backgroundColor: '#B8D2F1' }} />
      </div>

      {/* Cloud circles - each with x, y, size */}
      <div
        className="absolute inset-0 transition-transform duration-500"
        style={{
          transform: `translateY(${isOn ? '60px' : '0px'})`,
          transitionTimingFunction: 'cubic-bezier(0.68, -0.3, 0.265, 1.3)',
          zIndex: 3
        }}
      >
        <div className="rounded-full bg-white absolute" style={{ left: '3px', top: '43px', width: '20px', height: '20px' }} />
        <div className="rounded-full bg-white absolute" style={{ left: '18px', top: '40px', width: '24px', height: '24px' }} />
        <div className="rounded-full bg-white absolute" style={{ left: '35px', top: '37px', width: '22px', height: '22px' }} />
        <div className="rounded-full bg-white absolute" style={{ left: '47px', top: '41px', width: '20px', height: '20px' }} />
        <div className="rounded-full bg-white absolute" style={{ left: '58px', top: '36px', width: '22px', height: '22px' }} />
        <div className="rounded-full bg-white absolute" style={{ left: '70px', top: '25px', width: '28px', height: '28px' }} />
        <div className="rounded-full bg-white absolute" style={{ left: '78px', top: '10px', width: '32px', height: '32px' }} />
      </div>

      {/* Stars - move upwards when transitioning to light mode with bounce */}
      <div
        className="absolute inset-0 transition-transform duration-500"
        style={{
          transform: `translateY(${isOn ? '0px' : '-60px'})`,
          transitionTimingFunction: 'cubic-bezier(0.68, -0.3, 0.265, 1.3)',
          zIndex: 4
        }}
      >
        <Star size={6} x={15} y={6} />
        <Star size={3} x={7} y={15} />
        <Star size={2} x={9} y={35} />
        <Star size={2} x={12} y={32} />
        <Star size={3} x={18} y={19} />
        <Star size={2} x={20} y={38} />
        <Star size={2} x={36} y={11} />
        <Star size={2} x={32} y={22} />
        <Star size={4} x={34} y={31} />
        <Star size={4} x={43} y={13} />
        <Star size={2} x={40} y={26} />
      </div>

      {/* Depth shadow overlay - creates inset shadow for depth */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: isOn
            ? 'inset 0 3px 4px rgba(0, 0, 0, 0.4)'
            : 'inset 0 3px 4px rgba(0, 0, 0, 0.4), inset 0 -2px 4px rgba(255, 255, 255, 0.6)',
          zIndex: 5
        }}
      />

      {/* Gradient curves container - moves with camera, symmetrical */}
      <div
        className="absolute transition-all duration-700 pointer-events-none"
        style={{
          left: isOn ? '-52px' : '-100px',
          top: '-76px',
          width: '300px',
          height: '200px',
          zIndex: 1,
          transitionTimingFunction: 'cubic-bezier(0.68, -0.3, 0.265, 1.4)'
        }}
      >
        {/* Layered gradient ellipses - centered around camera position */}
        {/* Camera at button 4px + container offset 100px = 104px from container left, + 20px radius = 124px center */}
        <div className="absolute inset-0 opacity-10 transition-colors duration-700" style={{ backgroundColor: isOn ? '#FFFFFF' : '#FFFFFF', clipPath: 'ellipse(8% 40% at 124px 100px)' }} />
        <div className="absolute inset-0 opacity-10 transition-colors duration-700" style={{ backgroundColor: isOn ? '#FFFFFF' : '#FFFFFF', clipPath: 'ellipse(12% 50% at 124px 100px)' }} />
        <div className="absolute inset-0 opacity-10 transition-colors duration-700" style={{ backgroundColor: isOn ? '#FFFFFF' : '#FFFFFF', clipPath: 'ellipse(16% 60% at 124px 100px)' }} />
      </div>

      {/* The knob/camera - moves left to right with overflow:hidden to clip the view */}
      <div
        className="absolute h-10 w-10 rounded-full overflow-hidden transition-all duration-700"
        style={{
          left: isOn ? '52px' : '4px',
          top: '4px',
          zIndex: 10,
          transitionTimingFunction: 'cubic-bezier(0.68, -0.3, 0.265, 1.4)'
        }}
      >
        {/* Fixed base layer - always shows sun's orange/yellow color */}
        <div
          className="absolute rounded-full"
          style={{
            backgroundColor: '#E5A835',
            width: '40px',
            height: '40px',
            left: '0px',
            top: '0px'
          }}
        />

        {/* Sun's yellow overlay - moves left out of view in dark mode */}
        <div
          className="absolute transition-transform duration-700"
          style={{
            left: '0px',
            top: '0px',
            width: '100px',
            height: '48px',
            transform: `translateX(${isOn ? '-8px' : '0px'})`,
            transitionTimingFunction: 'cubic-bezier(0.68, -0.15, 0.265, 1.15)'
          }}
        >
          {/* Sun yellow overlay - creates shadow effect with offset positioning */}
          <div
            className="absolute rounded-full bg-yellow-400"
            style={{
              width: '40px',
              height: '40px',
              left: '-2px',
              top: '-2px'
            }}
          />
        </div>

        {/* Moving content layer - moon slides over the yellow base */}
        <div
          className="absolute transition-transform duration-700"
          style={{
            left: '0px',
            top: '0px',
            width: '100px',
            height: '48px',
            transform: `translateX(${isOn ? '-40px' : '0px'})`,
            transitionTimingFunction: 'cubic-bezier(0.68, -0.15, 0.265, 1.15)'
          }}
        >
          {/* Moon - starts at position 40px (outside camera view in light mode) */}
          <div
            className="absolute rounded-full overflow-hidden"
            style={{
              backgroundColor: '#7E8696',
              width: '40.5px',
              height: '40.5px',
              left: '40px',
              top: '0px'
            }}
          >
            <div
              className="absolute rounded-full bg-gray-400"
              style={{
                width: '40px',
                height: '40px',
                top: '-2px',
                right: '-2px'
              }}
            >
              {/* Moon craters - darker circles with inset shadow */}
              <div className="absolute rounded-full" style={{ width: '13px', height: '13px', backgroundColor: '#7E8696', left: '5px', top: '18px', boxShadow: 'inset 0 2px 3px rgba(0, 0, 0, 0.4)' }} />
              <div className="absolute rounded-full" style={{ width: '7px', height: '7px', backgroundColor: '#7E8696', left: '15px', top: '9px', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.4)' }} />
              <div className="absolute rounded-full" style={{ width: '8px', height: '8px', backgroundColor: '#7E8696', left: '23px', top: '26px', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.4)' }} />
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}