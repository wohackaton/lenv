import React, { useEffect } from 'react'
import { SearchBar } from '../components/search/SearchBar'
import { SearchResult } from '../components/search/SearchResult'
import { useSearch } from '../hooks/useSearch'
import { useGeolocation } from '../hooks/useGeolocation'
import { useStore } from '../store'
import { Button } from '../components/ui/Button'

export function HomeScreen() {
  const { results, loading, error, executeSearch, clear } = useSearch()
  const { location, loading: locLoading, requestLocation } = useGeolocation()
  const { setQuery, setUserLocation, selectMedication } = useStore()

  useEffect(() => {
    requestLocation()
  }, [requestLocation])

  useEffect(() => {
    if (location) setUserLocation(location)
  }, [location, setUserLocation])

  const handleSearch = (q: string) => {
    setQuery(q)
    executeSearch(q)
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-6">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold text-navy-900 dark:text-white">Encontre. Pague. Retire.</h1>
        <p className="text-sm text-gray-500 dark:text-cyan-100">Encontre medicamentos em farmácias próximas a você.</p>
      </div>

      <SearchBar onSearch={handleSearch} />

      {locLoading && (
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-teal-500 border-t-transparent" />
          Obtendo localização…
        </div>
      )}

      {error && (
        <div className="mt-4 rounded-lg bg-error/10 p-3 text-sm text-error">
          {error}
          <Button size="sm" variant="secondary" className="ml-2" onClick={() => executeSearch(useStore.getState().query)}>
            Retry
          </Button>
        </div>
      )}

      <div className="mt-6">
        <SearchResult results={results} loading={loading} onSelect={(med) => selectMedication(med)} />
      </div>

      {results.length > 0 && (
        <div className="mt-4 text-center">
          <button onClick={clear} className="text-sm text-teal-500 hover:underline">
            Limpar resultados
          </button>
        </div>
      )}
    </div>
  )
}
