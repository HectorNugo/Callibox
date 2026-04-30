import SectionHeader from '@/components/ui/SectionHeader'
import { partners } from '@/lib/data'

export default function Partners() {
  return (
    <div className="bg-surface-alt py-16">
      <div className="max-w-[1100px] mx-auto px-8">
        <SectionHeader
          tag="Sociedad Estratégica"
          title="Key Partners de Calli"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {partners.map((partner) => (
            <div key={partner.title} className="bg-white border border-border rounded-[var(--radius)] p-6">
              <h3 className="text-[1.05rem] font-semibold mb-2">
                {partner.title}
              </h3>
              <p className="text-[13px] text-ink-soft leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
