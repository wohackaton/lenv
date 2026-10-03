import React from 'react'
import { List, Map } from 'lucide-react'

interface MapToggleProps {
  mode: 'list' | 'map'
  onChange: (mode: 'list' | 'map') => void
}

export function MapToggle({ mode, onChange }: MapToggleProps) {
  return (
    <div className="flex rounded-lg border border-gray-200 bg-surface-0 p-1 dark:border-navy-800 dark:bg-navy-800">
      <button
        onClick={() => onChange('list')}
        className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
          mode === 'list' ? 'bg-teal-500 text-white' : 'text-gray-500 hover:text-navy-900 dark:text-cyan-100'
        }`}
      >
        <List size={16} />
        Lista
      </button>
      <button
        onClick={() => onChange('map')}
        className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
          mode === 'map' ? 'bg-teal-500 text-white' : 'text-gray-500 hover:text-navy-900 dark:text-cyan-100'
        }`}
      >
        <Map size={16} />
        Mapa
      </button>
    </div>
  )
}
