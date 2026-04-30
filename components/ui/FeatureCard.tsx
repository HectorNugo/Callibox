import type { FeatureCard as FeatureCardType } from '@/lib/types'

export default function FeatureCard({ title, description }: Pick<FeatureCardType, 'title' | 'description'>) {
  return (
    <div className="bg-white border border-border rounded-[var(--radius)] p-6">
      <h3 className="text-[1.05rem] font-semibold mb-2">{title}</h3>
      <p className="text-[13px] text-ink-soft leading-relaxed">{description}</p>
    </div>
  )
}
