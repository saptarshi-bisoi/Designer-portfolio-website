"use client"

import { m, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, ExternalLink, Instagram, Twitter, Linkedin } from "lucide-react"

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    handle: "saptarshibisoi.official@gmail.com",
    href: "mailto:saptarshibisoi.official@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@aka.saptarshi",
    href: "https://www.instagram.com/aka.saptarshi/",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    handle: "@saptarshiBisoi",
    href: "https://x.com/saptarshiBisoi",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Saptarshi Bisoi",
    href: "https://www.linkedin.com/in/saptarshi-legend/",
  },
]

// Pinterest SVG icon
function PinterestIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  )
}

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, oklch(0.72 0.18 210 / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto">
        <m.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
            style={{ color: "var(--primary)" }}
          >
            Get In Touch
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-balance mb-6"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-space-grotesk)" }}
          >
            Let&apos;s create something
            <br />
            <span style={{ WebkitTextStroke: "2px var(--primary)", color: "transparent" }}>
              remarkable
            </span>{" "}
            together.
          </h2>
          <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ color: "var(--muted-foreground)" }}>
            Have a project in mind? I&apos;d love to hear about it. Send me an email or connect on social media — I typically respond within 24 hours.
          </p>
        </m.div>

        {/* Main CTA */}
        <m.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <m.a
            href="mailto:saptarshibisoi.official@gmail.com"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-base tracking-wide transition-all"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 60px oklch(0.72 0.18 210 / 0.5)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={18} />
            Send me an email
            <ExternalLink size={14} className="opacity-70" />
          </m.a>
        </m.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--muted-foreground)" }}>
            or find me on
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        {/* Social links grid */}
        <m.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {socialLinks.map((link, i) => {
            const Icon = link.icon
            return (
              <m.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border transition-all"
                style={{ borderColor: "var(--border)", background: "var(--card)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{
                  borderColor: "var(--primary)",
                  boxShadow: "0 0 20px oklch(0.72 0.18 210 / 0.1)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{
                    background: "oklch(0.72 0.18 210 / 0.08)",
                    color: "var(--primary)",
                    border: "1px solid oklch(0.72 0.18 210 / 0.2)",
                  }}
                >
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "var(--muted-foreground)" }}>
                    {link.label}
                  </p>
                  <p className="text-sm font-medium truncate" style={{ color: "var(--foreground)" }}>
                    {link.handle}
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--primary)" }}
                />
              </m.a>
            )
          })}
        </m.div>

        {/* Pinterest special CTA */}
        <m.a
          href="https://pin.it/3so5CxrFC"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full flex items-center justify-between p-6 rounded-2xl border transition-all"
          style={{ borderColor: "var(--border)", background: "var(--card)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85 }}
          whileHover={{
            borderColor: "#e60023",
            boxShadow: "0 0 30px rgba(230, 0, 35, 0.1)",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-red-500/20"
              style={{
                background: "rgba(230, 0, 35, 0.08)",
                color: "#e60023",
                border: "1px solid rgba(230, 0, 35, 0.2)",
              }}
            >
              <PinterestIcon size={18} />
            </div>
            <div>
              <p
                className="font-semibold text-sm mb-0.5"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-space-grotesk)" }}
              >
                View my Pinterest boards
              </p>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                Browse all my design inspiration and saved projects
              </p>
            </div>
          </div>
          <ExternalLink
            size={16}
            className="flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ color: "#e60023" }}
          />
        </m.a>
      </div>
    </section>
  )
}
