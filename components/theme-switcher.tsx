"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch — render only after mount
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="theme-switcher-placeholder" />

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="neo-theme-btn"
      data-dark={isDark}
    >
      <span className="neo-theme-btn__track">
        <span className="neo-theme-btn__icon neo-theme-btn__icon--sun" aria-hidden>
          ☀
        </span>
        <span className="neo-theme-btn__icon neo-theme-btn__icon--moon" aria-hidden>
          ☾
        </span>
      </span>
      <span className="neo-theme-btn__label">{isDark ? "DARK" : "LITE"}</span>
    </button>
  )
}
