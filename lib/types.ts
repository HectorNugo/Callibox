export type ColorVariant =
  | 'brand'
  | 'green'
  | 'blue'
  | 'amber'
  | 'purple'
  | 'teal'

export interface Stat {
  value: string
  label: string
}

export interface FeatureCard {
  icon: string
  iconColor: ColorVariant
  title: string
  description: string
}

export interface FlowStep {
  number: number
  title: string
  description: string
}

export interface Flow {
  id: 'huesped' | 'host' | 'operador'
  label: string
  emoji: string
  steps: FlowStep[]
}

export interface BmcCell {
  id: string
  label: string
  content: BmcContent[]
  colorClass: string
}

export type BmcContent =
  | { type: 'list'; items: string[] }
  | { type: 'section'; title: string; items: string[] }
  | { type: 'grid'; columns: BmcGridColumn[] }

export interface BmcGridColumn {
  title: string
  description: string
}

export interface ValueChainColumn {
  abbr: string
  abbrColor: string
  title: string
  description: string
  owner: string
  ownerColor: string
  isPrimary?: boolean
}

export interface SegmentTab {
  id: string
  label: string
  emoji: string
  cards: SegmentCard[]
}

export interface SegmentCard {
  profile: string
  title: string
  description: string
}

export interface RevenueStream {
  number: string
  title: string
  headerBg: string
  description: string
  amount: string
  amountLabel: string
  badges: string[]
}

export interface DifferentiatorRow {
  feature: string
  calli: 'yes' | 'partial' | 'no'
  calliLabel: string
  hotel: 'yes' | 'partial' | 'no'
  hotelLabel: string
  motel: 'yes' | 'partial' | 'no'
  motelLabel: string
  airbnb: 'yes' | 'partial' | 'no'
  airbnbLabel: string
  pod: 'yes' | 'partial' | 'no'
  podLabel: string
}

export interface CalliBoxConfig {
  title: string
  description: string
  visual: 'standalone' | 'serie' | 'vertical' | 'campus' | 'suite'
}

export interface MetricGroup {
  title: string
  emoji: string
  metrics: Metric[]
}

export interface Metric {
  value: string
  label: string
  description: string
}

export interface GoToMarketPhase {
  number: number
  title: string
  timeline: string
  items: { label: string; value: string }[]
}

export interface Partner {
  emoji: string
  title: string
  description: string
}
