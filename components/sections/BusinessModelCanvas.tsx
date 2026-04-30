import SectionHeader from '@/components/ui/SectionHeader'
import styles from '@/styles/bmc.module.css'

export default function BusinessModelCanvas() {
  return (
    <section id="canvas" className="py-16 px-8 max-w-[1100px] mx-auto">
      <SectionHeader
        tag="Framework Estratégico"
        title="Business Model Canvas de Calli"
        lead="El canvas muestra los 9 bloques fundamentales del modelo de negocio, organizado según la metodología de Osterwalder."
      />

      <div className="overflow-x-auto">
        <div className={styles.grid}>

          {/* Partners */}
          <div className={`${styles.cell} ${styles.partners}`}>
            <span className={styles.label}>Socios Clave</span>
            <ul>
              <li><strong>Marcos Enriquez</strong> — manufactura / maquiladora (Jz)</li>
              <li>Proveedores de IoT (cerraduras, sensores)</li>
              <li>Proveedores de insumos (cama, amenidades)</li>
              <li>Red de Operadores certificados</li>
              <li>Propietarios de espacios / terrenos</li>
              <li>Centros comerciales y bodegas</li>
              <li>Procesadores de pago (Stripe, MercadoPago)</li>
              <li>Proveedores de cloud / IoT platform</li>
              <li>Aeropuertos, parques industriales</li>
            </ul>
          </div>

          {/* Activities */}
          <div className={`${styles.cell} ${styles.activities}`}>
            <span className={styles.label}>Actividades Clave</span>
            <ul>
              <li>R&D y diseño de la CalliBox</li>
              <li>Manufactura / ensamblaje (Jz)</li>
              <li>Desarrollo y operación de la app</li>
              <li>Gestión de la red de operadores</li>
              <li>Marketing automatizado con IA</li>
              <li>Control de calidad estándar Calli</li>
              <li>Expansión de ubicaciones</li>
            </ul>
          </div>

          {/* Value Proposition */}
          <div className={`${styles.cell} ${styles.value}`}>
            <span className={styles.label}>Propuesta de Valor</span>
            <div className={styles.valueSection}>
              <h4>Para Huéspedes:</h4>
              <ul>
                <li>Check-in instant — sin esperas, sin llave física</li>
                <li>Experiencia premium estandarizada</li>
                <li>Disponible donde los hoteles no llegan</li>
                <li>Precio por hora o noche (flexible)</li>
              </ul>
            </div>
            <div className={styles.valueSection}>
              <h4>Para Hosts (propietarios):</h4>
              <ul>
                <li>Activo pasivo "llave en mano"</li>
                <li>Cero operación: Calli lo gestiona todo</li>
                <li>Revenue desde día 1</li>
                <li>Escalar en vertical (2 pisos) o serie</li>
              </ul>
            </div>
            <div className={styles.valueSection}>
              <h4>Para Operadores:</h4>
              <ul>
                <li>Trabajo flexible on-demand</li>
                <li>App de asignación inteligente</li>
                <li>Pago inmediato por servicio</li>
              </ul>
            </div>
          </div>

          {/* Customer Relations */}
          <div className={`${styles.cell} ${styles.relations}`}>
            <span className={styles.label}>Relación con Clientes</span>
            <ul>
              <li>Self-service digital completo</li>
              <li>IA agéntica para comunicación</li>
              <li>Chatbot 24/7 (guests + hosts)</li>
              <li>Rating bidireccional (guest/operador)</li>
              <li>Programa de host-premium</li>
              <li>Notificaciones proactivas IoT</li>
            </ul>
          </div>

          {/* Segments */}
          <div className={`${styles.cell} ${styles.segments}`}>
            <span className={styles.label}>Segmentos de Clientes</span>
            <div className={styles.valueSection}>
              <h4>Huéspedes:</h4>
              <ul>
                <li>Viajeros de negocios en tránsito</li>
                <li>Pasajeros con escalas largas</li>
                <li>Turistas flexibles / nomads digitales</li>
                <li>Obreros / visitantes industriales</li>
              </ul>
            </div>
            <div className={styles.valueSection}>
              <h4>Hosts / Inversores:</h4>
              <ul>
                <li>Propietarios de terrenos ociosos</li>
                <li>Dueños de locales en C. comerciales</li>
                <li>Inversionistas en activos pasivos</li>
                <li>Desarrolladores inmobiliarios</li>
              </ul>
            </div>
            <div className={styles.valueSection}>
              <h4>Operadores:</h4>
              <ul>
                <li>Emprendedores de limpieza</li>
                <li>Squads independientes certificados</li>
              </ul>
            </div>
          </div>

          {/* Resources */}
          <div className={`${styles.cell} ${styles.resources}`}>
            <span className={styles.label}>Recursos Clave</span>
            <ul>
              <li>CalliBox (hardware modular)</li>
              <li>Plataforma tecnológica + App</li>
              <li>IoT stack (acceso, clima, sensores)</li>
              <li>Capacidad de manufactura (Marcos)</li>
              <li>Marca Calli (identidad global)</li>
              <li>Red de operadores certificados</li>
              <li>Héctor: diseño, R&D, estrategia</li>
              <li>Data de ocupación y comportamiento</li>
            </ul>
          </div>

          {/* Channels */}
          <div className={`${styles.cell} ${styles.channels}`}>
            <span className={styles.label}>Canales</span>
            <ul>
              <li>Super App (iOS / Android)</li>
              <li>Mapa interactivo de disponibilidad</li>
              <li>Presencia física (señalética CalliBox)</li>
              <li>QR en espectaculares / locales</li>
              <li>B2B: venta directa de unidades</li>
              <li>Partnerships con C. comerciales</li>
              <li>Campañas en RRSS / influencers</li>
              <li>SEO + SEM automatizado</li>
            </ul>
          </div>

          {/* Costs */}
          <div className={`${styles.cell} ${styles.costs}`}>
            <span className={styles.label}>Estructura de Costos</span>
            <div className={styles.costsGrid}>
              {[
                { title: 'Hardware', desc: 'Manufactura CalliBox, kit inicial, IoT por unidad' },
                { title: 'Tecnología', desc: 'App, cloud, IoT platform, IA/agentes, cyberseguridad' },
                { title: 'Operaciones', desc: 'Red de operadores, calidad, insumos recurrentes' },
                { title: 'Marketing & Expansión', desc: 'Adquisición de hosts, campañas, crecimiento red' },
              ].map((item) => (
                <div key={item.title}>
                  <p className={styles.subTitle}>{item.title}</p>
                  <p className={styles.subDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue */}
          <div className={`${styles.cell} ${styles.revenue}`}>
            <span className={styles.label}>Fuentes de Ingreso</span>
            <div className={styles.revenueGrid}>
              {[
                { title: 'Venta de Unidades (B2B)', desc: 'Precio por CalliBox + kit completo' },
                { title: 'Comisión de Plataforma', desc: '% de cada reserva (ambos lados)' },
                { title: 'SaaS / Suscripción', desc: 'Dashboard, IoT, IA para hosts' },
                { title: 'Reposición de Insumos', desc: 'Kits de cobijas, amenidades, toiletries' },
              ].map((item) => (
                <div key={item.title}>
                  <p className={styles.subTitle} style={{ color: '#2D6A4F' }}>{item.title}</p>
                  <p className={styles.subDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
