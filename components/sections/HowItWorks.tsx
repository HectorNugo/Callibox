import SectionHeader from '@/components/ui/SectionHeader'
import { flows } from '@/lib/data'
import type { FlowStep } from '@/lib/types'

function FlowSteps({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="bg-white border border-border rounded-[var(--radius)] overflow-hidden mb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {steps.map((step, i) => (
          <div key={step.number} className="relative px-6 py-8 text-center">
            {i < steps.length - 1 && (
              <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-brand text-2xl font-bold z-10">
                →
              </span>
            )}
            <div className="w-9 h-9 bg-brand text-white rounded-full flex items-center justify-center text-[14px] font-bold mx-auto mb-4">
              {step.number}
            </div>
            <h4 className="text-[13px] font-semibold mb-1.5">{step.title}</h4>
            <p className="text-[12px] text-ink-mute leading-snug">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <div id="como-funciona" className="bg-surface-alt py-16">
      <div className="max-w-[1100px] mx-auto px-8">
        <SectionHeader
          tag="Mecánica"
          title="¿Cómo funciona Calli?"
          lead="Calli opera como un marketplace de tres caras: Huéspedes, Propietarios de Activos y Operadores de Limpieza. Cada lado tiene su propio flujo."
        />

        {flows.map((flow) => (
          <div key={flow.id}>
            <h3 className="text-base font-semibold mb-5">
              {flow.emoji} {flow.label}
            </h3>
            <FlowSteps steps={flow.steps} />
          </div>
        ))}
      </div>
    </div>
  )
}
