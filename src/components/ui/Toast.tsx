import React, { useEffect } from 'react'
import { X } from 'lucide-react'

interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'info'
  onClose: () => void
  duration?: number
}

export function Toast({ message, type = 'info', onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [onClose, duration])

  const colors = {
    success: 'bg-success text-white',
    error: 'bg-error text-white',
    info: 'bg-info text-white'
  }

  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 rounded-lg px-4 py-3 shadow-lg ${colors[type]} animate-in slide-in-from-top`}>
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 rounded-full p-1 hover:bg-white/20">
        <X size={16} />
      </button>
    </div>
  )
}
