import SectionHeader from '@/components/ui/SectionHeader'
import SegmentsTabs from '@/components/interactive/SegmentsTabs'
import { segmentTabs } from '@/lib/data'

export default function Segments() {
  return (
    <section id="segmentos" className="py-16 px-8 max-w-[1100px] mx-auto">
      <SectionHeader
        tag="Clientes"
        title="¿Quiénes son los clientes de Calli?"
        lead="Calli tiene un marketplace de tres lados. Cada segmento tiene su propia propuesta de valor, sus propios canales de adquisición y su propio flujo económico."
      />
      <SegmentsTabs tabs={segmentTabs} />
    </section>
  )
}
