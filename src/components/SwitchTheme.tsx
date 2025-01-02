'use client'
import { useCallback } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/src/theme/ThemeContext'

const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme()

  const changeTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    toggleTheme()
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }, [theme, toggleTheme])
  return (
    <div onClick={changeTheme}>
      {theme === 'light' ? <Sun className="h-5 w-5"></Sun> : <Moon className="h-5 w-5"></Moon>}
    </div>
  )
}

export default SwitchTheme
