import { stats } from '@/lib/data'

export default function StatsBar() {
  return (
    <div className="bg-brand grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="px-6 py-6 text-center border-r border-white/20 last:border-r-0"
        >
          <span className="block text-2xl font-bold text-white">{stat.value}</span>
          <span className="block text-[11px] text-white/75 uppercase tracking-[1px] mt-1">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}
