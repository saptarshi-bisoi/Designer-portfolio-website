"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { ThemeSwitcher } from "@/components/theme-switcher"


const navLinks = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20)
  })

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Glassmorphism bg */}
      {scrolled && (
        <motion.div
          className="absolute inset-0 rounded-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background: "oklch(from var(--background) l c h / 0.88)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
          }}

        />
      )}

      {/* Logo */}
      <motion.a
        href="#"
        className="relative z-10 flex items-center gap-2 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-colors"
          style={{ background: "oklch(0.72 0.18 210 / 0.1)" }}
        >
          <span
            className="text-sm font-bold"
            style={{ color: "var(--primary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            SB
          </span>
        </div>
        <span
          className="hidden sm:block text-sm font-semibold tracking-tight"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-space-grotesk)" }}
        >
          SAPTARSHI
        </span>
      </motion.a>

      {/* Desktop nav */}
      <nav className="relative z-10 hidden md:flex items-center gap-8">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="text-sm tracking-wide transition-colors relative group"
            style={{ color: "var(--muted-foreground)" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
            whileHover={{ color: "var(--foreground)" }}
          >
            {link.label}
            <span
              className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
              style={{ background: "var(--primary)" }}
            />
          </motion.a>
        ))}
        <motion.a
          href="#contact"
          className="text-sm px-4 py-2 rounded-full border font-medium transition-all"
          style={{
            borderColor: "var(--primary)",
            color: "var(--primary)",
          }}
          whileHover={{
            backgroundColor: "var(--primary)",
            color: "var(--primary-foreground)",
            scale: 1.03,
          }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hire Me
        </motion.a>
        <ThemeSwitcher />
      </nav>


      {/* Mobile menu button */}
      <button
        className="relative z-10 md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <motion.span
          className="block w-5 h-px"
          style={{ background: "var(--foreground)" }}
          animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 5 : 0 }}
        />
        <motion.span
          className="block w-5 h-px"
          style={{ background: "var(--foreground)" }}
          animate={{ opacity: mobileOpen ? 0 : 1 }}
        />
        <motion.span
          className="block w-5 h-px"
          style={{ background: "var(--foreground)" }}
          animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -5 : 0 }}
        />
      </button>

      {/* Mobile menu */}
      <motion.div
        className="absolute top-full left-0 right-0 md:hidden overflow-hidden"
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: "oklch(from var(--background) l c h / 0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: mobileOpen ? "1px solid var(--border)" : "none",
        }}

      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium py-2 border-b transition-colors"
              style={{ color: "var(--muted-foreground)", borderColor: "var(--border)" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 text-center text-sm px-4 py-3 rounded-full border font-medium"
            style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
            onClick={() => setMobileOpen(false)}
          >
            Hire Me
          </a>
          <div className="mt-4 flex justify-center">
            <ThemeSwitcher />
          </div>
        </nav>
      </motion.div>

    </motion.header>
  )
}
