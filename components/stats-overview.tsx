import { getStats } from '@/lib/mock-data'
import { FileCheck2, Boxes, LayoutGrid, ImageIcon } from 'lucide-react'

export function StatsOverview() {
  const stats = getStats()

  const statItems = [
    {
      label: 'Laboratorios documentados',
      value: stats.documented,
      icon: FileCheck2,
    },
    {
      label: 'Servicios AWS',
      value: stats.services,
      icon: Boxes,
    },
    {
      label: 'Categorías',
      value: stats.categories,
      icon: LayoutGrid,
    },
    {
      label: 'Capturas de evidencia',
      value: stats.screenshots,
      icon: ImageIcon,
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-2 divide-y divide-line rounded-lg border border-line bg-surface shadow-sm sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {statItems.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.label}
              className="flex items-start gap-3 p-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-steel-soft text-steel">
                <Icon className="h-4 w-4" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-2xl font-bold leading-none tracking-tight text-navy">
                  {item.value}
                </div>
                <p className="mt-1.5 text-xs leading-tight text-ink-muted">{item.label}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
