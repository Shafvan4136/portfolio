import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, MapPin, Clock, Send, ArrowRight } from 'lucide-react'
import { SectionWrapper, SectionHeader } from '../ui/SectionWrapper'
import { personalInfo } from '../../data/portfolio'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.contact.email,
    href: `mailto:${personalInfo.contact.email}`,
    description: 'Best way to reach me for opportunities',
    color: '#2563EB',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'hover:border-blue-200 dark:hover:border-blue-800',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'mohamedshafvan-275ab619b',
    href: personalInfo.contact.linkedin,
    description: 'Connect professionally, view experience & recommendations',
    color: '#0a66c2',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    border: 'hover:border-sky-200 dark:hover:border-sky-800',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/shafvan4136',
    href: personalInfo.contact.github,
    description: 'Explore my open-source projects and contributions',
    color: '#24292f',
    bg: 'bg-slate-50 dark:bg-slate-800/50',
    border: 'hover:border-slate-300 dark:hover:border-slate-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.contact.phone,
    href: `tel:${personalInfo.contact.phone.replace(/\s/g, '')}`,
    description: 'Available for calls during IST business hours',
    color: '#22c55e',
    bg: 'bg-green-50 dark:bg-green-950/30',
    border: 'hover:border-green-200 dark:hover:border-green-800',
  },
]

const quickFacts = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Ramanathapuram, Tamil Nadu, India',
    sub: 'IST (UTC+5:30)',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: '< 24 hours',
    sub: 'For professional inquiries',
  },
  {
    icon: Send,
    label: 'Open To',
    value: 'Remote & On-site roles',
    sub: 'Full-time & Contract',
  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="Contact"
          title="Let's Build Something"
          subtitle="I'm currently open to senior engineering opportunities in fintech, data, and AI-powered platforms"
          centered
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Links - 3 cols */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`${link.bg} ${link.border} border border-slate-200 dark:border-slate-800 rounded-xl p-5 card-hover group block`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${link.color}18` }}
                    >
                      <Icon size={18} style={{ color: link.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                          {link.label}
                        </span>
                        <ArrowRight
                          size={13}
                          className="text-slate-300 dark:text-slate-700 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all"
                        />
                      </div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white truncate mb-1">
                        {link.value}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-500 leading-snug">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Quick Facts - 2 cols */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-base p-6 h-full"
            >
              {/* Availability indicator */}
              <div className="flex items-center gap-2 mb-6 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  Available for opportunities
                </span>
              </div>

              <div className="space-y-5">
                {quickFacts.map(fact => {
                  const Icon = fact.icon
                  return (
                    <div key={fact.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-slate-500 dark:text-slate-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 dark:text-slate-600 mb-0.5 font-medium">{fact.label}</p>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{fact.value}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-500">{fact.sub}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="btn-primary w-full justify-center text-sm"
                >
                  <Mail size={15} />
                  Send a Message
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 dark:text-slate-500 text-sm max-w-md mx-auto">
            Looking for a senior engineer who cares deeply about system design, code quality, and shipping reliable products? Let's talk.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
