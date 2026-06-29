import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code2, Cloud, Database, Brain, Layers, Settings } from 'lucide-react'
import { SectionWrapper, SectionHeader } from '../ui/SectionWrapper'
import { skillCategories } from '../../data/portfolio'

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Cloud,
  Database,
  Brain,
  Layers,
  Settings,
}

const tagColors: Record<string, string> = {
  Expert: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800',
  Proficient: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/50 border-green-200 dark:border-green-800',
  Intermediate: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800',
}

function SkillBar({ name, level, tag, color, visible }: { name: string; level: number; tag: string; color: string; visible: boolean }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${tagColors[tag] ?? tagColors['Intermediate']}`}>
            {tag}
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-600 font-mono w-8 text-right">{level}%</span>
        </div>
      </div>
      <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: visible ? `${level}%` : 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
    </div>
  )
}

function CategoryCard({ category, isActive, onClick }: {
  category: typeof skillCategories[0]
  isActive: boolean
  onClick: () => void
}) {
  const Icon = iconMap[category.icon] ?? Code2
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {/* Category Tab Button */}
      <button
        onClick={onClick}
        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 mb-0 ${
          isActive
            ? 'bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800/60 shadow-sm'
            : 'border-transparent hover:bg-white dark:hover:bg-slate-900/50 hover:border-slate-200 dark:hover:border-slate-800'
        }`}
        aria-pressed={isActive}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${category.color}18` }}
          >
            <Icon size={16} style={{ color: category.color }} />
          </div>
          <div>
            <div className="font-semibold text-sm text-slate-900 dark:text-white">{category.title}</div>
            <div className="text-xs text-slate-500 dark:text-slate-500">{category.skills.length} skills</div>
          </div>
        </div>
      </button>

      {/* Skills panel (shown on mobile as accordion, on desktop via active state) */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="lg:hidden mt-3 mb-4 space-y-3 px-1"
        >
          {category.skills.map(skill => (
            <SkillBar
              key={skill.name}
              {...skill}
              color={category.color}
              visible={visible}
            />
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)

  const currentCategory = skillCategories.find(c => c.id === activeCategory) ?? skillCategories[0]
  const [panelVisible, setPanelVisible] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setPanelVisible(false)
    const t = setTimeout(() => setPanelVisible(true), 100)
    return () => clearTimeout(t)
  }, [activeCategory])

  return (
    <SectionWrapper id="skills" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="section-container">
        <SectionHeader
          label="Technical Skills"
          title="My Technology Stack"
          subtitle="A deep skill set across the full engineering spectrum — from data pipelines to ML systems to cloud infrastructure"
        />

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Category List */}
          <div className="lg:col-span-2 space-y-1">
            {skillCategories.map(category => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>

          {/* Skills Panel - Desktop */}
          <div className="hidden lg:block lg:col-span-3" ref={panelRef}>
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="card-base p-6 h-full"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                {(() => {
                  const Icon = iconMap[currentCategory.icon] ?? Code2
                  return (
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${currentCategory.color}15` }}
                    >
                      <Icon size={20} style={{ color: currentCategory.color }} />
                    </div>
                  )
                })()}
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{currentCategory.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-500">{currentCategory.skills.length} skills</p>
                </div>
              </div>

              <div className="space-y-4">
                {currentCategory.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <SkillBar
                      {...skill}
                      color={currentCategory.color}
                      visible={panelVisible}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* All skills compact view */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-4">
            All Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillCategories.flatMap(cat => cat.skills).map(skill => (
              <span
                key={skill.name}
                className="tech-badge cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
