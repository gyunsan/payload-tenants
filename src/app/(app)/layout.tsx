import React from 'react'
import { cn } from 'src/utilities/cn'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/footer'
import { Nav } from '@/components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  description: 'Sapi Dev an api for every project',
  title: 'Sapi Dev',
}

 
export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.className, 'min-h-screen bg-background')}>
      <body suppressHydrationWarning className="bg-background text-foreground">
        <ThemeProvider defaultTheme="system" storageKey="app-theme">
          <Nav>
            {children}
            <Footer />
          </Nav>
        </ThemeProvider>
      </body>
    </html>
  )
}
