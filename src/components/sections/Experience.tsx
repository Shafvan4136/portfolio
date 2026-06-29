import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MapPin, Calendar, TrendingUp, ExternalLink } from 'lucide-react'
import { SectionWrapper, SectionHeader } from '../ui/SectionWrapper'
import { experiences } from '../../data/portfolio'

export default function Experience() {
  const [expanded, setExpanded] = useState<string>(experiences[0].id)

  return (
    <SectionWrapper id="experience" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          subtitle="4+ years building scalable fintech infrastructure and ML-powered platforms"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-300 dark:via-blue-800 to-transparent" aria-hidden="true" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-2 md:left-4 top-6 w-5 h-5 rounded-full border-2 border-white dark:border-slate-950 shadow-md flex items-center justify-center"
                  style={{ backgroundColor: exp.color }}
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Card */}
                <div className="card-base overflow-hidden shadow-sm">
                  {/* Card Header */}
                  <button
                    onClick={() => setExpanded(expanded === exp.id ? '' : exp.id)}
                    className="w-full text-left p-5 md:p-6 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                    aria-expanded={expanded === exp.id}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        {/* Company */}
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                            style={{ backgroundColor: exp.color }}
                          >
                            {exp.type}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-500">{exp.duration}</span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5 truncate">
                          {exp.company}
                        </h3>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                          {exp.role}
                        </p>

                        <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-500">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <motion.div
                        animate={{ rotate: expanded === exp.id ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex-shrink-0 mt-1"
                      >
                        <ChevronDown size={18} className="text-slate-400 dark:text-slate-600" />
                      </motion.div>
                    </div>

                    {/* Impact summary - always visible */}
                    <div className="mt-4 flex items-start gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <TrendingUp size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-slate-600 dark:text-slate-400">{exp.impact}</p>
                    </div>
                  </button>

                  {/* Expandable Content */}
                  <AnimatePresence initial={false}>
                    {expanded === exp.id && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden border-t border-slate-100 dark:border-slate-800"
                      >
                        <div className="p-5 md:p-6 pt-5">
                          {/* Achievements Grid */}
                          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-4">
                            Key Achievements
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3 mb-6">
                            {exp.achievements.map((achievement, i) => (
                              <motion.div
                                key={achievement.title}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.06 }}
                                className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800/50 transition-colors group"
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                    {achievement.title}
                                  </span>
                                  <span
                                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                                    style={{
                                      color: exp.color,
                                      backgroundColor: `${exp.color}15`,
                                    }}
                                  >
                                    {achievement.metric}
                                  </span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">
                                  {achievement.description}
                                </p>
                              </motion.div>
                            ))}
                          </div>

                          {/* Technologies */}
                          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map(tech => (
                              <span key={tech} className="tech-badge">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Start point */}
          <div className="relative pl-12 md:pl-16 mt-6">
            <div className="absolute left-2 md:left-4 top-2 w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950" />
            <p className="text-sm text-slate-400 dark:text-slate-600 py-1">
              Bachelor of Engineering — M.A.M. School of Engineering (2021)
            </p>
          </div>
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.linkedin.com/in/mohamedshafvan-275ab619b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            View full experience on LinkedIn
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
