import type { Flow } from '@/lib/types'

export const flows: Flow[] = [
  {
    id: 'huesped',
    label: 'Para el Huésped',
    emoji: '👤',
    steps: [
      {
        number: 1,
        title: 'Busca en el mapa',
        description: 'Abre la app, ve CalliBoxes disponibles cerca. Filtra por precio, tipo, duración.',
      },
      {
        number: 2,
        title: 'Reserva al instante',
        description: 'Booking inmediato o programado. Sin aprobación de anfitrión. Paga por hora o noche.',
      },
      {
        number: 3,
        title: 'Check-in digital',
        description: 'Llega, la app abre la puerta. IoT activa clima, iluminación y experiencia personalizada.',
      },
      {
        number: 4,
        title: 'Duerme, disfruta',
        description: 'Experiencia 5 estrellas micro-format. Todo limpio, atmosferizado y funcional.',
      },
      {
        number: 5,
        title: 'Checkout automático',
        description: 'Sale, la app registra checkout. El squad de operadores recibe la alerta de preparación.',
      },
    ],
  },
  {
    id: 'host',
    label: 'Para el Propietario de Activo (Host)',
    emoji: '🏗️',
    steps: [
      {
        number: 1,
        title: 'Adquiere CalliBox(es)',
        description: 'Compra el activo modular. Calli lo entrega llave en mano con todo el kit instalado.',
      },
      {
        number: 2,
        title: 'Elige su espacio',
        description: 'Coloca la unidad en su terreno, local, bodega o azotea. Conecta agua, luz, drenaje.',
      },
      {
        number: 3,
        title: 'Activa en la plataforma',
        description: 'El host registra su CalliBox en la app. Aparece en el mapa de Calli automáticamente.',
      },
      {
        number: 4,
        title: 'Calli opera por él',
        description:
          'La IA gestiona bookings, comunicación, operadores de limpieza y cobros sin intervención humana.',
      },
      {
        number: 5,
        title: 'Cobra su revenue',
        description:
          'Recibe pagos automáticos (menos comisión Calli). Monitorea métricas en su dashboard.',
      },
    ],
  },
  {
    id: 'operador',
    label: 'Para el Operador de Limpieza',
    emoji: '🧹',
    steps: [
      {
        number: 1,
        title: 'Se certifica en Calli',
        description: 'Toma el entrenamiento de estándares Calli. Aprueba, accede a la app de operadores.',
      },
      {
        number: 2,
        title: 'Recibe alertas',
        description: 'Cada checkout dispara una alerta. El operador más cercano disponible acepta el trabajo.',
      },
      {
        number: 3,
        title: 'Limpia y repone',
        description: 'Sigue el checklist Calli. Cambia insumos del duplicado. Toma fotos de verificación.',
      },
      {
        number: 4,
        title: 'Aprueba la unidad',
        description: 'Marca como "Lista". La CalliBox vuelve al estatus disponible en el mapa de inmediato.',
      },
      {
        number: 5,
        title: 'Cobra por servicio',
        description:
          'Pago automático por cada unidad atendida. Más reseñas de calidad = más trabajo asignado.',
      },
    ],
  },
]
