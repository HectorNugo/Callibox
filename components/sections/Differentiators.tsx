import SectionHeader from '@/components/ui/SectionHeader'
import { differentiatorRows } from '@/lib/data'
import type { DifferentiatorRow } from '@/lib/types'

type Status = 'yes' | 'partial' | 'no'

function Cell({ status, label }: { status: Status; label: string }) {
  const color =
    status === 'yes' ? 'text-calli-green font-semibold' :
    status === 'partial' ? 'text-calli-amber' :
    'text-red-600'
  return <td className={`px-4 py-2.5 border-b border-border text-[13px] align-top ${color}`}>{label}</td>
}

export default function Differentiators() {
  return (
    <section id="diferenciadores" className="py-16 px-8 max-w-[1100px] mx-auto">
      <SectionHeader
        tag="Ventaja Competitiva"
        title="Calli vs. la Competencia"
        lead="El modelo de Calli no compite directamente con hoteles ni con Airbnb — crea una categoría nueva. Pero estas son las ventajas claras frente a cada alternativa."
      />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[13px] border border-border rounded-[var(--radius)] overflow-hidden" style={{ minWidth: '700px' }}>
          <thead>
            <tr>
              <th className="bg-ink text-white px-4 py-3 text-left font-semibold text-[12px]">Dimensión</th>
              <th className="bg-brand text-white px-4 py-3 text-left font-semibold text-[12px]">✦ CalliBox</th>
              <th className="bg-ink text-white px-4 py-3 text-left font-semibold text-[12px]">Hotel</th>
              <th className="bg-ink text-white px-4 py-3 text-left font-semibold text-[12px]">Motel</th>
              <th className="bg-ink text-white px-4 py-3 text-left font-semibold text-[12px]">Airbnb</th>
              <th className="bg-ink text-white px-4 py-3 text-left font-semibold text-[12px]">Cápsula / Pod</th>
            </tr>
          </thead>
          <tbody>
            {differentiatorRows.map((row: DifferentiatorRow, i) => (
              <tr key={row.feature} className={i % 2 === 1 ? 'bg-surface-alt' : 'bg-white'}>
                <td className="px-4 py-2.5 border-b border-border text-[13px] font-medium text-ink">{row.feature}</td>
                <Cell status={row.calli} label={row.calliLabel} />
                <Cell status={row.hotel} label={row.hotelLabel} />
                <Cell status={row.motel} label={row.motelLabel} />
                <Cell status={row.airbnb} label={row.airbnbLabel} />
                <Cell status={row.pod} label={row.podLabel} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
