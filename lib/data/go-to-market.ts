import type { GoToMarketPhase } from '@/lib/types'

export const phases: GoToMarketPhase[] = [
  {
    number: 1,
    title: 'Beta: Corredor Jz–El Paso',
    timeline: 'Meses 1–12',
    items: [
      { label: 'Objetivo', value: '5–10 CalliBoxes activas. Validar experiencia, turnaround, métricas.' },
      { label: 'Ubicaciones', value: 'Zona industrial de Juárez, aeropuerto El Paso, centros comerciales premium.' },
      { label: 'Hosts', value: 'Primeros inversores / amigos y red de contactos de Marcos y Héctor.' },
      { label: 'Foco', value: 'Product-market fit, refinar el estándar Calli, certificar primeros operadores.' },
      { label: 'Meta', value: 'NPS >60, ocupación >50%, primer caso de éxito documentado para escalar.' },
    ],
  },
  {
    number: 2,
    title: 'Expansión Regional',
    timeline: 'Meses 12–30',
    items: [
      { label: 'Objetivo', value: '50–200 CalliBoxes activas. Escalar a 3–5 ciudades estratégicas.' },
      { label: 'Ciudades', value: 'CDMX, Monterrey, Guadalajara, Tijuana y nodos de aeropuerto.' },
      { label: 'Go-to-market', value: 'B2B activo hacia desarrolladores inmobiliarios y cadenas de C. comerciales.' },
      { label: 'Operaciones', value: 'Primer programa de franquicia de operadores. Estandarización de insumos nacional.' },
      { label: 'Meta', value: 'Breakeven de plataforma. Lanzamiento de programa de inversión en CalliBoxes.' },
    ],
  },
  {
    number: 3,
    title: 'Escala + Internacional',
    timeline: 'Meses 30+',
    items: [
      { label: 'Objetivo', value: '1,000+ CalliBoxes activas. Entrada a mercados de LATAM y posiblemente US.' },
      { label: 'Modelo', value: 'Licenciamiento de la plataforma a operadores regionales. Manufactura distribuida.' },
      { label: 'Revenue', value: 'La comisión de plataforma se convierte en el revenue dominante vs. venta de hardware.' },
      { label: 'Defensibilidad', value: 'Data propietaria de ocupación, red de operadores certificados, identidad de marca global.' },
      { label: 'Meta', value: 'Posicionar Calli como categoría nueva reconocida — como Uber fue al taxi o Airbnb al hotel.' },
    ],
  },
]
