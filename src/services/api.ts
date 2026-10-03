import type { Medication, Pharmacy, SearchResult } from '../types'

// Mock data para o MVP
const MOCK_MEDICATIONS: Medication[] = [
  {
    id: '1',
    name: 'Diovan 500 mg',
    activePrinciple: 'Valsartana',
    concentration: '500 mg',
    pharmaceuticalForm: 'Comprimido',
    hasGeneric: true,
    genericInfo: {
      name: 'Valsartana 500 mg',
      price: 18.9,
      referencePrice: 32.9,
      savings: 14.0
    }
  },
  {
    id: '2',
    name: 'Puran 80',
    activePrinciple: 'Losartana',
    concentration: '80 mg',
    pharmaceuticalForm: 'Comprimido',
    hasGeneric: true,
    genericInfo: {
      name: 'Losartana 80 mg',
      price: 12.5,
      referencePrice: 24.9,
      savings: 12.4
    }
  },
  {
    id: '3',
    name: 'Novalgina 1g',
    activePrinciple: 'Dipirona',
    concentration: '1 g',
    pharmaceuticalForm: 'Comprimido',
    hasGeneric: false
  },
  {
    id: '4',
    name: 'Tylenol 750mg',
    activePrinciple: 'Paracetamol',
    concentration: '750 mg',
    pharmaceuticalForm: 'Comprimido',
    hasGeneric: true,
    genericInfo: {
      name: 'Paracetamol 750 mg',
      price: 8.9,
      referencePrice: 15.9,
      savings: 7.0
    }
  },
  {
    id: '5',
    name: 'Aspirina 100mg',
    activePrinciple: 'Ácido Acetilsalicílico',
    concentration: '100 mg',
    pharmaceuticalForm: 'Comprimido',
    hasGeneric: false
  }
]

const MOCK_PHARMACIES: Pharmacy[] = [
  { id: 'p1', name: 'Farmácia São Paulo', distance: 650, price: 32.9, availability: 'available', offersReservation: true, lat: -23.5505, lng: -46.6333 },
  { id: 'p2', name: 'Drogasil', distance: 1200, price: 35.5, availability: 'available', offersReservation: true, lat: -23.5515, lng: -46.6343 },
  { id: 'p3', name: 'Pague Menos', distance: 2100, price: 29.9, availability: 'limited', offersReservation: false, lat: -23.5525, lng: -46.6353 },
  { id: 'p4', name: 'Ultrafarma', distance: 3500, price: 27.5, availability: 'available', offersReservation: true, lat: -23.5535, lng: -46.6363 },
  { id: 'p5', name: 'Drogaria SP', distance: 4800, price: 31.0, availability: 'unavailable', offersReservation: false, lat: -23.5545, lng: -46.6373 }
]

export async function searchMedications(query: string): Promise<SearchResult[]> {
  // Simula delay de API
  await new Promise((r) => setTimeout(r, 800))

  const q = query.toLowerCase()
  const results = MOCK_MEDICATIONS.filter(
    (m) =>
      m.name.toLowerCase().includes(q) ||
      m.activePrinciple.toLowerCase().includes(q) ||
      m.concentration.toLowerCase().includes(q)
  )

  return results.map((medication) => ({
    medication,
    pharmacies: MOCK_PHARMACIES.map((p) => ({
      ...p,
      price: medication.genericInfo ? medication.genericInfo.price : p.price
    }))
  }))
}

export async function createOrder(_cart: unknown): Promise<{ orderId: string }> {
  await new Promise((r) => setTimeout(r, 500))
  return { orderId: `ORD-${Date.now()}` }
}

export async function confirmPayment(_orderId: string): Promise<{ success: boolean }> {
  await new Promise((r) => setTimeout(r, 1500))
  return { success: true }
}
