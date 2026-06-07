'use client'

import { Search } from 'lucide-react'

interface HeaderProps {
  searchValue: string
  onSearchChange: (value: string) => void
}

export function Header({ searchValue, onSearchChange }: HeaderProps) {
  return (
    <header className="border-b border-[#e8e8e8] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#001a33]">AWS re/Start Labs</h1>
          <p className="mt-2 text-sm text-[#999999]">Felipe Henriquez · Cloud Operations</p>
        </div>

        <p className="mb-8 max-w-3xl text-sm leading-relaxed text-[#001a33]">
          Documentación de laboratorios AWS realizados durante AWS re/Start. Cada reporte incluye validación técnica, análisis operacional y evidencia visual del trabajo completado. Una referencia práctica para operaciones en la nube y mejores prácticas de AWS.
        </p>

        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#999999]" />
          <input
            type="text"
            placeholder="Buscar laboratorios..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg border border-[#e8e8e8] bg-[#f8f8f8] py-2.5 pl-10 pr-4 text-sm text-[#001a33] placeholder-[#999999] transition-colors focus:border-[#ff8c00] focus:outline-none focus:ring-1 focus:ring-[#ff8c00]"
          />
        </div>
      </div>
    </header>
  )
}
