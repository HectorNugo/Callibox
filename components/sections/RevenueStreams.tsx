import SectionHeader from '@/components/ui/SectionHeader'
import Callout from '@/components/ui/Callout'
import Badge from '@/components/ui/Badge'
import { revenueStreams } from '@/lib/data'

const headerColors: Record<string, string> = {
  'bg-brand': '#C8622A',
  'bg-calli-green': '#2D6A4F',
  'bg-calli-blue': '#1D4ED8',
  'bg-calli-amber': '#B45309',
}

export default function RevenueStreams() {
  return (
    <div id="revenue" className="bg-surface-alt py-16">
      <div className="max-w-[1100px] mx-auto px-8">
        <SectionHeader
          tag="Economía del Modelo"
          title="¿Cómo genera dinero Calli?"
          lead="Cuatro fuentes de revenue que se complementan y se refuerzan entre sí. El modelo mezcla ingresos de hardware, plataforma y recurrencia."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {revenueStreams.map((stream) => (
            <div key={stream.number} className="bg-white border border-border rounded-[var(--radius)] overflow-hidden">
              <div
                className="px-5 py-4 text-[12px] font-bold tracking-[1px] uppercase text-white"
                style={{ background: headerColors[stream.headerBg] ?? '#C8622A' }}
              >
                {stream.number} · {stream.title}
              </div>
              <div className="p-5">
                <p className="text-[13px] text-ink-soft mb-3 leading-relaxed">{stream.description}</p>
                <div className="text-[1.4rem] font-bold text-ink mb-1">
                  {stream.amount}{' '}
                  <small className="text-[12px] font-normal text-ink-mute">{stream.amountLabel}</small>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {stream.badges.map((badge) => (
                    <Badge key={badge} variant="brand">{badge}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Callout className="mt-8">
          <strong>Unit economics clave:</strong> Una CalliBox con 65% de ocupación a $50 USD/noche genera ~$975/mes brutos. Con la comisión del 17.5%, Calli recibe ~$170/mes por esa unidad solo en comisión, más $49/mes de SaaS, más insumos. El modelo se hace más rentable entre más CalliBoxes activas tiene la red — efecto de red clásico de plataforma.
        </Callout>
      </div>
    </div>
  )
}
