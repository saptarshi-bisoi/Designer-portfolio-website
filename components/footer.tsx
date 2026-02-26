"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer
      className="py-8 px-6 md:px-12 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center border border-primary/30"
            style={{ background: "oklch(0.72 0.18 210 / 0.08)" }}
          >
            <span
              className="text-xs font-bold"
              style={{ color: "var(--primary)", fontFamily: "var(--font-space-grotesk)" }}
            >
              SB
            </span>
          </div>
          <span className="text-sm font-semibold" style={{ color: "var(--foreground)", fontFamily: "var(--font-space-grotesk)" }}>
            SAPTARSHI BISOI
          </span>
        </motion.div>
        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
          &copy; {new Date().getFullYear()} Saptarshi Bisoi. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
          Graphic Designer &amp; Creative Developer
        </p>
      </div>
    </footer>
  )
}
