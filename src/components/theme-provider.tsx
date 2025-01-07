'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
    theme: 'system',
    setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

const getThemeFromStorage = (key: string, fallback: Theme): Theme => {
    if (typeof window === 'undefined') { return fallback }
    try {
        const value = localStorage.getItem(key)
        return (value as Theme) || fallback
    } catch (e) {
        // Handle localStorage errors
        console.warn('Failed to get theme from localStorage:', e)
        return fallback
    }
}

export function ThemeProvider({
    children,
    defaultTheme = 'system',
    storageKey = 'theme',
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const savedTheme = getThemeFromStorage(storageKey, defaultTheme)
        setTheme(savedTheme)
    }, [defaultTheme, storageKey])

    useEffect(() => {
        if (!mounted) { return }

        const root = window.document.documentElement
        root.classList.remove('light', 'dark')

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
                .matches
                ? 'dark'
                : 'light'
            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)
    }, [theme, mounted])

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            try {
                localStorage.setItem(storageKey, theme)
            } catch (e) {
                console.warn('Failed to save theme to localStorage:', e)
            }
            setTheme(theme)
        },
    }

    // Prevent flash of incorrect theme
    if (!mounted) {
        return (
            <div suppressHydrationWarning style={{ visibility: 'hidden' }}>
                {children}
            </div>
        )
    }

    return (
        <div suppressHydrationWarning>
            <ThemeProviderContext.Provider {...props} value={value}>
                {children}
            </ThemeProviderContext.Provider>
        </div>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined) { throw new Error('useTheme must be used within a ThemeProvider') }

    return context
} 