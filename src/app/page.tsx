'use client'

import { ThemeProvider } from 'next-themes'
import { Header } from '@/components/header'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main>
        <Header />
        <Hero />
        <div className="pt-20">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </ThemeProvider>
  )
}

