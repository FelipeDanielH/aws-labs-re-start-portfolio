'use client'

import { Search, X } from 'lucide-react'
import { CATEGORIES, getUniqueServices } from '@/lib/mock-data'
import type { AWSService, Category } from '@/lib/mock-data'

interface FilterControlsProps {
  searchValue: string
  selectedCategory: Category | null
  selectedService: AWSService | null
  onSearchChange: (value: string) => void
  onCategoryChange: (category: Category | null) => void
  onServiceChange: (service: AWSService | null) => void
}

export function FilterControls({
  searchValue,
  selectedCategory,
  selectedService,
  onSearchChange,
  onCategoryChange,
  onServiceChange,
}: FilterControlsProps) {
  const services = getUniqueServices()

  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-lg border border-line bg-surface p-5 shadow-sm md:p-6">
        {/* Prominent search */}
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Buscar por título, servicio o número de laboratorio…"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Buscar laboratorios"
            className="w-full rounded-md border border-line bg-surface-muted py-2.5 pl-10 pr-10 text-sm text-navy outline-none transition-colors focus:border-accent focus:bg-surface focus:ring-2 focus:ring-accent/15"
          />
          {searchValue && (
            <button
              onClick={() => onSearchChange('')}
              aria-label="Limpiar búsqueda"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted transition-colors hover:text-navy"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category segmented chips */}
        <div className="mt-5">
          <p className="mb-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
            Categoría
          </p>
          <div className="flex flex-wrap gap-1.5">
            <FilterChip
              active={selectedCategory === null}
              onClick={() => onCategoryChange(null)}
            >
              Todas
            </FilterChip>
            {CATEGORIES.map((category) => (
              <FilterChip
                key={category}
                active={selectedCategory === category}
                onClick={() =>
                  onCategoryChange(selectedCategory === category ? null : category)
                }
              >
                {category}
              </FilterChip>
            ))}
          </div>
        </div>

        {/* Service technical tags */}
        <div className="mt-5 border-t border-line pt-5">
          <p className="mb-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
            Servicio AWS
          </p>
          <div className="flex flex-wrap gap-1.5">
            <ServiceFilterTag
              active={selectedService === null}
              onClick={() => onServiceChange(null)}
            >
              Todos
            </ServiceFilterTag>
            {services.map((service) => (
              <ServiceFilterTag
                key={service}
                active={selectedService === service}
                onClick={() =>
                  onServiceChange(selectedService === service ? null : service)
                }
              >
                {service}
              </ServiceFilterTag>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ChipProps {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}

function FilterChip({ active, onClick, children }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors ${
        active
          ? 'bg-navy text-surface'
          : 'border border-line bg-surface text-navy-soft hover:border-line-strong hover:bg-surface-muted'
      }`}
    >
      {children}
    </button>
  )
}

function ServiceFilterTag({ active, onClick, children }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-sm px-2.5 py-1 font-mono text-xs font-medium tracking-tight transition-colors ${
        active
          ? 'bg-accent text-surface'
          : 'border border-line bg-surface-muted text-steel hover:border-accent/50 hover:text-accent'
      }`}
    >
      {children}
    </button>
  )
}
