"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.floor(Math.random() * 8) + 3
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (count >= 100) {
      const timeout = setTimeout(() => setIsLoading(false), 600)
      return () => clearTimeout(timeout)
    }
  }, [count])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "var(--background)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-2xl border border-primary/30 flex items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
                />
                <span
                  className="text-2xl font-bold tracking-tighter"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  SB
                </span>
              </div>
              {/* Spinning ring */}
              <motion.div
                className="absolute -inset-2 rounded-3xl border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <p
                className="text-xs tracking-[0.4em] uppercase mb-1"
                style={{ color: "var(--muted-foreground)" }}
              >
                Portfolio
              </p>
              <h1
                className="text-xl font-bold tracking-tight"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-space-grotesk)" }}
              >
                SAPTARSHI BISOI
              </h1>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 200 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="relative"
            >
              <div
                className="h-px w-48 rounded-full"
                style={{ background: "var(--border)" }}
              />
              <motion.div
                className="absolute top-0 left-0 h-px rounded-full"
                style={{
                  width: `${count}%`,
                  maxWidth: "192px",
                  background: "var(--primary)",
                  boxShadow: "0 0 8px var(--primary)",
                }}
                transition={{ duration: 0.1 }}
              />
              <motion.p
                className="text-center mt-3 text-xs tabular-nums"
                style={{ color: "var(--muted-foreground)" }}
              >
                {Math.min(count, 100)}%
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
