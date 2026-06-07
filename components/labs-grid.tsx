'use client'

import { mockLabs } from '@/lib/mock-data'
import type { AWSService, Category } from '@/lib/mock-data'
import { LabCard } from './lab-card'
import { SearchX } from 'lucide-react'

interface LabsGridProps {
  searchValue: string
  selectedCategory: Category | null
  selectedService: AWSService | null
}

export function LabsGrid({ searchValue, selectedCategory, selectedService }: LabsGridProps) {
  const query = searchValue.trim().toLowerCase()

  const filteredLabs = mockLabs.filter((lab) => {
    const matchesSearch =
      query === '' ||
      lab.title.toLowerCase().includes(query) ||
      lab.summary.toLowerCase().includes(query) ||
      lab.services.some((s) => s.toLowerCase().includes(query)) ||
      lab.number.toString().includes(query)

    const matchesCategory = selectedCategory === null || lab.category === selectedCategory
    const matchesService = selectedService === null || lab.services.includes(selectedService)

    return matchesSearch && matchesCategory && matchesService
  })

  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="mb-5 flex items-end justify-between border-b border-line pb-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-navy">
          Catálogo de laboratorios
        </h2>
        <p className="font-mono text-xs text-ink-muted">
          <span className="font-semibold text-navy">{filteredLabs.length}</span>
          {' / '}
          {mockLabs.length}
        </p>
      </div>

      {filteredLabs.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-line-strong bg-surface-muted px-6 py-16 text-center">
          <SearchX className="mb-3 h-6 w-6 text-ink-muted" aria-hidden="true" />
          <p className="text-sm font-medium text-navy">Sin resultados</p>
          <p className="mt-1 text-[13px] text-ink-muted">
            Ningún laboratorio coincide con los filtros seleccionados.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredLabs.map((lab) => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </div>
      )}
    </section>
  )
}
