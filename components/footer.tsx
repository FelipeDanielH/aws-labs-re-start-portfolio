import { siteProfile } from '@/lib/mock-data'

export function Footer() {
  return (
    <footer className="mt-4 border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-navy">
            {siteProfile.name}
            <span className="ml-2 font-normal text-ink-muted">· {siteProfile.role}</span>
          </p>
          <p className="mt-1 text-xs text-ink-muted">
            Portafolio de laboratorios técnicos · AWS re/Start
          </p>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-muted">
          Documentación · Evidencia · Validación
        </p>
      </div>
    </footer>
  )
}
