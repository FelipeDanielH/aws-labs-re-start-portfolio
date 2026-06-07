import { getStats } from '@/lib/mock-data'

export function StatsOverview() {
  const stats = getStats()

  const statItems = [
    {
      label: 'Documentados',
      value: stats.documented,
    },
    {
      label: 'Servicios AWS',
      value: stats.services,
    },
    {
      label: 'Categorías',
      value: stats.categories,
    },
    {
      label: 'Evidencia visual',
      value: stats.screenshots,
    },
  ]

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {statItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-md border border-[#ddd] bg-white p-6 text-center transition-all hover:border-[#ff8c00] hover:shadow-md"
          >
            <div className="absolute inset-0 bg-[#fff8f0] opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="relative z-10">
              <div className="text-4xl font-bold text-[#ff8c00]">{item.value}</div>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[#888]">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
