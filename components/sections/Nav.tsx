const navLinks = [
  { href: '#que-es', label: '¿Qué es?' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#canvas', label: 'BMC' },
  { href: '#segmentos', label: 'Segmentos' },
  { href: '#revenue', label: 'Revenue' },
  { href: '#diferenciadores', label: 'Vs. Competencia' },
  { href: '#ecosystem', label: 'Ecosistema' },
  { href: '#metricas', label: 'Métricas' },
  { href: '#gtm', label: 'Go-to-Market' },
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border px-8 flex items-center gap-8 h-[52px]">
      <span className="font-bold text-[20px] tracking-[-0.5px] text-brand shrink-0">CALLI</span>
      <div className="flex gap-6 text-[13px] text-ink-soft overflow-x-auto scrollbar-none">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-brand whitespace-nowrap transition-colors duration-150"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
