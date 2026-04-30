type Variant = 'brand' | 'green' | 'blue'

const variantClasses: Record<Variant, string> = {
  brand: 'bg-brand-light text-brand-dark',
  green: 'bg-calli-green-light text-calli-green',
  blue: 'bg-calli-blue-light text-calli-blue',
}

interface Props {
  children: React.ReactNode
  variant?: Variant
}

export default function Badge({ children, variant = 'brand' }: Props) {
  return (
    <span
      className={`inline-block text-[10px] font-semibold tracking-[0.5px] px-2 py-0.5 rounded-full uppercase ${variantClasses[variant]}`}
    >
      {children}
    </span>
  )
}
