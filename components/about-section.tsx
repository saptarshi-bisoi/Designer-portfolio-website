"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const skills = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Figma",
  "Adobe InDesign",
  "After Effects",
  "Procreate",
  "Brand Strategy",
  "Typography",
  "Motion Design",
  "UI/UX Design",
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const imageRef = useRef<HTMLDivElement>(null)
  const imageInView = useInView(imageRef, { once: true, margin: "-60px" })

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            ref={imageRef}
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -inset-4 rounded-3xl"
                style={{ border: "1px solid var(--border)" }}
              />
              <div
                className="absolute -bottom-8 -right-8 w-2/3 h-2/3 rounded-2xl pointer-events-none"
                style={{ border: "1px solid oklch(0.72 0.18 210 / 0.2)" }}
              />

              {/* Profile image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/profile.jpg"
                  alt="Saptarshi Bisoi — Graphic Designer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.09 0.005 260 / 0.5) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl backdrop-blur-md border"
                style={{
                  background: "oklch(0.09 0.005 260 / 0.9)",
                  borderColor: "var(--border)",
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Based in
                </p>
                <p
                  className="font-semibold text-sm"
                  style={{ color: "var(--foreground)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  India
                </p>
              </motion.div>

              {/* Glow under image */}
              <div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 pointer-events-none blur-3xl"
                style={{ background: "oklch(0.72 0.18 210 / 0.12)" }}
              />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-8"
          >
            <div>
              <p
                className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
                style={{ color: "var(--primary)" }}
              >
                About Me
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-balance mb-6"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-space-grotesk)" }}
              >
                Design is the art of problem solving with style.
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  Hi, I&apos;m Saptarshi — a graphic designer and creative developer with a passion for turning ideas into stunning visual experiences. I blend artistic intuition with technical precision to create work that doesn&apos;t just look good, but communicates powerfully.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  With over 4 years of experience across brand identity, digital design, and UI, I&apos;ve collaborated with startups, musicians, agencies, and individuals who believe great design can change perception.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4 font-medium"
                style={{ color: "var(--muted-foreground)" }}
              >
                Tools & Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                    className="text-xs px-3 py-1.5 rounded-full border font-medium"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                      background: "var(--secondary)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="self-start inline-flex items-center gap-3 text-sm font-semibold group"
              style={{ color: "var(--primary)" }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Let&apos;s work together
              <span
                className="inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
