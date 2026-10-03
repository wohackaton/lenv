import React from 'react'
import { MapPin, Moon, Sun } from 'lucide-react'
import { useStore } from '../../store'

export function Header() {
  const { userLocation, darkMode, toggleDarkMode } = useStore()

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-surface-0/95 backdrop-blur dark:border-navy-800 dark:bg-navy-900/95">
      <div className="mx-auto flex h-16 max-w-lg items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 text-white font-bold text-sm">
            L
          </div>
          <span className="text-xl font-bold text-navy-900 dark:text-white">LENV</span>
        </div>

        <div className="flex items-center gap-3">
          {userLocation && (
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-cyan-100">
              <MapPin size={14} />
              <span className="max-w-[100px] truncate">{userLocation.address || 'Localização ativa'}</span>
            </div>
          )}
          <button onClick={toggleDarkMode} className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-navy-800">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  )
}
