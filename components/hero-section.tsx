"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowDown, Sparkles } from "lucide-react"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.72 0.18 210 / 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, oklch(0.72 0.18 210 / 0.06) 0%, transparent 70%)",
          top: "10%",
          left: "60%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, oklch(0.65 0.15 180 / 0.05) 0%, transparent 70%)",
          bottom: "20%",
          left: "20%",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs tracking-widest uppercase font-medium"
            style={{
              borderColor: "var(--primary)",
              color: "var(--primary)",
              background: "oklch(0.72 0.18 210 / 0.08)",
            }}
          >
            <Sparkles size={12} />
            Available for freelance
            <Sparkles size={12} />
          </div>
        </motion.div>

        {/* Main name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold leading-none tracking-tighter mb-6 text-balance"
          style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--foreground)" }}
        >
          SAPTARSHI
          <br />
          <span
            style={{
              WebkitTextStroke: "2px var(--primary)",
              color: "transparent",
            }}
          >
            BISOI
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl tracking-[0.2em] uppercase mb-8"
          style={{ color: "var(--muted-foreground)" }}
        >
          Graphic Designer&nbsp;&nbsp;/&nbsp;&nbsp;Creative Developer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12"
          style={{ color: "var(--muted-foreground)" }}
        >
          I craft visual experiences that merge art and technology — bold identities, seamless interfaces, and stories told through design.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#portfolio"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px oklch(0.72 0.18 210 / 0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide border transition-all"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            whileHover={{ borderColor: "var(--primary)", scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-8 mt-16 pt-16 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          {[
            { value: "50+", label: "Projects Done" },
            { value: "30+", label: "Happy Clients" },
            { value: "4+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "var(--primary)", fontFamily: "var(--font-space-grotesk)" }}
              >
                {stat.value}
              </p>
              <p className="text-xs tracking-wider uppercase mt-1" style={{ color: "var(--muted-foreground)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} style={{ color: "var(--muted-foreground)" }} />
        </motion.div>
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--muted-foreground)" }}>
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
