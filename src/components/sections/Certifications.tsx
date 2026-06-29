import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Award, Calendar, Filter } from 'lucide-react'
import { SectionWrapper, SectionHeader } from '../ui/SectionWrapper'
import { certifications } from '../../data/portfolio'

const CATEGORIES = ['All', 'Data Engineering', 'Cloud Infrastructure', 'Cloud', 'DevOps', 'Internship']

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? certifications
    : certifications.filter(c => c.category === activeFilter)

  return (
    <SectionWrapper id="certifications" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="Credentials"
          title="Certifications & Badges"
          subtitle="Google Cloud skill badges, professional certifications, and program completions"
          centered
        />

        {/* Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap justify-center mb-10">
          <Filter size={14} className="text-slate-400" />
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Badges Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="card-base card-hover overflow-hidden group"
              >
                {/* Top accent bar */}
                <div className="h-1 w-full" style={{ backgroundColor: cert.color }} />

                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border border-slate-100 dark:border-slate-800"
                      style={{ backgroundColor: `${cert.color}12` }}
                    >
                      {cert.type === 'skill-badge' ? (
                        <svg viewBox="0 0 24 24" width="22" height="22" fill={cert.color}>
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      ) : (
                        <Award size={20} style={{ color: cert.color }} />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <span
                        className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2"
                        style={{ color: cert.color, backgroundColor: `${cert.color}14` }}
                      >
                        {cert.category}
                      </span>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                      <Award size={11} />
                      <span>{cert.issuer} · {cert.platform}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                      <Calendar size={11} />
                      <span>Issued {cert.date}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      cert.type === 'skill-badge'
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50'
                        : cert.type === 'certification'
                        ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50'
                        : 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/50'
                    }`}>
                      {cert.type === 'skill-badge' ? '★ Skill Badge' : cert.type === 'certification' ? '✓ Certification' : '◎ Program'}
                    </span>

                    {cert.credlyUrl && (
                      <a
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={e => e.stopPropagation()}
                        aria-label={`View ${cert.title} on Credly`}
                      >
                        Verify
                        <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400 dark:text-slate-600">
            No credentials in this category
          </div>
        )}

        {/* Stats footer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          {[
            { label: 'Google Cloud Badges', value: 6 },
            { label: 'Certifications', value: 3 },
            { label: 'Years of Learning', value: '4+' },
          ].map(stat => (
            <div
              key={stat.label}
              className="card-base p-4 text-center"
            >
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 dark:text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
