import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Saptarshi Bisoi — Graphic Designer & Creative Developer',
  description: 'Portfolio of Saptarshi Bisoi, a graphic designer and creative developer specializing in poster design, social media design, UI design, and brand identity.',
  generator: 'v0.app',
  keywords: ['graphic designer', 'creative developer', 'brand identity', 'UI design', 'poster design'],
  authors: [{ name: 'Saptarshi Bisoi' }],
  themeColor: '#0a0a14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
