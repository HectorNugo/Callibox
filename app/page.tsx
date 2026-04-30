import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import WhatIsCalli from '@/components/sections/WhatIsCalli'
import HowItWorks from '@/components/sections/HowItWorks'
import BusinessModelCanvas from '@/components/sections/BusinessModelCanvas'
import ValueChain from '@/components/sections/ValueChain'
import Segments from '@/components/sections/Segments'
import RevenueStreams from '@/components/sections/RevenueStreams'
import Differentiators from '@/components/sections/Differentiators'
import CalliBoxConfigs from '@/components/sections/CalliBoxConfigs'
import Ecosystem from '@/components/sections/Ecosystem'
import Metrics from '@/components/sections/Metrics'
import GoToMarket from '@/components/sections/GoToMarket'
import Partners from '@/components/sections/Partners'
import Summary from '@/components/sections/Summary'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <StatsBar />
      <WhatIsCalli />
      <HowItWorks />
      <BusinessModelCanvas />
      <ValueChain />
      <Segments />
      <RevenueStreams />
      <Differentiators />
      <CalliBoxConfigs />
      <Ecosystem />
      <Metrics />
      <GoToMarket />
      <Partners />
      <Summary />
      <Footer />
    </>
  )
}
