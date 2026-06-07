import type { AWSService } from '@/lib/mock-data'

interface ServiceTagProps {
  service: AWSService
}

export function ServiceTag({ service }: ServiceTagProps) {
  return (
    <span className="inline-flex items-center rounded-sm border border-line bg-surface-muted px-2 py-0.5 font-mono text-[11px] font-medium tracking-tight text-steel">
      {service}
    </span>
  )
}
