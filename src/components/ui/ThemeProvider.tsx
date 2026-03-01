'use client'
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { THEMES, LANGUAGES, type ThemeKey, type Lang } from '@/lib/data'

interface AppCtx { theme: ThemeKey; lang: Lang; setTheme:(t:ThemeKey)=>void; setLang:(l:Lang)=>void }
const Ctx = createContext<AppCtx>({ theme:'amber', lang:'en', setTheme:()=>{}, setLang:()=>{} })
export const useApp = () => useContext(Ctx)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>('amber')
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    try {
      const t = localStorage.getItem('bsh_theme') as ThemeKey | null
      const l = localStorage.getItem('bsh_lang') as Lang | null
      if (t && THEMES.find(x => x.key === t)) setThemeState(t)
      if (l && LANGUAGES.find(x => x.code === l)) setLangState(l)
      else {
        const nav = navigator.language || 'en'
        if (nav.startsWith('es')) setLangState('es')
        else if (nav.startsWith('de')) setLangState('de')
      }
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.setAttribute('data-lang', lang)
    document.documentElement.lang = lang
  }, [theme, lang])

  const setTheme = (t: ThemeKey) => {
    setThemeState(t)
    try { localStorage.setItem('bsh_theme', t) } catch {}
    if (typeof window !== 'undefined' && window.gtag)
      window.gtag('event', 'theme_change', { color: t })
  }

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem('bsh_lang', l) } catch {}
    document.documentElement.lang = l
    if (typeof window !== 'undefined' && window.gtag)
      window.gtag('event', 'language_change', { language: l })
  }

  return <Ctx.Provider value={{ theme, lang, setTheme, setLang }}>{children}</Ctx.Provider>
}

declare global { interface Window { gtag: (...args: unknown[]) => void } }
