import type { Metadata } from 'next'
import { Sora, Playfair_Display } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Calli — Plataforma de Micro-Hospedaje Modular',
  description:
    'Calli transforma espacios en experiencias de hospedaje modulares, escalables y tecnológicamente integradas. La primera red de hospedaje modular e inteligente, desplegable en cualquier espacio.',
  keywords: ['micro-hospedaje', 'hospedaje modular', 'CalliBox', 'plataforma hospedaje', 'hotel modular México'],
  authors: [{ name: 'Calli' }],
  openGraph: {
    title: 'Calli — Micro-Hospedaje Modular',
    description: 'La primera red de hospedaje modular, inteligente y portátil.',
    type: 'website',
    locale: 'es_MX',
  },
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sora.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
