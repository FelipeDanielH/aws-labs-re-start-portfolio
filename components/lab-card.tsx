import type { Lab } from '@/lib/mock-data'
import { ArrowRight } from 'lucide-react'

interface LabCardProps {
  lab: Lab
}

export function LabCard({ lab }: LabCardProps) {
  const statusConfig = {
    documented: {
      label: 'Documentado',
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
    },
    'in-progress': {
      label: 'En progreso',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800',
    },
    planned: {
      label: 'Planificado',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-800',
    },
  }

  const statusInfo = statusConfig[lab.status]

  return (
    <div className="flex flex-col rounded-lg border border-[#e8e8e8] bg-white p-5 transition-all hover:border-[#ff8c00] hover:shadow-sm">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-xs font-semibold text-[#999999]">Lab {lab.number}</span>
          <span className={`rounded px-2 py-0.5 text-xs font-medium ${statusInfo.bgColor} ${statusInfo.textColor}`}>
            {statusInfo.label}
          </span>
        </div>
      </div>

      <h3 className="mb-2 text-base font-semibold text-[#001a33]">{lab.title}</h3>

      <p className="mb-4 text-sm text-[#999999]">{lab.summary}</p>

      <div className="mb-4 space-y-2">
        <div className="text-xs text-[#999999]">
          <span className="font-medium text-[#001a33]">Categoría:</span> {lab.category}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {lab.services.map((service) => (
            <span
              key={service}
              className="rounded-md bg-[#f8f8f8] px-2 py-1 text-xs font-medium text-[#001a33] border border-[#e8e8e8]"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <button className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#ff8c00] transition-colors hover:text-[#001a33]">
        Ver reporte
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}
