import SectionHeader from '@/components/ui/SectionHeader'
import FeatureCard from '@/components/ui/FeatureCard'
import Callout from '@/components/ui/Callout'
import { whatIsCalliCards } from '@/lib/data'

export default function WhatIsCalli() {
  return (
    <section id="que-es" className="py-16 px-8 max-w-[1100px] mx-auto">
      <SectionHeader
        tag="Concepto"
        title="¿Qué es el modelo de negocio de Calli?"
        lead="Calli es un ecosistema de micro-hospedaje modular: combina manufactura de hardware (las CalliBox), una plataforma tecnológica de gestión y una red de operadores — todo orquestado por IA y IoT."
      />

      <Callout>
        Calli no es un hotel. No es un Airbnb. Es una nueva categoría:{' '}
        <strong>hospedaje como infraestructura portátil</strong> — un activo físico inteligente que puede
        desplegarse en cualquier espacio disponible y generar revenue desde el día uno.
      </Callout>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
        {whatIsCalliCards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}
