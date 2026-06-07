import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, FileCheck2, NotebookPen, CalendarDays } from 'lucide-react'
import { getLabBySlug, mockLabs } from '@/lib/mock-data'
import { StatusBadge } from '@/components/status-badge'
import { ServiceTag } from '@/components/service-tag'
import { CategoryBadge } from '@/components/category-badge'

export function generateStaticParams() {
  return mockLabs.map((lab) => ({ slug: lab.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const lab = getLabBySlug(slug)
  if (!lab) return { title: 'Laboratorio no encontrado' }
  return {
    title: `Lab ${lab.number} · ${lab.title}`,
    description: lab.summary,
  }
}

export default async function LabReportPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const lab = getLabBySlug(slug)

  if (!lab) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <div className="border-b border-line bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-5">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-muted transition-colors hover:text-navy"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al catálogo
          </Link>
        </div>
      </div>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
            Lab&nbsp;{String(lab.number).padStart(2, '0')}
          </span>
          <StatusBadge status={lab.status} />
        </div>

        <div className="mt-4">
          <CategoryBadge category={lab.category} />
        </div>

        <h1 className="mt-3 text-pretty text-2xl font-bold leading-tight tracking-tight text-navy md:text-3xl">
          {lab.title}
        </h1>

        <p className="mt-4 text-pretty text-[15px] leading-relaxed text-navy-soft">
          {lab.summary}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-[12px] text-ink-muted">
          {lab.date && (
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {lab.date}
            </span>
          )}
          {lab.evidenceReady && (
            <span className="inline-flex items-center gap-1.5 text-ok">
              <FileCheck2 className="h-4 w-4" aria-hidden="true" />
              Evidencia lista
            </span>
          )}
          {lab.hasOperationalNotes && (
            <span className="inline-flex items-center gap-1.5 text-steel">
              <NotebookPen className="h-4 w-4" aria-hidden="true" />
              Notas operacionales
            </span>
          )}
        </div>

        <div className="mt-6 border-t border-line pt-6">
          <p className="mb-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
            Servicios AWS
          </p>
          <div className="flex flex-wrap gap-1.5">
            {lab.services.map((service) => (
              <ServiceTag key={service} service={service} />
            ))}
          </div>
        </div>

        {/* Report sections placeholder structure (content to come from CMS later) */}
        <div className="mt-10 space-y-6">
          {[
            { title: 'Objetivo', body: 'Descripción del objetivo operacional del laboratorio.' },
            { title: 'Pasos realizados', body: 'Secuencia técnica de la implementación.' },
            { title: 'Validación', body: 'Verificación de que la solución funciona como se espera.' },
            { title: 'Evidencia', body: 'Capturas y registros que respaldan el resultado.' },
          ].map((section) => (
            <section
              key={section.title}
              className="rounded-lg border border-line bg-surface p-5 shadow-sm"
            >
              <h2 className="text-sm font-semibold text-navy">{section.title}</h2>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
