import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react'
import { SectionWrapper, SectionHeader } from '../ui/SectionWrapper'
import { education, languages } from '../../data/portfolio'

export default function Education() {
  return (
    <SectionWrapper id="education" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="section-container">
        <SectionHeader
          label="Education"
          title="Academic Background"
          subtitle="Engineering foundations that power real-world systems"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Cards */}
          <div className="lg:col-span-2 space-y-5">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="card-base card-hover overflow-hidden group"
              >
                {/* Color accent */}
                <div className="flex">
                  <div
                    className="w-1 flex-shrink-0"
                    style={{ backgroundColor: edu.color }}
                  />
                  <div className="flex-1 p-5 md:p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ backgroundColor: `${edu.color}15` }}
                      >
                        {index === 0 ? (
                          <GraduationCap size={22} style={{ color: edu.color }} />
                        ) : (
                          <BookOpen size={22} style={{ color: edu.color }} />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                            style={{ color: edu.color, backgroundColor: `${edu.color}14` }}
                          >
                            {edu.grade}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-500">{edu.period}</span>
                        </div>

                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                          {edu.field}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">
                          {edu.institution}
                          {edu.university && (
                            <span className="text-slate-400 dark:text-slate-600"> · {edu.university}</span>
                          )}
                        </p>

                        {/* Highlights */}
                        {edu.highlights.length > 0 && (
                          <ul className="space-y-1.5">
                            {edu.highlights.map(highlight => (
                              <li key={highlight} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                                <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0" style={{ color: edu.color }} />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card-base p-5 md:p-6 sticky top-24">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <span className="text-lg">🌐</span>
                Languages
              </h3>

              <div className="space-y-5">
                {languages.map(lang => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {lang.name}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-500">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-3">
                  Location
                </h4>
                <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <p className="font-medium text-slate-900 dark:text-white">Ramanathapuram, India</p>
                  <p className="text-xs">Tamil Nadu · PIN 623315</p>
                  <p className="text-xs text-slate-400 dark:text-slate-600 mt-2">Available for remote opportunities worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
