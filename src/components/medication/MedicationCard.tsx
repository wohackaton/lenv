import React from 'react'
import { MapPin, Info } from 'lucide-react'
import type { Medication } from '../../types'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Tooltip } from '../ui/Tooltip'

interface MedicationCardProps {
  medication: Medication
  onClick?: () => void
  onGenericClick?: () => void
}

export function MedicationCard({ medication, onClick, onGenericClick }: MedicationCardProps) {
  return (
    <div className="rounded-lg border border-gray-100 bg-surface-0 p-4 shadow-sm transition-all hover:shadow-md dark:border-navy-800 dark:bg-navy-800">
      <div className="mb-1 flex items-start justify-between">
        <h3 className="text-base font-semibold text-navy-900 dark:text-white">{medication.name}</h3>
        {medication.hasGeneric && (
          <Tooltip content="Existe opção genérica">
            <button onClick={onGenericClick} className="rounded-full p-1 hover:bg-mint-50 dark:hover:bg-navy-900">
              <Info size={18} className="text-info" />
            </button>
          </Tooltip>
        )}
      </div>

      <p className="mb-1 text-sm text-gray-500 dark:text-cyan-100">{medication.activePrinciple}</p>
      <p className="mb-2 text-xs text-gray-400">{medication.concentration} • {medication.pharmaceuticalForm}</p>

      <div className="mb-3 flex items-center gap-2">
        <Badge variant="success">Disponível</Badge>
        <span className="flex items-center gap-1 text-xs text-gray-500">
          <MapPin size={12} />
          650 m
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-teal-500">R$ 32,90</span>
        <Button size="sm" onClick={onClick}>
          Ver farmácias
        </Button>
      </div>
    </div>
  )
}
