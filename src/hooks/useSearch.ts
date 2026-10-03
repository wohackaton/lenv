import { useState, useCallback, useRef } from 'react'
import { search } from '../services/search'
import type { Medication } from '../types'

export function useSearch() {
  const [results, setResults] = useState<Medication[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout>>()

  const executeSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResults([])
      return
    }

    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(async () => {
      setLoading(true)
      setError(null)
      try {
        const meds = await search(query)
        setResults(meds)
      } catch (e) {
        setError('Erro ao buscar medicamentos')
      } finally {
        setLoading(false)
      }
    }, 300)
  }, [])

  const clear = useCallback(() => {
    setResults([])
    setError(null)
  }, [])

  return { results, loading, error, executeSearch, clear }
}
