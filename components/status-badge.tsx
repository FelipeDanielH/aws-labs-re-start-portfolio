import type { LabStatus } from '@/lib/mock-data'

const STATUS_CONFIG: Record<
  LabStatus,
  { label: string; className: string; dot: string }
> = {
  documented: {
    label: 'Documentado',
    className: 'bg-ok-soft text-ok',
    dot: 'bg-ok',
  },
  'in-progress': {
    label: 'En progreso',
    className: 'bg-info-soft text-info',
    dot: 'bg-info',
  },
  planned: {
    label: 'Planificado',
    className: 'bg-pending-soft text-pending',
    dot: 'bg-pending',
  },
}

interface StatusBadgeProps {
  status: LabStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status]

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm px-2 py-1 text-[11px] font-semibold ${config.className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} aria-hidden="true" />
      {config.label}
    </span>
  )
}
