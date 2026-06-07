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
    <div className="mx-auto max-w-6xl px-6 py-14">
      {filteredLabs.length === 0 ? (
        <div className="rounded-md border border-[#ddd] bg-[#fafafa] p-16 text-center">
          <p className="text-sm text-[#888]">No hay laboratorios que coincidan con los filtros seleccionados.</p>
        </div>
      ) : (
        <div>
          <div className="mb-8 flex items-baseline justify-between">
            <p className="text-sm font-medium text-[#666]">
              <span className="font-semibold text-[#001a33]">{filteredLabs.length}</span> de {mockLabs.length} laboratorios
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredLabs.map((lab) => (
              <LabCard key={lab.id} lab={lab} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
