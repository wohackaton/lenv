import { searchMedications } from './api'
import type { Medication } from '../types'

let cache: Record<string, Medication[]> = {}

export async function search(query: string): Promise<Medication[]> {
  if (cache[query]) return cache[query]
  const results = await searchMedications(query)
  const meds = results.map((r) => r.medication)
  cache[query] = meds
  return meds
}

export function clearCache() {
  cache = {}
}
