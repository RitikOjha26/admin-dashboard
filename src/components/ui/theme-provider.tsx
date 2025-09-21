import React from "react"

type Theme = "light" | "dark" | "system"

type ThemeContextValue = {
  theme: Theme
  resolved: "light" | "dark"
  setTheme: (t: Theme) => void
  toggle: () => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

function getSystem(): "light" | "dark" {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  const mode = theme === "system" ? getSystem() : theme
  root.classList.toggle("dark", mode === "dark")
  
  root.style.colorScheme = mode // "light" | "dark"
}

export function ThemeProvider({ children, defaultTheme = "system" as Theme }: { children: React.ReactNode; defaultTheme?: Theme }) {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme
    return (localStorage.getItem("theme") as Theme) || defaultTheme
  })

  const resolved = theme === "system" ? getSystem() : theme

  React.useEffect(() => {
    applyTheme(theme)
    try { localStorage.setItem("theme", theme) } catch {}
  }, [theme])

  React.useEffect(() => {
    if (theme !== "system") return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => applyTheme("system")
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [theme])

  const setTheme = (t: Theme) => setThemeState(t)
  const toggle = () => setThemeState((prev) => {
    const next = (prev === "dark" ? "light" : "dark") as Theme
    return next
  })

  const value: ThemeContextValue = { theme, resolved, setTheme, toggle }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
