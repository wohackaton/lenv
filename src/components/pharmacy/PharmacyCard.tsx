import React from 'react'
import { MapPin } from 'lucide-react'
import type { Pharmacy } from '../../types'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

interface PharmacyCardProps {
  pharmacy: Pharmacy
  onReserve?: () => void
  onSelect?: () => void
}

const availabilityConfig = {
  available: { variant: 'success' as const, label: 'Disponível' },
  limited: { variant: 'warning' as const, label: 'Estoque limitado' },
  unavailable: { variant: 'error' as const, label: 'Indisponível' }
}

export function PharmacyCard({ pharmacy, onReserve, onSelect }: PharmacyCardProps) {
  const config = availabilityConfig[pharmacy.availability]
  const distanceText = pharmacy.distance < 1000 ? `${pharmacy.distance} m` : `${(pharmacy.distance / 1000).toFixed(1)} km`

  return (
    <div className="rounded-lg border border-gray-100 bg-surface-0 p-4 shadow-sm dark:border-navy-800 dark:bg-navy-800">
      <div className="mb-2 flex items-start justify-between">
        <h4 className="font-medium text-navy-900 dark:text-white">{pharmacy.name}</h4>
        <Badge variant={config.variant}>{config.label}</Badge>
      </div>

      <div className="mb-3 flex items-center gap-4 text-sm text-gray-500 dark:text-cyan-100">
        <span className="flex items-center gap-1">
          <MapPin size={14} />
          {distanceText}
        </span>
        <span className="font-semibold text-teal-500">R$ {pharmacy.price.toFixed(2).replace('.', ',')}</span>
      </div>

      {pharmacy.offersReservation && pharmacy.availability !== 'unavailable' && (
        <Button size="sm" variant="secondary" className="w-full" onClick={onReserve || onSelect}>
          Reservar
        </Button>
      )}
    </div>
  )
}
