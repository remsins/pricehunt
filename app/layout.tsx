import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'PriceHunt',
  description: 'Track product prices effortlessly and save money on your online shopping.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Main wrapper with max width and horizontal centering */}
        <main className="max-w-10xl mx-auto w-full">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
