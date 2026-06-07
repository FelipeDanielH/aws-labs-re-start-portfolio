'use client'

import { Search } from 'lucide-react'

interface HeaderProps {
  searchValue: string
  onSearchChange: (value: string) => void
}

export function Header({ searchValue, onSearchChange }: HeaderProps) {
  return (
    <header className="border-b border-[#ddd] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-1 w-8 bg-[#ff8c00]"></div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#ff8c00]">AWS re/Start Portfolio</p>
          </div>
          <h1 className="text-4xl font-bold text-[#001a33]">Laboratorios Documentados</h1>
          <p className="mt-3 text-sm font-medium text-[#666]">Felipe Henriquez · Cloud Operations</p>
        </div>

        <p className="mb-10 max-w-3xl text-sm leading-relaxed text-[#555]">
          Reportes técnicos de laboratorios AWS realizados durante re/Start. Cada documento incluye validación operacional, análisis de servicios y evidencia visual del trabajo completado.
        </p>

        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999]" />
          <input
            type="text"
            placeholder="Buscar por nombre, categoría o servicio..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-md border border-[#ddd] bg-white py-3 pl-11 pr-4 text-sm text-[#001a33] placeholder-[#999] transition-all focus:border-[#ff8c00] focus:outline-none focus:ring-2 focus:ring-[#ff8c00] focus:ring-opacity-20"
          />
        </div>
      </div>
    </header>
  )
}
