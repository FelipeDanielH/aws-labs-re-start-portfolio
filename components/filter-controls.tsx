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
    <div className="border-b border-[#ddd] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Categories Section */}
        <div className="mb-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#888]">Categorías</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange(null)}
              className={`rounded-md px-3.5 py-2 text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-[#001a33] text-white shadow-sm'
                  : 'border border-[#ddd] bg-white text-[#001a33] hover:border-[#001a33] hover:bg-[#f9f9f9]'
              }`}
            >
              Todas
            </button>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(selectedCategory === category ? null : category)}
                className={`rounded-md px-3.5 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#ff8c00] text-white shadow-sm'
                    : 'border border-[#ddd] bg-white text-[#001a33] hover:border-[#ff8c00] hover:bg-[#fff8f0]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#888]">Servicios AWS</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onServiceChange(null)}
              className={`rounded-md px-3.5 py-2 text-xs font-medium transition-all ${
                selectedService === null
                  ? 'bg-[#001a33] text-white shadow-sm'
                  : 'border border-[#ddd] bg-white text-[#001a33] hover:border-[#001a33] hover:bg-[#f9f9f9]'
              }`}
            >
              Todos
            </button>
            {services.map((service) => (
              <button
                key={service}
                onClick={() => onServiceChange(selectedService === service ? null : service)}
                className={`rounded-md px-3.5 py-2 text-xs font-medium transition-all ${
                  selectedService === service
                    ? 'bg-[#ff8c00] text-white shadow-sm'
                    : 'border border-[#ddd] bg-white text-[#001a33] hover:border-[#ff8c00] hover:bg-[#fff8f0]'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
