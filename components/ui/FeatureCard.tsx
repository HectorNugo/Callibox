import type { FeatureCard as FeatureCardType } from '@/lib/types'

const iconBg: Record<string, string> = {
  brand: 'bg-brand-light',
  green: 'bg-calli-green-light',
  blue: 'bg-calli-blue-light',
  amber: 'bg-calli-amber-light',
  purple: 'bg-calli-purple-light',
  teal: 'bg-calli-teal-light',
}

export default function FeatureCard({ icon, iconColor, title, description }: FeatureCardType) {
  return (
    <div className="bg-white border border-border rounded-[var(--radius)] p-6">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-4 ${iconBg[iconColor] ?? 'bg-brand-light'}`}
      >
        {icon}
      </div>
      <h3 className="text-[1.05rem] font-semibold mb-2">{title}</h3>
      <p className="text-[13px] text-ink-soft leading-relaxed">{description}</p>
    </div>
  )
}
