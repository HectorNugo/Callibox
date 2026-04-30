import SectionHeader from '@/components/ui/SectionHeader'
import Callout from '@/components/ui/Callout'
import styles from '@/styles/value-chain.module.css'

const columns = [
  {
    abbr: 'R',
    circleBg: '#F4E3D7',
    circleColor: '#C8622A',
    title: 'R&D + Diseño',
    desc: 'Prototipo, ingeniería, diseño de experiencia, especificaciones técnicas',
    owner: '→ Héctor',
    ownerColor: '#C8622A',
    highlight: true,
  },
  {
    abbr: 'SE',
    circleBg: '#DBEAFE',
    circleColor: '#1D4ED8',
    title: 'Ingeniería de Sustento',
    desc: 'Mejoras continuas, iteraciones del prototipo, estándares de calidad',
    owner: '→ Héctor + Partners',
    ownerColor: '#1D4ED8',
    highlight: true,
  },
  {
    abbr: 'M',
    circleBg: 'rgba(255,255,255,0.2)',
    circleColor: '#fff',
    title: 'Manufactura / Ensamble',
    desc: 'Producción en escala de las CalliBox, control de calidad en fábrica',
    owner: '→ Marcos Enriquez (Jz)',
    ownerColor: 'rgba(255,255,255,0.85)',
    primary: true,
  },
  {
    abbr: 'MK',
    circleBg: '#FEF3C7',
    circleColor: '#B45309',
    title: 'Marketing + Contabilidad',
    desc: 'Adquisición automatizada, analytics, gestión financiera con IA',
    owner: '→ IA Agéntica + Equipo',
    ownerColor: '#B45309',
  },
  {
    abbr: 'SL',
    circleBg: '#D8EDDF',
    circleColor: '#2D6A4F',
    title: 'Ventas + Plataforma',
    desc: 'App, marketplace, bookings, revenue de huéspedes y hosts automatizado',
    owner: '→ IA + Plataforma',
    ownerColor: '#2D6A4F',
  },
]

export default function ValueChain() {
  return (
    <div className="bg-surface-alt py-16">
      <div className="max-w-[1100px] mx-auto px-8">
        <SectionHeader
          tag="Cadena de Valor"
          title="¿Quién hace qué en Calli?"
          lead="El modelo divide responsabilidades con precisión quirúrgica: cada socio hace lo que mejor sabe hacer. Cero duplicidad, máxima eficiencia."
        />

        <div className="overflow-x-auto mb-8">
          <div style={{ minWidth: '700px' }}>
            <div className={styles.chain}>
              {columns.map((col) => (
                <div
                  key={col.abbr}
                  className={`${styles.col} ${col.primary ? styles.colPrimary : col.highlight ? styles.colHighlight : ''}`}
                >
                  <div
                    className={styles.circle}
                    style={{ background: col.circleBg, color: col.circleColor }}
                  >
                    {col.abbr}
                  </div>
                  <h4 className={styles.colTitle}>{col.title}</h4>
                  <p className={styles.colDesc}>{col.desc}</p>
                  <p className={styles.owner} style={{ color: col.ownerColor }}>{col.owner}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
