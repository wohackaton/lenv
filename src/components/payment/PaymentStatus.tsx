import React from 'react'
import { CheckCircle, XCircle, Clock, AlertCircle, X } from 'lucide-react'
import type { PaymentState } from '../../types'
import { Button } from '../ui/Button'

interface PaymentStatusProps {
  state: PaymentState
  onCancel?: () => void
  onClose?: () => void
}

const stateConfig: Record<PaymentState, { icon: React.ReactNode; color: string; title: string; message: string }> = {
  IDLE: { icon: null, color: '', title: '', message: '' },
  CHECKOUT: { icon: <Clock size={48} />, color: 'text-info', title: 'Checkout', message: 'Revise seu pedido.' },
  WALLET_CONNECT: { icon: <Clock size={48} />, color: 'text-info', title: 'Conectar carteira', message: 'Conecte sua carteira Solana.' },
  AWAITING_SIGNATURE: { icon: <Clock size={48} />, color: 'text-warning', title: 'Assinatura', message: 'Assine a transação na sua carteira.' },
  PROCESSING: { icon: <Clock size={48} className="animate-spin" />, color: 'text-info', title: 'Processando', message: 'Confirmando seu pagamento…' },
  CONFIRMED: { icon: <CheckCircle size={48} />, color: 'text-success', title: 'Sucesso', message: 'Pagamento confirmado.' },
  REJECTED: { icon: <XCircle size={48} />, color: 'text-error', title: 'Rejeitado', message: 'A transação foi rejeitada.' },
  FAILED: { icon: <AlertCircle size={48} />, color: 'text-error', title: 'Erro', message: 'Não foi possível concluir o pagamento.' },
  EXPIRED: { icon: <Clock size={48} />, color: 'text-warning', title: 'Expirado', message: 'A transação expirou.' },
  CANCELLED: { icon: <X size={48} />, color: 'text-gray-400', title: 'Usuário cancelou', message: 'O pagamento foi cancelado.' }
}

export function PaymentStatus({ state, onCancel, onClose }: PaymentStatusProps) {
  if (state === 'IDLE') return null

  const config = stateConfig[state]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-sm rounded-xl bg-surface-0 p-8 text-center shadow-2xl dark:bg-navy-800">
        <div className={`mb-4 flex justify-center ${config.color}`}>
          {config.icon}
        </div>
        <h3 className="mb-2 text-xl font-bold text-navy-900 dark:text-white">{config.title}</h3>
        <p className="mb-6 text-gray-500 dark:text-cyan-100">{config.message}</p>

        <div className="flex gap-3">
          {(state === 'AWAITING_SIGNATURE' || state === 'PROCESSING') && onCancel && (
            <Button variant="secondary" className="flex-1" onClick={onCancel}>
              Cancelar
            </Button>
          )}
          {(state === 'CONFIRMED' || state === 'FAILED' || state === 'CANCELLED' || state === 'REJECTED' || state === 'EXPIRED') && onClose && (
            <Button className="flex-1" onClick={onClose}>
              Fechar
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
