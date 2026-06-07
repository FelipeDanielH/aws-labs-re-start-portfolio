import Link from 'next/link'
import { ArrowRight, FileCheck2, NotebookPen } from 'lucide-react'
import type { Lab } from '@/lib/mock-data'
import { StatusBadge } from './status-badge'
import { ServiceTag } from './service-tag'
import { CategoryBadge } from './category-badge'

interface LabCardProps {
  lab: Lab
}

export function LabCard({ lab }: LabCardProps) {
  const hasMeta = lab.evidenceReady || lab.hasOperationalNotes

  return (
    <Link
      href={`/labs/${lab.slug}`}
      className="group flex flex-col rounded-lg border border-line bg-surface shadow-sm transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      {/* Document header bar */}
      <div className="flex items-center justify-between gap-2 border-b border-line px-5 py-3">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
          Lab&nbsp;{String(lab.number).padStart(2, '0')}
        </span>
        <StatusBadge status={lab.status} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3">
          <CategoryBadge category={lab.category} />
        </div>

        <h3 className="text-pretty text-[15px] font-semibold leading-snug text-navy transition-colors group-hover:text-steel">
          {lab.title}
        </h3>

        <p className="mt-2 text-pretty text-[13px] leading-relaxed text-ink-muted">
          {lab.summary}
        </p>

        {/* Service tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {lab.services.map((service) => (
            <ServiceTag key={service} service={service} />
          ))}
        </div>

        {/* Optional operational metadata row */}
        {hasMeta && (
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {lab.evidenceReady && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ok">
                <FileCheck2 className="h-3.5 w-3.5" aria-hidden="true" />
                Evidencia lista
              </span>
            )}
            {lab.hasOperationalNotes && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-steel">
                <NotebookPen className="h-3.5 w-3.5" aria-hidden="true" />
                Notas operacionales
              </span>
            )}
          </div>
        )}

        {/* Footer action */}
        <div className="mt-5 flex items-center gap-1.5 border-t border-line pt-4 text-[13px] font-semibold text-accent">
          Ver reporte
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  )
}
