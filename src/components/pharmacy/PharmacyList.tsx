import React from 'react'
import type { Pharmacy } from '../../types'
import { PharmacyCard } from './PharmacyCard'

interface PharmacyListProps {
  pharmacies: Pharmacy[]
  onSelect: (p: Pharmacy) => void
}

export function PharmacyList({ pharmacies, onSelect }: PharmacyListProps) {
  return (
    <div className="space-y-3">
      {pharmacies.map((p) => (
        <PharmacyCard key={p.id} pharmacy={p} onSelect={() => onSelect(p)} />
      ))}
    </div>
  )
}
