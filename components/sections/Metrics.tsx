import SectionHeader from '@/components/ui/SectionHeader'
import MetricCard from '@/components/ui/MetricCard'
import { metricGroups } from '@/lib/data'

export default function Metrics() {
  return (
    <div id="metricas" className="bg-surface-alt py-16">
      <div className="max-w-[1100px] mx-auto px-8">
        <SectionHeader
          tag="North Star Metrics"
          title="Métricas clave de Calli"
          lead="Las métricas que determinan la salud y el éxito del modelo, divididas entre plataforma, unidades y red de operadores."
        />

        {metricGroups.map((group) => (
          <div key={group.title} className="mb-10 last:mb-0">
            <h3 className="text-base font-semibold mb-4">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {group.metrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
