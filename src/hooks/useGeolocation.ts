import { useState, useCallback } from 'react'
import type { UserLocation } from '../types'

export function useGeolocation() {
  const [location, setLocation] = useState<UserLocation | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const requestLocation = useCallback(() => {
    setLoading(true)
    setError(null)

    if (!navigator.geolocation) {
      setError('Geolocalização não suportada')
      setLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        })
        setLoading(false)
      },
      (err) => {
        setError(err.message)
        setLoading(false)
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }, [])

  const setManualLocation = useCallback((lat: number, lng: number, address?: string) => {
    setLocation({ lat, lng, address })
  }, [])

  return { location, loading, error, requestLocation, setManualLocation }
}
