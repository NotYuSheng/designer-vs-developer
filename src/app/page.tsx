'use client'

import { useState } from 'react'
import ToggleButton from '@/components/ToggleButton'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="text-center">
        <h1 className={`text-3xl font-bold mb-8 transition-colors duration-500 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          Designer vs Developer
        </h1>
        <ToggleButton isOn={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
      </div>
    </div>
  );
}
