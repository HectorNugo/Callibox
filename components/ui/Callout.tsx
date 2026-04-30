interface Props {
  children: React.ReactNode
  className?: string
}

export default function Callout({ children, className = '' }: Props) {
  return (
    <div
      className={`border-l-4 border-brand bg-brand-light px-5 py-4 rounded-r-[var(--radius-sm)] text-sm text-brand-dark italic leading-relaxed my-6 ${className}`}
    >
      {children}
    </div>
  )
}
