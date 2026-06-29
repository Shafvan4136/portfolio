import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, ChevronDown, Sparkles } from 'lucide-react'
import { useTypingEffect } from '../../hooks'
import { personalInfo } from '../../data/portfolio'
import { AnimatedCounter } from '../ui/SectionWrapper'

export default function Hero() {
  const typedText = useTypingEffect(personalInfo.roles, 80, 45, 2200)

  const scrollToAbout = () => {
    const el = document.getElementById('about')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-60 dark:opacity-100" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-blue-500/8 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-sky-400/5 dark:bg-sky-400/8 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left Content - 3 cols */}
          <div className="lg:col-span-3 order-2 lg:order-1">

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800/60 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight tracking-tight"
            >
              Mohamed{' '}
              <span className="gradient-text">Shafvan</span>
            </motion.h1>

            {/* Typed Role */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-6 min-h-[40px]"
            >
              <span className="text-xl sm:text-2xl font-mono font-semibold text-blue-600 dark:text-blue-400">
                {typedText}
                <span className="cursor-blink text-blue-500 ml-0.5">|</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mb-8"
            >
              Building AI-driven financial platforms with real-time data insights.
              Specializing in <span className="text-slate-900 dark:text-white font-medium">cloud-native architecture</span>,{' '}
              <span className="text-slate-900 dark:text-white font-medium">MLOps</span>, and{' '}
              <span className="text-slate-900 dark:text-white font-medium">real-time data pipelines</span> that scale.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500 mb-8"
            >
              <MapPin size={14} />
              <span>Ramanathapuram, Tamil Nadu, India</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80
                    window.scrollTo({ top, behavior: 'smooth' })
                  }
                }}
                className="btn-primary"
              >
                <Sparkles size={16} />
                Get In Touch
              </button>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Profile
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs text-slate-400 dark:text-slate-600 font-medium">Find me on</span>
              <div className="flex gap-2">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="p-2 rounded-lg text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Photo - 2 cols */}
          <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-sky-400/10 to-blue-600/20 blur-xl scale-105" />

              {/* Photo Card */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border-2 border-white/10 dark:border-slate-700/50 shadow-2xl shadow-blue-900/10 glow-ring">
                <img
                  src="/portfolio/profile.png"
                  alt="Mohamed Shafvan — Full Stack Engineer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">Mohamed Shafvan</p>
                  <p className="text-white/70 text-xs">Full Stack · DevOps · AI/ML</p>
                </div>
              </div>

              {/* Floating badge - experience */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50"
              >
                <div className="text-xl font-bold text-slate-900 dark:text-white">5+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Years Exp.</div>
              </motion.div>

              {/* Floating badge - uptime */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-6 bottom-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50"
              >
                <div className="text-xl font-bold text-green-500">99.9%</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Uptime</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800/80"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {personalInfo.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-1 font-mono">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
