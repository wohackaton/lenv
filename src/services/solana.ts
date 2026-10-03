// Serviço Solana Devnet — integração com Phantom Wallet
// O front-end NÃO cria transações diretamente. O backend controla valor, destinatário e confirmação.

const DEVNET_RPC = 'https://api.devnet.solana.com'

export interface WalletAdapter {
  connect: () => Promise<string>
  disconnect: () => Promise<void>
  signTransaction: (tx: unknown) => Promise<string>
  publicKey: string | null
}

// Phantom Wallet Adapter (simulado para MVP)
export class PhantomAdapter implements WalletAdapter {
  publicKey: string | null = null

  async connect(): Promise<string> {
    // Em produção: window.phantom.solana.connect()
    await new Promise((r) => setTimeout(r, 1000))
    this.publicKey = 'DevNet' + Math.random().toString(36).slice(2, 10)
    return this.publicKey
  }

  async disconnect(): Promise<void> {
    this.publicKey = null
  }

  async signTransaction(_tx: unknown): Promise<string> {
    // Em produção: wallet.signTransaction(transaction)
    await new Promise((r) => setTimeout(r, 1500))
    return 'sig_' + Math.random().toString(36).slice(2, 16)
  }
}

export const getRpcUrl = () => DEVNET_RPC

export async function verifyTransaction(_signature: string): Promise<boolean> {
  // Em produção: connection.confirmTransaction(signature)
  await new Promise((r) => setTimeout(r, 1000))
  return true
}
