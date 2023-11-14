import type { Metadata } from 'next'
import { poppins } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Top Wikipedia articles',
  description: 'Take-home assessment for Grow Therapy, by Chris Womack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
