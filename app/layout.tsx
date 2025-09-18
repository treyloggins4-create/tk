import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/contexts/AuthContext'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TK Prime Services LLC - Professional Power Washing & More',
  description: 'Professional power washing, leaf cleanup, junk removal, and debris removal services. Transform your property with our expert cleaning solutions.',
  keywords: 'power washing, pressure washing, leaf cleanup, junk removal, debris removal, professional cleaning services',
  authors: [{ name: 'TK Prime Services LLC' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'TK Prime Services LLC - Professional Power Washing & More',
    description: 'Professional power washing, leaf cleanup, junk removal, and debris removal services.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyDh9c5t7qXZi0DpN5iUK9qRBk1vPJ5Bxpc'
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=2" />
        <meta name="msapplication-TileImage" content="/favicon.ico?v=2" />
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry&loading=async`}
          async
          defer
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
