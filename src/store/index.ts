import { create } from 'zustand'
import type { Medication, Pharmacy, PaymentState, CartItem, UserLocation } from '../types'

interface AppState {
  // Search
  query: string
  searchResults: Medication[]
  isSearching: boolean
  searchError: string | null

  // Location
  userLocation: UserLocation | null
  locationLoading: boolean

  // Selection
  selectedMedication: Medication | null
  selectedPharmacy: Pharmacy | null
  cart: CartItem[]

  // Payment
  paymentState: PaymentState
  paymentError: string | null

  // UI
  viewMode: 'list' | 'map'
  darkMode: boolean
  showGenericSheet: boolean

  // Actions
  setQuery: (q: string) => void
  setSearchResults: (results: Medication[]) => void
  setSearching: (v: boolean) => void
  setSearchError: (e: string | null) => void
  setUserLocation: (loc: UserLocation) => void
  setLocationLoading: (v: boolean) => void
  selectMedication: (m: Medication | null) => void
  selectPharmacy: (p: Pharmacy | null) => void
  addToCart: (item: CartItem) => void
  setPaymentState: (s: PaymentState) => void
  setPaymentError: (e: string | null) => void
  setViewMode: (m: 'list' | 'map') => void
  toggleDarkMode: () => void
  setShowGenericSheet: (v: boolean) => void
  reset: () => void
}

export const useStore = create<AppState>((set) => ({
  query: '',
  searchResults: [],
  isSearching: false,
  searchError: null,
  userLocation: null,
  locationLoading: false,
  selectedMedication: null,
  selectedPharmacy: null,
  cart: [],
  paymentState: 'IDLE',
  paymentError: null,
  viewMode: 'list',
  darkMode: false,
  showGenericSheet: false,

  setQuery: (query) => set({ query }),
  setSearchResults: (searchResults) => set({ searchResults }),
  setSearching: (isSearching) => set({ isSearching }),
  setSearchError: (searchError) => set({ searchError }),
  setUserLocation: (userLocation) => set({ userLocation }),
  setLocationLoading: (locationLoading) => set({ locationLoading }),
  selectMedication: (selectedMedication) => set({ selectedMedication }),
  selectPharmacy: (selectedPharmacy) => set({ selectedPharmacy }),
  addToCart: (item) => set((s) => ({ cart: [...s.cart, item] })),
  setPaymentState: (paymentState) => set({ paymentState }),
  setPaymentError: (paymentError) => set({ paymentError }),
  setViewMode: (viewMode) => set({ viewMode }),
  toggleDarkMode: () => set((s) => ({ darkMode: !s.darkMode })),
  setShowGenericSheet: (showGenericSheet) => set({ showGenericSheet }),
  reset: () =>
    set({
      query: '',
      searchResults: [],
      isSearching: false,
      searchError: null,
      selectedMedication: null,
      selectedPharmacy: null,
      cart: [],
      paymentState: 'IDLE',
      paymentError: null,
      viewMode: 'list',
      showGenericSheet: false
    })
}))
