import React, { useState } from 'react'
import { Search, Camera, Mic } from 'lucide-react'

interface SearchBarProps {
  onSearch: (query: string) => void
  onImageSearch?: () => void
  onVoiceSearch?: () => void
}

export function SearchBar({ onSearch, onImageSearch, onVoiceSearch }: SearchBarProps) {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim()) onSearch(value)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-surface-0 px-4 py-3 shadow-sm focus-within:border-teal-500 dark:border-navy-800 dark:bg-navy-800">
        <Search size={20} className="text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="O que você está procurando?"
          className="flex-1 bg-transparent text-base outline-none placeholder:text-gray-400 dark:text-white"
        />
        {onImageSearch && (
          <button type="button" onClick={onImageSearch} className="rounded-full p-1.5 hover:bg-gray-100 dark:hover:bg-navy-900">
            <Camera size={20} className="text-gray-500" />
          </button>
        )}
        {onVoiceSearch && (
          <button type="button" onClick={onVoiceSearch} className="rounded-full p-1.5 hover:bg-gray-100 dark:hover:bg-navy-900">
            <Mic size={20} className="text-gray-500" />
          </button>
        )}
      </div>
    </form>
  )
}
