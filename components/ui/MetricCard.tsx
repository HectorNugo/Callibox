import type { Metric } from '@/lib/types'

export default function MetricCard({ value, label, description }: Metric) {
  return (
    <div className="bg-white border border-border rounded-[10px] p-5" style={{ borderTop: '3px solid var(--color-brand)' }}>
      <div className="text-[2rem] font-bold text-brand leading-none mb-1">{value}</div>
      <div className="text-[12px] font-semibold text-ink mb-1">{label}</div>
      <div className="text-[11px] text-ink-mute">{description}</div>
    </div>
  )
}
