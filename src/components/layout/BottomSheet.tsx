import React from 'react'
import { X } from 'lucide-react'

interface BottomSheetProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export function BottomSheet({ open, onClose, title, children }: BottomSheetProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-t-xl bg-surface-0 p-6 shadow-2xl animate-in slide-in-from-bottom dark:bg-navy-800">
        <div className="mb-4 flex items-center justify-between">
          {title && <h3 className="text-lg font-semibold text-navy-900 dark:text-white">{title}</h3>}
          <button onClick={onClose} className="ml-auto rounded-full p-1 hover:bg-gray-100 dark:hover:bg-navy-900">
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
