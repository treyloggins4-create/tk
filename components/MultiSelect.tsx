'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, X } from 'lucide-react'

interface Option {
  value: string
  label: string
}

interface MultiSelectProps {
  options: Option[]
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  className?: string
  required?: boolean
}

export default function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select options...",
  className = "",
  required = false
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const selectedLabels = value.map(val => 
    options.find(option => option.value === val)?.label
  ).filter(Boolean)

  const handleToggle = () => {
    setIsOpen(!isOpen)
    setSearchTerm('')
  }

  const handleSelect = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter(v => v !== optionValue))
    } else {
      onChange([...value, optionValue])
    }
  }

  const handleRemove = (optionValue: string) => {
    onChange(value.filter(v => v !== optionValue))
  }

  const handleClear = () => {
    onChange([])
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchTerm('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors cursor-pointer bg-white min-h-[48px] flex items-center justify-between"
        onClick={handleToggle}
      >
        <div className="flex-1 flex flex-wrap gap-1">
          {selectedLabels.length > 0 ? (
            selectedLabels.map((label, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary-100 text-primary-800"
              >
                {label}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    const optionValue = options.find(opt => opt.label === label)?.value
                    if (optionValue) handleRemove(optionValue)
                  }}
                  className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-primary-200"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))
          ) : (
            <span className="text-gray-500">{placeholder}</span>
          )}
        </div>
        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-hidden">
          <div className="p-2 border-b border-gray-200">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 flex items-center justify-between ${
                    value.includes(option.value) ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                  }`}
                  onClick={() => handleSelect(option.value)}
                >
                  <span>{option.label}</span>
                  {value.includes(option.value) && (
                    <div className="w-4 h-4 bg-primary-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500">No services found</div>
            )}
          </div>
          {value.length > 0 && (
            <div className="p-2 border-t border-gray-200">
              <button
                type="button"
                onClick={handleClear}
                className="w-full text-left px-2 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
