"use client"

import dynamic from "next/dynamic"
import { LazyMotion, domAnimation } from "framer-motion"
import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"

// Lazy-load below-the-fold sections to reduce initial JS bundle
const PortfolioSection = dynamic(
  () => import("@/components/portfolio-section").then((mod) => ({ default: mod.PortfolioSection })),
  { ssr: true }
)
const ServicesSection = dynamic(
  () => import("@/components/services-section").then((mod) => ({ default: mod.ServicesSection })),
  { ssr: true }
)
const AboutSection = dynamic(
  () => import("@/components/about-section").then((mod) => ({ default: mod.AboutSection })),
  { ssr: true }
)
const ContactSection = dynamic(
  () => import("@/components/contact-section").then((mod) => ({ default: mod.ContactSection })),
  { ssr: true }
)
const Footer = dynamic(
  () => import("@/components/footer").then((mod) => ({ default: mod.Footer })),
  { ssr: true }
)
const CustomCursor = dynamic(
  () => import("@/components/custom-cursor").then((mod) => ({ default: mod.CustomCursor })),
  { ssr: false }
)

export default function Home() {
  return (
    <LazyMotion features={domAnimation} strict>
      <LoadingScreen />
      <CustomCursor />
      <main className="relative min-h-screen" style={{ background: "var(--background)" }}>
        <Navbar />
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </LazyMotion>
  )
}
