import { getStats } from '@/lib/mock-data'

export function StatsOverview() {
  const stats = getStats()

  const statItems = [
    {
      label: 'Laboratorios documentados',
      value: stats.documented,
    },
    {
      label: 'Servicios AWS practicados',
      value: stats.services,
    },
    {
      label: 'Categorías cubiertas',
      value: stats.categories,
    },
    {
      label: 'Screenshots de evidencia',
      value: stats.screenshots,
    },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {statItems.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border border-[#e8e8e8] bg-[#f8f8f8] p-6 text-center"
          >
            <div className="text-3xl font-bold text-[#ff8c00]">{item.value}</div>
            <p className="mt-2 text-xs text-[#999999] md:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
