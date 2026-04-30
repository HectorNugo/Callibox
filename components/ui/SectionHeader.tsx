interface Props {
  tag: string
  title: string
  lead?: string
  className?: string
}

export default function SectionHeader({ tag, title, lead, className = '' }: Props) {
  return (
    <div className={className}>
      <p className="text-[11px] font-semibold tracking-[2px] uppercase text-brand mb-2">{tag}</p>
      <div className="w-12 h-[3px] bg-brand rounded-full mb-4" />
      <h2
        className="font-display font-bold leading-tight mb-3"
        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
      >
        {title}
      </h2>
      {lead && (
        <p className="text-ink-soft max-w-[680px] mb-8 leading-relaxed">{lead}</p>
      )}
    </div>
  )
}
