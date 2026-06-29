import { motion } from 'framer-motion'
import { Target, Zap, Users, Globe } from 'lucide-react'
import { SectionWrapper, SectionHeader } from '../ui/SectionWrapper'
import { personalInfo } from '../../data/portfolio'

const highlights = [
  {
    icon: Target,
    title: 'Impact-Driven',
    description: 'Every system I build is optimized for measurable business outcomes — from 40% faster deployments to 3× dashboard performance.',
    color: '#2563EB',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-100 dark:border-blue-900/50',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Processing 100K+ financial records daily with sub-100ms latency. Performance is not a feature — it is a foundation.',
    color: '#f59e0b',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-100 dark:border-amber-900/50',
  },
  {
    icon: Users,
    title: 'Platform Builder',
    description: 'Architected real-time research platforms serving 500+ institutional investors with 99.9% uptime across AWS and GCP.',
    color: '#22c55e',
    bg: 'bg-green-50 dark:bg-green-950/30',
    border: 'border-green-100 dark:border-green-900/50',
  },
  {
    icon: Globe,
    title: 'Full-Spectrum Engineer',
    description: 'From LLM-powered chatbots to Kubernetes deployments — I bridge the gap between ML research and production systems.',
    color: '#0ea5e9',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    border: 'border-sky-100 dark:border-sky-900/50',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <SectionWrapper id="about" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Bio */}
          <div>
            <SectionHeader
              label="About Me"
              title="Engineering at the intersection of Data & AI"
            />

            <div className="space-y-4 prose-custom text-base">
              <p>
                I'm a <strong className="text-slate-900 dark:text-white font-semibold">Full Stack / Data / DevOps Engineer</strong> with 4+ years building production-grade systems in the financial technology space.
                Currently at <span className="text-blue-600 dark:text-blue-400 font-medium">Rhofi Fintech Technologies</span>, I architect the infrastructure that powers real-time market intelligence for institutional investors.
              </p>
              <p>
                My work sits at the intersection of <strong className="text-slate-900 dark:text-white font-semibold">data engineering</strong>, <strong className="text-slate-900 dark:text-white font-semibold">machine learning</strong>, and <strong className="text-slate-900 dark:text-white font-semibold">cloud infrastructure</strong>. I design high-throughput streaming pipelines, deploy ML models to production, and build the DevOps machinery that keeps everything running reliably.
              </p>
              <p>
                I believe in systems that are fast by default, observable by design, and built to evolve — not just systems that work today.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 tracking-wider uppercase">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.coreCompetencies.map(comp => (
                  <span
                    key={comp}
                    className="px-3 py-1.5 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Highlight Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map(h => {
              const Icon = h.icon
              return (
                <motion.div
                  key={h.title}
                  variants={item}
                  className={`${h.bg} ${h.border} border rounded-xl p-5 card-hover`}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${h.color}18` }}
                  >
                    <Icon size={18} style={{ color: h.color }} />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">{h.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{h.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
