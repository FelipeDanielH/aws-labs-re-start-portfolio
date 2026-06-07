'use client'

import { CATEGORIES, getUniqueServices } from '@/lib/mock-data'
import type { AWSService, Category } from '@/lib/mock-data'

interface FilterControlsProps {
  selectedCategory: Category | null
  selectedService: AWSService | null
  onCategoryChange: (category: Category | null) => void
  onServiceChange: (service: AWSService | null) => void
}

export function FilterControls({
  selectedCategory,
  selectedService,
  onCategoryChange,
  onServiceChange,
}: FilterControlsProps) {
  const services = getUniqueServices()

  return (
    <div className="border-b border-[#e8e8e8] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange(null)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-[#001a33] text-white'
                  : 'border border-[#e8e8e8] bg-white text-[#001a33] hover:border-[#001a33]'
              }`}
            >
              Todas
            </button>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(selectedCategory === category ? null : category)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#ff8c00] text-white'
                    : 'border border-[#e8e8e8] bg-white text-[#001a33] hover:border-[#ff8c00]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => onServiceChange(null)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              selectedService === null
                ? 'bg-[#001a33] text-white'
                : 'border border-[#e8e8e8] bg-white text-[#001a33] hover:border-[#001a33]'
            }`}
          >
            Todos los servicios
          </button>
          {services.map((service) => (
            <button
              key={service}
              onClick={() => onServiceChange(selectedService === service ? null : service)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                selectedService === service
                  ? 'bg-[#ff8c00] text-white'
                  : 'border border-[#e8e8e8] bg-white text-[#001a33] hover:border-[#ff8c00]'
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
