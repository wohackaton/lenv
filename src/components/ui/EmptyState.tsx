import React from 'react'
import { SearchX } from 'lucide-react'

interface EmptyStateProps {
  title?: string
  message?: string
}

export function EmptyState({ title = 'Nenhum resultado encontrado', message = 'Tente buscar por outro medicamento.' }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <SearchX size={48} className="mb-4 text-gray-400" />
      <h3 className="mb-1 text-lg font-semibold text-navy-900">{title}</h3>
      <p className="text-sm text-gray-500">{message}</p>
    </div>
  )
}
