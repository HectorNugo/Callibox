export default function Hero() {
  return (
    <div className="bg-ink text-white py-20 px-8 text-center">
      <span className="inline-block bg-brand text-white text-[11px] font-semibold tracking-[2px] uppercase px-4 py-1 rounded-full mb-6">
        Business Model · 2025
      </span>

      <h1
        className="font-display font-bold leading-[1.1] mb-4 text-white"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
      >
        CALLI
        <br />
        <span className="text-brand">Micro-Hospitality</span>
        <br />
        Platform
      </h1>

      <p className="text-[1.1rem] text-white/65 max-w-[600px] mx-auto mb-10">
        La primera red de hospedaje modular, inteligente y portátil — desplegable en cualquier espacio,
        operable sin humanos, escalable infinitamente.
      </p>

      <div className="inline-block border border-white/20 rounded-[var(--radius)] px-8 py-4 italic text-white/80 text-base max-w-[580px]">
        "Calli (náhuatl): casa, hogar, refugio.
        <br />
        Una experiencia de hospedaje premium en cualquier rincón del mundo — sin hotel, sin anfitrión, sin fricción."
      </div>
    </div>
  )
}
