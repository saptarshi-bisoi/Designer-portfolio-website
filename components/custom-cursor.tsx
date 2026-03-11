"use client"

import { useEffect, useRef, useState } from "react"
import { m, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const isHovering = useRef(false)

  useEffect(() => {
    // Detect touch devices and bail out early
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches
    if (isTouch) {
      setIsTouchDevice(true)
      return
    }

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

  // Don't render on touch devices
  if (isTouchDevice) return null

  return (
    <>
      {/* Outer ring */}
      <m.div
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
      <m.div
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
