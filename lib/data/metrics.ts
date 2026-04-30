import type { MetricGroup } from '@/lib/types'

export const metricGroups: MetricGroup[] = [
  {
    title: 'Métricas de Plataforma',
    emoji: '📊',
    metrics: [
      {
        value: '65%+',
        label: 'Ocupación objetivo / CalliBox',
        description: 'Break-even para el host, marginal revenue positivo para Calli.',
      },
      {
        value: 'RevPAR',
        label: 'Revenue Per Available Unit',
        description: 'Métrica principal de rentabilidad por unidad — incluye ocupación × tarifa promedio.',
      },
      {
        value: 'NPS',
        label: 'Net Promoter Score (huéspedes)',
        description: 'Objetivo: NPS > 60. El estándar de experiencia es diferenciador crítico.',
      },
      {
        value: 'CAC',
        label: 'Costo de adquisición (hosts)',
        description: 'Fundamental en B2B: cuánto cuesta activar un nuevo CalliBox en la red.',
      },
    ],
  },
  {
    title: 'Métricas de Unidades',
    emoji: '📦',
    metrics: [
      {
        value: '<12min',
        label: 'Tiempo de turnaround',
        description: 'Checkout → Lista para nuevo huésped. Crítico para maximizar ocupación.',
      },
      {
        value: '12–18m',
        label: 'Break-even por unidad (host)',
        description: 'Meses para que el host recupere su inversión al 65%+ de ocupación.',
      },
      {
        value: '# CalliBoxes',
        label: 'Tamaño de la red',
        description: 'El indicador de crecimiento principal de la plataforma — drive revenue + defensibilidad.',
      },
      {
        value: '4.5+ ⭐',
        label: 'Rating promedio de unidades',
        description: 'Estándar mínimo Calli. Unidades bajo 4.0 entran a protocolo de revisión.',
      },
    ],
  },
  {
    title: 'Métricas de Operadores',
    emoji: '🧹',
    metrics: [
      {
        value: '<30min',
        label: 'Response time de operador',
        description: 'Tiempo entre checkout y inicio de limpieza. SLA mínimo de la red.',
      },
      {
        value: '3+',
        label: 'Operadores por zona activa',
        description: 'Mínimo de operadores para garantizar cobertura sin single point of failure.',
      },
      {
        value: '95%+',
        label: 'Checklist compliance rate',
        description: '% de ítems del checklist completados correctamente según foto de verificación.',
      },
    ],
  },
]
