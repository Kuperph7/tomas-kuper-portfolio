import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import './globals.css'
import UiHeader from '@/components/UiHeader'
import { LanguageProvider } from '@/context/LanguageContext'

const syne = Syne({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tomas Kuperman',
  description: 'Web Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}>) {
  return (
    <LanguageProvider>
      <html lang="en">
        <body className={syne.className}>
          <UiHeader />
          {children}
        </body>
      </html>
    </LanguageProvider>
  )
}
