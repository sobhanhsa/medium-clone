import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Blogg App',
  description: 'an ultimate clone of medium',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
