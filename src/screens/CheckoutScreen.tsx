import React from 'react'
import { useStore } from '../store'
import { CheckoutModal } from '../components/payment/CheckoutModal'
import { PaymentStatus } from '../components/payment/PaymentStatus'
import { usePayment } from '../hooks/usePayment'

export function CheckoutScreen() {
  const { selectedMedication, selectedPharmacy, selectPharmacy, selectMedication } = useStore()
  const { state, processPayment, cancel, reset } = usePayment()

  const handleConfirm = () => {
    if (selectedMedication && selectedPharmacy) {
      processPayment(selectedMedication, selectedPharmacy)
    }
  }

  const handleClose = () => {
    reset()
    selectPharmacy(null)
    selectMedication(null)
  }

  if (!selectedMedication || !selectedPharmacy) return null

  return (
    <>
      <CheckoutModal
        open={state === 'IDLE' || state === 'CHECKOUT'}
        onClose={handleClose}
        medication={selectedMedication}
        pharmacy={selectedPharmacy}
        onConfirm={handleConfirm}
      />
      <PaymentStatus state={state} onCancel={cancel} onClose={handleClose} />
    </>
  )
}
