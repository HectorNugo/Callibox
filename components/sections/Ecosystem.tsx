import SectionHeader from '@/components/ui/SectionHeader'

const ecosystemCards = [
  {
    title: '📱 La Super App',
    items: [
      'Mapa en tiempo real de CalliBoxes disponibles',
      'Booking instantáneo + checkout programado',
      'Apertura de puerta via IoT (sin llave física)',
      'Control de clima, iluminación y ambiance desde app',
      'Comunicación IA-asistida (preguntas, incidentes)',
      'Sistema de reviews bidireccional',
      'Pagos integrados (por hora, noche o estadía)',
    ],
  },
  {
    title: '🏗️ Dashboard del Host',
    items: [
      'Métricas de ocupación en tiempo real',
      'Revenue dashboard con proyecciones',
      'Gestión de precios (dinámicos o fijos)',
      'Control de disponibilidad y bloqueos',
      'Historial de operadores y calificaciones',
      'Alertas de mantenimiento preventivo (IoT)',
      'Control de múltiples CalliBoxes desde un panel',
    ],
  },
  {
    title: '🔧 App del Operador',
    items: [
      'Cola de trabajos disponibles por zona',
      'Instrucciones de checklist por tipo de unidad',
      'Registro fotográfico post-limpieza',
      'Aprobación de unidad = activa en mapa automáticamente',
      'Score de calidad acumulable (más score = más trabajo)',
      'Pagos automáticos por trabajo completado',
    ],
  },
  {
    title: '🌐 IoT + Smart Control',
    items: [
      'Cerradura inteligente (acceso via app)',
      'Sensores de ocupación y temperatura',
      'Control de climatización automatizado',
      'Monitoreo de consumo (agua, electricidad)',
      'Alertas de mantenimiento predictivo',
      'Sistema de check-in/out sin intervención humana',
    ],
  },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-16 px-8 max-w-[1100px] mx-auto">
      <SectionHeader
        tag="Ecosistema"
        title="El Ecosistema Calli"
        lead="Calli no es solo un producto — es un ecosistema completo donde el hardware, el software, la comunidad y las operaciones se integran para crear el efecto de red que hace al modelo defensible."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ecosystemCards.map((card) => (
          <div key={card.title} className="bg-white border border-border rounded-[var(--radius)] p-6">
            <h3 className="text-brand font-semibold mb-4">{card.title}</h3>
            <ul className="list-none p-0">
              {card.items.map((item) => (
                <li
                  key={item}
                  className="relative pl-5 py-1.5 border-b border-border last:border-b-0 text-[13px] text-ink-soft leading-snug"
                >
                  <span className="absolute left-0 top-2 text-brand text-[10px]">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
