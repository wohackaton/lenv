import React from 'react'
import { Modal } from '../layout/Modal'
import { Button } from '../ui/Button'
import type { Medication, Pharmacy } from '../../types'

interface CheckoutModalProps {
  open: boolean
  onClose: () => void
  medication: Medication | null
  pharmacy: Pharmacy | null
  onConfirm: () => void
}

export function CheckoutModal({ open, onClose, medication, pharmacy, onConfirm }: CheckoutModalProps) {
  if (!medication || !pharmacy) return null

  return (
    <Modal open={open} onClose={onClose} title="Resumo do pedido">
      <div className="space-y-4">
        <div className="rounded-lg bg-surface-50 p-4 dark:bg-navy-900">
          <p className="text-sm text-gray-500 dark:text-cyan-100">Medicamento</p>
          <p className="font-semibold text-navy-900 dark:text-white">{medication.name}</p>
          <p className="text-sm text-gray-500">{medication.concentration} • {medication.pharmaceuticalForm}</p>
        </div>

        <div className="rounded-lg bg-surface-50 p-4 dark:bg-navy-900">
          <p className="text-sm text-gray-500 dark:text-cyan-100">Farmácia</p>
          <p className="font-semibold text-navy-900 dark:text-white">{pharmacy.name}</p>
          <p className="text-sm text-gray-500">
            {pharmacy.distance < 1000 ? `${pharmacy.distance} m` : `${(pharmacy.distance / 1000).toFixed(1)} km`}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-navy-800">
          <span className="text-gray-500 dark:text-cyan-100">Total</span>
          <span className="text-xl font-bold text-teal-500">R$ {pharmacy.price.toFixed(2).replace('.', ',')}</span>
        </div>

        <Button className="w-full" size="lg" onClick={onConfirm}>
          Pagar com Solana
        </Button>
      </div>
    </Modal>
  )
}
