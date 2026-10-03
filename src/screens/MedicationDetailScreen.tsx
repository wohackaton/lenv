import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useStore } from '../store'
import { PharmacyList } from '../components/pharmacy/PharmacyList'
import { MapView } from '../components/map/MapView'
import { MapToggle } from '../components/map/MapToggle'
import { BottomSheet } from '../components/layout/BottomSheet'
import { GenericCard } from '../components/medication/GenericCard'
import { searchMedications } from '../services/api'
import type { Pharmacy } from '../types'

export function MedicationDetailScreen() {
  const { selectedMedication, selectMedication, selectPharmacy, viewMode, setViewMode, showGenericSheet, setShowGenericSheet } = useStore()
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([])
  const [loading, setLoading] = useState(true)

  React.useEffect(() => {
    if (selectedMedication) {
      setLoading(true)
      searchMedications(selectedMedication.name).then((results) => {
        const r = results.find((x) => x.medication.id === selectedMedication.id)
        setPharmacies(r?.pharmacies || [])
        setLoading(false)
      })
    }
  }, [selectedMedication])

  if (!selectedMedication) return null

  const handleBack = () => selectMedication(null)

  const handlePharmacySelect = (p: Pharmacy) => {
    selectPharmacy(p)
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-6">
      <button onClick={handleBack} className="mb-4 flex items-center gap-2 text-sm text-gray-500 hover:text-navy-900 dark:text-cyan-100">
        <ArrowLeft size={16} />
        Voltar
      </button>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-900 dark:text-white">{selectedMedication.name}</h1>
        <p className="text-gray-500 dark:text-cyan-100">{selectedMedication.activePrinciple} • {selectedMedication.concentration}</p>
      </div>

      {selectedMedication.hasGeneric && selectedMedication.genericInfo && (
        <button
          onClick={() => setShowGenericSheet(true)}
          className="mb-4 w-full rounded-lg border border-lilac bg-surface-0 p-3 text-left dark:bg-navy-800"
        >
          <span className="text-sm font-medium text-info">ⓘ Existe opção genérica</span>
          <p className="text-xs text-gray-500">Veja informações sobre o genérico</p>
        </button>
      )}

      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-cyan-100">
          {pharmacies.length > 0 ? `Encontramos ${pharmacies.length} farmácias perto de você.` : ''}
        </p>
        <MapToggle mode={viewMode} onChange={setViewMode} />
      </div>

      {loading ? (
        <div className="space-y-3">
          <div className="skeleton h-24" />
          <div className="skeleton h-24" />
          <div className="skeleton h-24" />
        </div>
      ) : viewMode === 'list' ? (
        <PharmacyList pharmacies={pharmacies} onSelect={handlePharmacySelect} />
      ) : (
        <MapView pharmacies={pharmacies} onSelect={handlePharmacySelect} />
      )}

      <BottomSheet open={showGenericSheet} onClose={() => setShowGenericSheet(false)} title="Opção genérica">
        {selectedMedication.genericInfo && (
          <GenericCard generic={selectedMedication.genericInfo} onViewOption={() => setShowGenericSheet(false)} />
        )}
      </BottomSheet>
    </div>
  )
}
