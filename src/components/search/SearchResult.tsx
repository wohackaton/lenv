import React from 'react'
import type { Medication } from '../../types'
import { MedicationCardSkeleton } from '../ui/Skeleton'
import { EmptyState } from '../ui/EmptyState'
import { MedicationCard } from '../medication/MedicationCard'

interface SearchResultProps {
  results: Medication[]
  loading: boolean
  onSelect: (med: Medication) => void
}

export function SearchResult({ results, loading, onSelect }: SearchResultProps) {
  if (loading) {
    return (
      <div className="space-y-3">
        <MedicationCardSkeleton />
        <MedicationCardSkeleton />
        <MedicationCardSkeleton />
      </div>
    )
  }

  if (results.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="space-y-3">
      {results.map((med) => (
        <MedicationCard key={med.id} medication={med} onClick={() => onSelect(med)} />
      ))}
    </div>
  )
}
