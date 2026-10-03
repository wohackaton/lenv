export interface Medication {
  id: string
  name: string
  activePrinciple: string
  concentration: string
  pharmaceuticalForm: string
  hasGeneric: boolean
  genericInfo?: GenericInfo
}

export interface GenericInfo {
  name: string
  price: number
  referencePrice: number
  savings: number
}

export interface Pharmacy {
  id: string
  name: string
  distance: number
  price: number
  availability: 'available' | 'limited' | 'unavailable'
  offersReservation: boolean
  lat: number
  lng: number
}

export interface SearchResult {
  medication: Medication
  pharmacies: Pharmacy[]
}

export type PaymentState =
  | 'IDLE'
  | 'CHECKOUT'
  | 'WALLET_CONNECT'
  | 'AWAITING_SIGNATURE'
  | 'PROCESSING'
  | 'CONFIRMED'
  | 'REJECTED'
  | 'FAILED'
  | 'EXPIRED'
  | 'CANCELLED'

export interface CartItem {
  medication: Medication
  pharmacy: Pharmacy
  quantity: number
}

export interface UserLocation {
  lat: number
  lng: number
  address?: string
}
