import React from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'

interface ErrorStateProps {
  message?: string
  onRetry?: () => void
}

export function ErrorState({ message = 'Algo deu errado', onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <AlertCircle size={48} className="mb-4 text-error" />
      <h3 className="mb-1 text-lg font-semibold text-navy-900">{message}</h3>
      {onRetry && (
        <button onClick={onRetry} className="mt-4 inline-flex items-center gap-2 rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-400">
          <RefreshCw size={16} />
          Tentar novamente
        </button>
      )}
    </div>
  )
}
