import React from 'react'
import { Info } from 'lucide-react'
import type { GenericInfo } from '../../types'
import { Button } from '../ui/Button'

interface GenericCardProps {
  generic: GenericInfo
  onViewOption: () => void
}

export function GenericCard({ generic, onViewOption }: GenericCardProps) {
  return (
    <div className="rounded-lg border border-lilac bg-surface-0 p-4 dark:bg-navy-800">
      <div className="mb-3 flex items-center gap-2">
        <Info size={18} className="text-info" />
        <span className="text-sm font-medium text-navy-900 dark:text-white">Existe opção genérica</span>
      </div>

      <div className="mb-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-cyan-100">{generic.name}</span>
          <span className="font-semibold text-teal-500">R$ {generic.price.toFixed(2).replace('.', ',')}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Medicamento de referência</span>
          <span className="text-sm text-gray-400">R$ {generic.referencePrice.toFixed(2).replace('.', ',')}</span>
        </div>
        <div className="rounded-md bg-mint-50 p-2 text-center dark:bg-navy-900">
          <span className="text-sm font-medium text-teal-500">
            Diferença encontrada: R$ {generic.savings.toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>

      <Button className="w-full" onClick={onViewOption}>
        Ver opção
      </Button>

      <p className="mt-3 text-center text-xs text-gray-400">
        Mesmo princípio ativo. Atende aos requisitos regulatórios de equivalência. Converse com o farmacêutico sobre a substituição.
      </p>
    </div>
  )
}
