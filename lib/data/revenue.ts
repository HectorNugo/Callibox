import type { RevenueStream } from '@/lib/types'

export const revenueStreams: RevenueStream[] = [
  {
    number: '01',
    title: 'Venta de Unidades (B2B)',
    headerBg: 'bg-brand',
    description:
      'El host compra la CalliBox + kit completo de equipamiento. Calli entrega llave en mano: unidad armada, IoT instalado, insumos duplicados y onboarding en plataforma incluido.',
    amount: '$18K–$45K USD',
    amountLabel: '/ unidad (estimado según tamaño y equipamiento)',
    badges: ['Hardware', 'One-time', 'Alta margen manufactura local'],
  },
  {
    number: '02',
    title: 'Comisión de Plataforma',
    headerBg: 'bg-calli-green',
    description:
      'Por cada reserva procesada, Calli cobra comisión a ambos lados: al huésped (service fee) y al host. Este es el revenue recurrente y escalable — crece con cada CalliBox activa en la red.',
    amount: '15–20%',
    amountLabel: 'del valor de cada reserva (host) + 8–12% fee al huésped',
    badges: ['Recurrente', 'Escala con la red'],
  },
  {
    number: '03',
    title: 'SaaS / Management Fee',
    headerBg: 'bg-calli-blue',
    description:
      'Suscripción mensual por acceso al dashboard de gestión: métricas de ocupación, revenue analytics, control IoT en tiempo real, IA de comunicación con huéspedes y gestión automática de operadores.',
    amount: '$29–$99 USD',
    amountLabel: '/ mes por CalliBox activa en la plataforma',
    badges: ['SaaS recurrente', 'Alto margen'],
  },
  {
    number: '04',
    title: 'Reposición de Insumos',
    headerBg: 'bg-calli-amber',
    description:
      'Calli es el proveedor oficial de los kits de insumos estandarizados: cobijas, almohadas, toiletries, amenidades aromáticas y consumibles. El host los recibe vía suscripción o pedido on-demand.',
    amount: '$80–$200 USD',
    amountLabel: '/ mes por unidad (dependiendo de ocupación)',
    badges: ['Supply chain', 'Garantiza estándar'],
  },
]
