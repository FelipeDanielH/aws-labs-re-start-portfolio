import type { Lab } from '@/lib/mock-data'
import { ArrowRight } from 'lucide-react'

interface LabCardProps {
  lab: Lab
}

export function LabCard({ lab }: LabCardProps) {
  const statusConfig = {
    documented: {
      label: 'Documentado',
      bgColor: '#e8f5e9',
      textColor: '#2e7d32',
    },
    'in-progress': {
      label: 'En progreso',
      bgColor: '#e3f2fd',
      textColor: '#1565c0',
    },
    planned: {
      label: 'Planificado',
      bgColor: '#f5f5f5',
      textColor: '#616161',
    },
  }

  const statusInfo = statusConfig[lab.status]

  return (
    <div className="group flex flex-col overflow-hidden rounded-md border border-[#ddd] bg-white transition-all hover:border-[#ff8c00] hover:shadow-lg hover:shadow-orange-100">
      <div className="flex-1 p-5">
        <div className="mb-3 flex items-baseline justify-between gap-2">
          <span className="inline-block h-6 rounded-sm bg-[#001a33] px-2 py-0.5 text-xs font-semibold text-white">
            Lab {lab.number}
          </span>
          <span
            className="rounded-sm px-2.5 py-1 text-xs font-medium"
            style={{ backgroundColor: statusInfo.bgColor, color: statusInfo.textColor }}
          >
            {statusInfo.label}
          </span>
        </div>

        <h3 className="mb-2 text-base font-semibold text-[#001a33]">{lab.title}</h3>

        <p className="mb-4 text-sm leading-relaxed text-[#666]">{lab.summary}</p>

        <div className="space-y-3 text-xs">
          <div>
            <span className="font-semibold text-[#001a33]">Categoría:</span>
            <span className="ml-2 text-[#666]">{lab.category}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {lab.services.map((service) => (
              <span
                key={service}
                className="rounded-sm border border-[#ddd] bg-[#f9f9f9] px-2.5 py-1 font-medium text-[#001a33]"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#f0f0f0] px-5 py-4">
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff8c00] transition-all group-hover:gap-3">
          Ver reporte
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
