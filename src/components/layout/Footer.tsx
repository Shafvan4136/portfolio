import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { personalInfo } from '../../data/portfolio'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                MS
              </div>
              <span className="font-bold text-slate-900 dark:text-white">Mohamed Shafvan</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-500 text-center md:text-left">
              Full Stack Engineer · DevOps Architect · AI/ML Specialist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-2.5 rounded-lg text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-colors">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} Mohamed Shafvan. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600">
            Ramanathapuram, Tamil Nadu, India
          </p>
        </div>
      </div>
    </footer>
  )
}
