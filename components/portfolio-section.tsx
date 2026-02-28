"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { projects, categories, type Project } from "@/lib/projects-data"

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative cursor-pointer rounded-2xl overflow-hidden"
      style={{ background: "var(--card)", border: "1px solid var(--border)" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => project.pinterestUrl && window.open(project.pinterestUrl, "_blank")}
    >
      {/* ── Thumbnail ─────────────────────────────────────────────── */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Blue glow overlay on hover */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background:
              "linear-gradient(135deg, oklch(0.72 0.18 210 / 0.25) 0%, transparent 60%)",
          }}
        />

        {/* External link badge */}
        {project.pinterestUrl && (
          <motion.div
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            <ExternalLink size={14} />
          </motion.div>
        )}

        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-4 left-4 px-2 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase"
            style={{
              background: "oklch(0.72 0.18 210 / 0.2)",
              border: "1px solid oklch(0.72 0.18 210 / 0.4)",
              color: "var(--primary)",
              backdropFilter: "blur(8px)",
            }}
          >
            Featured
          </div>
        )}
      </div>

      {/* ── Card body ─────────────────────────────────────────────── */}
      <div className="p-5">
        <p
          className="text-xs tracking-widest uppercase mb-2 font-medium"
          style={{ color: "var(--primary)" }}
        >
          {project.category}
        </p>
        <h3
          className="text-base font-semibold leading-snug"
          style={{
            color: "var(--foreground)",
            fontFamily: "var(--font-space-grotesk)",
          }}
        >
          {project.title}
        </h3>
      </div>

      {/* ── Glow border on hover ──────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: hovered
            ? "0 0 0 1px var(--primary), 0 20px 60px oklch(0.72 0.18 210 / 0.15)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

// ─── Portfolio Section ─────────────────────────────────────────────────────────

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true })

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* ── Heading ───────────────────────────────────────────── */}
        <motion.div
          ref={headingRef}
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
            style={{ color: "var(--primary)" }}
          >
            Selected Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tighter leading-none text-balance"
              style={{
                color: "var(--foreground)",
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              My Portfolio
            </h2>
            <p
              className="max-w-xs text-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Click any project to view the full post on Pinterest.
            </p>
          </div>
        </motion.div>

        {/* ── Filter tabs ───────────────────────────────────────── */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-2 rounded-full text-xs tracking-wide border transition-all"
              style={{
                borderColor:
                  activeFilter === cat ? "var(--primary)" : "var(--border)",
                color:
                  activeFilter === cat
                    ? "var(--primary)"
                    : "var(--muted-foreground)",
                background:
                  activeFilter === cat
                    ? "oklch(0.72 0.18 210 / 0.1)"
                    : "transparent",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Project grid ──────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
