import { useState, useCallback } from 'react'
import { PhantomAdapter } from '../services/solana'

export function useWallet() {
  const [publicKey, setPublicKey] = useState<string | null>(null)
  const [connecting, setConnecting] = useState(false)
  const [adapter] = useState(() => new PhantomAdapter())

  const connect = useCallback(async () => {
    setConnecting(true)
    try {
      const key = await adapter.connect()
      setPublicKey(key)
      return key
    } finally {
      setConnecting(false)
    }
  }, [adapter])

  const disconnect = useCallback(async () => {
    await adapter.disconnect()
    setPublicKey(null)
  }, [adapter])

  return { publicKey, connecting, connect, disconnect }
}
