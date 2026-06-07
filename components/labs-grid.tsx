'use client'

import { mockLabs } from '@/lib/mock-data'
import type { AWSService, Category } from '@/lib/mock-data'
import { LabCard } from './lab-card'

interface LabsGridProps {
  searchValue: string
  selectedCategory: Category | null
  selectedService: AWSService | null
}

export function LabsGrid({ searchValue, selectedCategory, selectedService }: LabsGridProps) {
  const filteredLabs = mockLabs.filter((lab) => {
    const matchesSearch =
      lab.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      lab.summary.toLowerCase().includes(searchValue.toLowerCase()) ||
      lab.number.toString().includes(searchValue)

    const matchesCategory = selectedCategory === null || lab.category === selectedCategory

    const matchesService =
      selectedService === null || lab.services.includes(selectedService)

    return matchesSearch && matchesCategory && matchesService
  })

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {filteredLabs.length === 0 ? (
        <div className="rounded-lg border border-[#e8e8e8] bg-[#f8f8f8] p-12 text-center">
          <p className="text-[#999999]">No hay laboratorios que coincidan con los filtros seleccionados.</p>
        </div>
      ) : (
        <div>
          <p className="mb-6 text-sm text-[#999999]">
            Mostrando {filteredLabs.length} de {mockLabs.length} laboratorios
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredLabs.map((lab) => (
              <LabCard key={lab.id} lab={lab} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
