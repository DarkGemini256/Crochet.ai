import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from './providers/AuthProvider'

export const metadata: Metadata = {
  title: 'Crochet.ai - AI-Powered Crochet Planning',
  description: 'Generate patterns, plan projects, and track progress with AI-guided tutorials for all skill levels',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
