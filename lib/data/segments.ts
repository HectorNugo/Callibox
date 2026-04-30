import type { SegmentTab } from '@/lib/types'

export const segmentTabs: SegmentTab[] = [
  {
    id: 'guests',
    label: 'Huéspedes',
    emoji: '👤',
    cards: [
      {
        profile: 'Perfil 1',
        title: 'Viajero de Negocios en Tránsito',
        description:
          'Llega a las 10pm, sale a las 6am. No necesita spa ni restaurante. Necesita una cama limpia, ducha caliente, wifi y tranquilidad. Ahora mismo no tiene opción premium rápida sin hotel caro o Airbnb con aprobación tardía.',
      },
      {
        profile: 'Perfil 2',
        title: 'Pasajero con Escala / Vuelo Retrasado',
        description:
          '4 horas en el aeropuerto. No quiere pagar una noche completa. Con Calli paga por horas exactas. Disponible literalmente al lado de la terminal, booking en 30 segundos desde su teléfono.',
      },
      {
        profile: 'Perfil 3',
        title: 'Nómada Digital / Viajero Flexible',
        description:
          'Busca experiencias únicas y auténticas. La estética Calli — distinct, reconocible globalmente — es parte del atractivo. Reserva en segundos, no espera respuesta de ningún anfitrión humano.',
      },
      {
        profile: 'Perfil 4',
        title: 'Trabajador Industrial / Visitante de Maquiladora',
        description:
          'Especialmente relevante en la región Juárez–El Paso. Ingenieros, auditores y vendedores que visitan plantas industriales y necesitan alojamiento cercano, funcional y limpio a precio razonable.',
      },
    ],
  },
  {
    id: 'hosts',
    label: 'Hosts / Inversores',
    emoji: '🏗️',
    cards: [
      {
        profile: 'Perfil 1',
        title: 'Propietario de Terreno / Espacio Ocioso',
        description:
          'Tiene metros cuadrados que no aprovecha al 100%. Con Calli convierte su terreno en un activo que genera revenue pasivo sin construir, sin permiso de obra y sin operar absolutamente nada.',
      },
      {
        profile: 'Perfil 2',
        title: 'Inversor en Activos Pasivos',
        description:
          'Como un Uber-inversionista: compra CalliBoxes como activos, los despliega en la red Calli y recibe revenue como si fuera dividendo. Break-even proyectado: 12–18 meses al 65%+ de ocupación.',
      },
      {
        profile: 'Perfil 3',
        title: 'Centro Comercial / Plaza / Bodega',
        description:
          'Tiene locales vacíos o espacios de difícil renta. Una CalliBox o un cluster de ellas convierte ese espacio en un activo de hospitality sin necesidad de obra civil. Partnership de revenue share con Calli.',
      },
      {
        profile: 'Perfil 4',
        title: 'Desarrollador Inmobiliario / FIBRA',
        description:
          'Puede adquirir clusters de CalliBoxes para potenciar proyectos mixtos. La portabilidad permite monetizar espacios entre fases de desarrollo. También pueden escalar en vertical (2 pisos) para maximizar densidad.',
      },
    ],
  },
  {
    id: 'operators',
    label: 'Operadores',
    emoji: '🧹',
    cards: [
      {
        profile: 'Perfil 1',
        title: 'Squad Independiente Certificado',
        description:
          '1–5 personas que trabajan como gig-workers de limpieza de hospitality. Se certifican bajo el estándar Calli y reciben órdenes via app, igual que un repartidor de Uber Eats. Pago por servicio completado.',
      },
      {
        profile: 'Perfil 2',
        title: 'Empresa de Limpieza Franquiciada',
        description:
          'Como los hosts de Airbnb con varios hospedajes que tienen su propio equipo de limpieza, estas empresas pueden tomar contratos de cobertura zonal para múltiples CalliBoxes, garantizando SLA de tiempo de respuesta.',
      },
    ],
  },
]
