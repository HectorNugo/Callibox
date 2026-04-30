import SectionHeader from '@/components/ui/SectionHeader'
import Callout from '@/components/ui/Callout'
import { phases } from '@/lib/data'

export default function GoToMarket() {
  return (
    <section id="gtm" className="py-16 px-8 max-w-[1100px] mx-auto">
      <SectionHeader
        tag="Estrategia"
        title="Go-to-Market: Las Tres Fases"
        lead="Calli arranca donde tiene ventaja natural: el corredor Juárez–El Paso, la manufactura de Marcos y el ecosistema de contactos de Héctor. Luego escala concéntricamente."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {phases.map((phase) => (
          <div key={phase.number} className="bg-white border border-border rounded-[var(--radius)] overflow-hidden">
            <div className="bg-ink text-white px-4 py-3 flex items-center gap-2 text-[13px] font-semibold">
              <span className="bg-brand w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0">
                {phase.number}
              </span>
              <span>{phase.title} · {phase.timeline}</span>
            </div>
            <div className="p-4 space-y-2">
              {phase.items.map((item) => (
                <p key={item.label} className="text-[12px] text-ink-soft leading-relaxed">
                  <strong className="text-ink">{item.label}:</strong> {item.value}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Callout className="mt-8">
        <strong>Ventaja del corredor Juárez–El Paso como base de lanzamiento:</strong> Esta región es un laboratorio perfecto — viajeros de negocios binacionales, turismo industrial intenso, aeropuerto internacional, y la capacidad de manufactura de Marcos para producir y desplegar las primeras unidades sin importar nada de China. La ingeniería inversa está de más: diseñamos el nuestro, mejor.
      </Callout>
    </section>
  )
}
