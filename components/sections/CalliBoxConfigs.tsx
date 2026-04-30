import SectionHeader from '@/components/ui/SectionHeader'

const configs = [
  {
    title: 'Standalone',
    description: 'Una unidad. Ideal para terrenos pequeños, estacionamientos o locales individuales. Inversión mínima.',
    visual: 'standalone' as const,
  },
  {
    title: 'Serie (horizontal)',
    description: 'Múltiples unidades conectadas lado a lado. Puede incluir área común central. Para terrenos largos.',
    visual: 'serie' as const,
  },
  {
    title: 'Vertical (2 pisos)',
    description: 'Doble la densidad en el mismo footprint. Máxima monetización por metro cuadrado. Para terrenos urbanos pequeños.',
    visual: 'vertical' as const,
  },
  {
    title: 'Campus (grid)',
    description: 'Múltiples unidades en dos pisos y varias columnas. Máxima escala. Para bodegas, plazas y parques industriales.',
    visual: 'campus' as const,
  },
  {
    title: 'Suite conectada',
    description: 'Dos unidades unidas para formar una suite premium más grande. Para grupos, familias o segmento deluxe.',
    visual: 'suite' as const,
  },
]

function BoxUnit({ dark = false, w = 50, h = 40 }: { dark?: boolean; w?: number; h?: number }) {
  return (
    <div
      className="rounded border-2"
      style={{
        width: w,
        height: h,
        background: dark ? '#8B3E14' : '#F4E3D7',
        borderColor: dark ? '#8B3E14' : '#C8622A',
      }}
    />
  )
}

function ConfigVisual({ type }: { type: (typeof configs)[number]['visual'] }) {
  if (type === 'standalone') {
    return (
      <div className="flex items-center justify-center h-20">
        <BoxUnit w={60} h={50} />
      </div>
    )
  }
  if (type === 'serie') {
    return (
      <div className="flex items-center justify-center gap-1 h-20">
        <BoxUnit w={46} h={44} />
        <BoxUnit w={46} h={44} />
        <BoxUnit w={46} h={44} />
      </div>
    )
  }
  if (type === 'vertical') {
    return (
      <div className="flex flex-col items-center justify-center gap-1 h-20">
        <div className="flex gap-1">
          <BoxUnit w={46} h={32} />
          <BoxUnit w={46} h={32} />
        </div>
        <div className="flex gap-1">
          <BoxUnit w={46} h={32} dark />
          <BoxUnit w={46} h={32} dark />
        </div>
      </div>
    )
  }
  if (type === 'campus') {
    return (
      <div className="flex flex-col items-center justify-center gap-1 h-20">
        <div className="flex gap-1 flex-wrap justify-center">
          <BoxUnit w={44} h={28} />
          <BoxUnit w={44} h={28} />
          <BoxUnit w={44} h={28} dark />
          <BoxUnit w={44} h={28} dark />
        </div>
      </div>
    )
  }
  // suite
  return (
    <div className="flex items-center justify-center gap-2 h-20">
      <div className="flex flex-col items-center gap-1">
        <BoxUnit w={44} h={28} />
        <div className="w-px h-3 bg-brand" />
        <BoxUnit w={44} h={28} />
      </div>
    </div>
  )
}

export default function CalliBoxConfigs() {
  return (
    <div className="bg-surface-alt py-16">
      <div className="max-w-[1100px] mx-auto px-8">
        <SectionHeader
          tag="El Producto"
          title="La CalliBox: topologías de deploy"
          lead="La portabilidad modular de la CalliBox permite configuraciones múltiples — desde una unidad standalone hasta un campus vertical. Cada propietario maximiza sus metros cuadrados."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {configs.map((config) => (
            <div key={config.title} className="bg-white border border-border rounded-[var(--radius)] p-5 text-center">
              <ConfigVisual type={config.visual} />
              <h4 className="text-[14px] font-semibold mt-3 mb-2">{config.title}</h4>
              <p className="text-[12px] text-ink-mute leading-snug">{config.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
