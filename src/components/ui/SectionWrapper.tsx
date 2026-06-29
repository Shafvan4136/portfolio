import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
  children: React.ReactNode
  id: string
  className?: string
}

export function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ label, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <div className={`flex ${centered ? 'justify-center' : ''} mb-4`}>
        <span className="section-label">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          {label}
        </span>
      </div>
      <h2 className="section-title mb-3">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle max-w-2xl ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  )
}

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = '', duration = 1500 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let frame = 0
    const totalFrames = duration / 16
    const step = value / totalFrames

    const timer = setInterval(() => {
      frame++
      const eased = Math.min(frame * step, value)
      setCount(Math.floor(eased))
      if (frame >= totalFrames) {
        setCount(value)
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [started, value, duration])

  return <span ref={ref}>{count}{suffix}</span>
}
