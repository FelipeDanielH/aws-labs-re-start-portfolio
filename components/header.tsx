import { siteProfile } from '@/lib/mock-data'

export function Header() {
  return (
    <header className="relative overflow-hidden border-b border-line bg-surface">
      {/* Subtle infrastructure node-grid motif */}
      <div className="bg-node-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-surface to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-16">
        {/* Command-panel eyebrow */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {siteProfile.eyebrow}
          </span>
        </div>

        <h1 className="max-w-2xl text-pretty text-3xl font-bold leading-tight tracking-tight text-navy md:text-4xl">
          Documentación de laboratorios AWS
        </h1>

        <p className="mt-3 flex items-center gap-2 text-sm font-medium text-steel">
          <span className="text-navy">{siteProfile.name}</span>
          <span className="text-line-strong" aria-hidden="true">
            ·
          </span>
          <span>{siteProfile.role}</span>
        </p>

        <p className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-navy-soft md:text-[15px]">
          {siteProfile.intro}
        </p>

        {/* Professional metadata strip */}
        <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2">
          {siteProfile.metadata.map((item, index) => (
            <span key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span className="h-1 w-1 rounded-full bg-line-strong" aria-hidden="true" />
              )}
              <span className="font-mono text-[11px] uppercase tracking-wide text-ink-muted">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
