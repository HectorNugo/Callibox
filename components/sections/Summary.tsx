import Badge from '@/components/ui/Badge'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Summary() {
  return (
    <section className="py-16 px-8 max-w-[1100px] mx-auto">
      <SectionHeader
        tag="Resumen Ejecutivo"
        title="El modelo Calli en una sola línea"
        lead="Calli es la intersección de tres megatendencias: la economía de activos (como Airbnb), la economía gig (como Uber) y el hardware inteligente (como Tesla). Aplicadas al hospedaje modular para crear una categoría completamente nueva."
      />

      {/* Two-sided market */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_48px_1fr] gap-4 items-start mb-8">
        <div className="bg-white border border-border rounded-[var(--radius)] p-6">
          <h3 className="text-brand font-semibold mb-4">Para el Huésped</h3>
          <p className="text-[13px] text-ink-soft mb-4 leading-relaxed">
            La primera opción de hospedaje premium instantáneo disponible en cualquier lugar, bookeable en 30 segundos y operable sin ningún contacto humano.
          </p>
          <Badge variant="brand">Premium micro-hospitality</Badge>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center pt-8 text-border text-xl font-light select-none">
          |
        </div>

        <div className="bg-white border border-border rounded-[var(--radius)] p-6">
          <h3 className="text-brand font-semibold mb-4">Para el Inversor / Host</h3>
          <p className="text-[13px] text-ink-soft mb-4 leading-relaxed">
            Un activo físico modular que genera revenue pasivo desde el día uno, sin construir nada, sin operar nada y escalable verticalmente para maximizar el metro cuadrado.
          </p>
          <Badge variant="green">Activo de inversión pasiva</Badge>
        </div>
      </div>

      {/* Quote block */}
      <div className="bg-ink rounded-[var(--radius)] px-8 py-10 text-center">
        <p
          className="font-display italic text-white/90 max-w-[680px] mx-auto leading-relaxed"
          style={{ fontSize: '1.4rem' }}
        >
          "Como Uber le dio a millones la posibilidad de monetizar su carro, Calli le da a cualquier propietario de espacio la posibilidad de monetizar sus metros cuadrados — con un activo modular inteligente que trabaja solo."
        </p>
        <div className="mt-6 flex justify-center">
          <span className="bg-brand text-white px-5 py-2 rounded-full text-[13px] font-semibold">
            CALLI — Micro-Hospitality Platform
          </span>
        </div>
      </div>
    </section>
  )
}
