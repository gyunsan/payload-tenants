'use client'

import { Button } from '@/components/catalyst/button'
import { useTheme } from '@/components/theme-provider'
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <Button
            plain
            onClick={toggleTheme}
            className="relative h-9 w-9 p-0"
        >
            {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
            ) : (
                <MoonIcon className="h-5 w-5" />
            )}
        </Button>
    )
}