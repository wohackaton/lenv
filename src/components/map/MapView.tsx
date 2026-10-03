import React from 'react'
import { MapPin } from 'lucide-react'
import type { Pharmacy } from '../../types'

interface MapViewProps {
  pharmacies: Pharmacy[]
  onSelect: (p: Pharmacy) => void
}

export function MapView({ pharmacies, onSelect }: MapViewProps) {
  // Mapa simplificado para MVP — em produção usar Mapbox GL JS ou Leaflet
  return (
    <div className="relative h-80 overflow-hidden rounded-lg bg-cyan-100 dark:bg-navy-800">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin size={48} className="mx-auto mb-2 text-teal-500" />
          <p className="text-sm text-gray-500 dark:text-cyan-100">Mapa de farmácias</p>
          <p className="text-xs text-gray-400">{pharmacies.length} farmácias encontradas</p>
        </div>
      </div>

      {/* Pins simulados */}
      {pharmacies.slice(0, 5).map((p, i) => (
        <button
          key={p.id}
          onClick={() => onSelect(p)}
          className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-white shadow-lg transition-transform hover:scale-110"
          style={{
            top: `${20 + (i * 15) % 60}%`,
            left: `${15 + (i * 20) % 70}%`
          }}
        >
          <MapPin size={16} />
        </button>
      ))}
    </div>
  )
}
