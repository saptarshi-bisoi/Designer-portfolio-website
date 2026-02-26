"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Palette, Share2, Monitor, Layers } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Poster Design",
    description:
      "Eye-catching posters that command attention. From concert flyers to brand campaigns, I craft visuals that leave a lasting impression.",
    tags: ["Print", "Digital", "Billboard"],
    number: "01",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    description:
      "Scroll-stopping content built for engagement. Cohesive templates, story sets, and feed designs that grow your brand online.",
    tags: ["Instagram", "LinkedIn", "Twitter"],
    number: "02",
  },
  {
    icon: Monitor,
    title: "UI Design",
    description:
      "Clean, intuitive interfaces designed for the modern user. From wireframe to polished pixel-perfect mockups in Figma.",
    tags: ["Web", "Mobile", "Figma"],
    number: "03",
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description:
      "Complete identity systems that tell your story. Logo, typography, color palette, and guidelines — everything your brand needs.",
    tags: ["Logo", "Guidelines", "Stationery"],
    number: "04",
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl p-8 flex flex-col gap-6 cursor-default overflow-hidden group"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Hover glow background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.72 0.18 210 / 0.07) 0%, transparent 70%)",
        }}
      />

      {/* Number + Icon row */}
      <div className="flex items-start justify-between relative z-10">
        <motion.div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          animate={{
            background: hovered ? "oklch(0.72 0.18 210 / 0.15)" : "oklch(0.72 0.18 210 / 0.08)",
            boxShadow: hovered ? "0 0 30px oklch(0.72 0.18 210 / 0.3)" : "none",
          }}
          transition={{ duration: 0.3 }}
          style={{ border: "1px solid oklch(0.72 0.18 210 / 0.2)" }}
        >
          <Icon
            size={22}
            style={{ color: "var(--primary)" }}
          />
        </motion.div>
        <span
          className="text-5xl font-bold leading-none select-none"
          style={{ color: "var(--border)", fontFamily: "var(--font-space-grotesk)" }}
        >
          {service.number}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3">
        <h3
          className="text-xl font-bold tracking-tight"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-space-grotesk)" }}
        >
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          {service.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full border"
            style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom glow line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: "linear-gradient(90deg, transparent, var(--primary), transparent)" }}
      />
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, oklch(0.72 0.18 210 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
            style={{ color: "var(--primary)" }}
          >
            What I Do
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tighter leading-none text-balance"
              style={{ color: "var(--foreground)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Services
            </h2>
            <p className="max-w-xs text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Every project is approached with creativity, precision, and passion for great design.
            </p>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
