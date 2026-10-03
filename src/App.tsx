import React from 'react'
import { Header } from './components/layout/Header'
import { HomeScreen } from './screens/HomeScreen'
import { MedicationDetailScreen } from './screens/MedicationDetailScreen'
import { CheckoutScreen } from './screens/CheckoutScreen'
import { useStore } from './store'

export default function App() {
  const { selectedMedication, selectedPharmacy, darkMode } = useStore()

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-mint-50 dark:bg-navy-900">
      <Header />
      {selectedPharmacy ? (
        <CheckoutScreen />
      ) : selectedMedication ? (
        <MedicationDetailScreen />
      ) : (
        <HomeScreen />
      )}
    </div>
  )
}
