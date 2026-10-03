import { useState, useCallback } from 'react'
import type { PaymentState } from '../types'
import { createOrder, confirmPayment } from '../services/api'
import { PhantomAdapter } from '../services/solana'

const STATE_MESSAGES: Record<PaymentState, { title: string; message: string }> = {
  IDLE: { title: '', message: '' },
  CHECKOUT: { title: 'Checkout', message: 'Revise seu pedido.' },
  WALLET_CONNECT: { title: 'Conectar carteira', message: 'Conecte sua carteira Solana.' },
  AWAITING_SIGNATURE: { title: 'Assinatura', message: 'Assine a transação na sua carteira.' },
  PROCESSING: { title: 'Processando', message: 'Confirmando seu pagamento…' },
  CONFIRMED: { title: 'Sucesso', message: 'Pagamento confirmado.' },
  REJECTED: { title: 'Rejeitado', message: 'A transação foi rejeitada.' },
  FAILED: { title: 'Erro', message: 'Não foi possível concluir o pagamento.' },
  EXPIRED: { title: 'Expirado', message: 'A transação expirou.' },
  CANCELLED: { title: 'Usuário cancelou', message: 'O pagamento foi cancelado.' }
}

export function usePayment() {
  const [state, setState] = useState<PaymentState>('IDLE')
  const [error, setError] = useState<string | null>(null)
  const [wallet] = useState(() => new PhantomAdapter())

  const getStateMessage = useCallback(() => STATE_MESSAGES[state], [state])

  const connectWallet = useCallback(async () => {
    setState('WALLET_CONNECT')
    try {
      await wallet.connect()
      setState('AWAITING_SIGNATURE')
    } catch {
      setState('FAILED')
      setError('Não foi possível conectar a carteira.')
    }
  }, [wallet])

  const processPayment = useCallback(async (medication: unknown, pharmacy: unknown) => {
    setState('AWAITING_SIGNATURE')
    try {
      // 1. Cria pedido no backend
      const order = await createOrder({ medication, pharmacy })

      // 2. Assina transação
      const signature = await wallet.signTransaction({ orderId: order.orderId })

      // 3. Processa pagamento
      setState('PROCESSING')
      const result = await confirmPayment(order.orderId)

      if (result.success) {
        setState('CONFIRMED')
      } else {
        setState('FAILED')
      }
    } catch {
      setState('FAILED')
      setError('Erro ao processar pagamento.')
    }
  }, [wallet])

  const cancel = useCallback(() => {
    setState('CANCELLED')
  }, [])

  const reset = useCallback(() => {
    setState('IDLE')
    setError(null)
  }, [])

  return { state, error, getStateMessage, connectWallet, processPayment, cancel, reset }
}
