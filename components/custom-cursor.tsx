"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const isHovering = useRef(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      dotX.set(e.clientX - 3)
      dotY.set(e.clientY - 3)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        isHovering.current = true
      } else {
        isHovering.current = false
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)
    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [cursorX, cursorY, dotX, dotY])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[200] rounded-full border"
        style={{
          width: 32,
          height: 32,
          x: cursorXSpring,
          y: cursorYSpring,
          borderColor: "var(--primary)",
          opacity: 0.6,
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[200] rounded-full"
        style={{
          width: 6,
          height: 6,
          x: dotX,
          y: dotY,
          backgroundColor: "var(--primary)",
        }}
      />
    </>
  )
}
