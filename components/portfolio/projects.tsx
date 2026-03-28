'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'ExamReady Nigeria',
    description: 'JAMB & WAEC exam prep PWA with 400+ questions, study notes, progress tracking, dark mode, and full offline support.',
    tags: ['PWA', 'Node.js', 'Express'],
    category: ['web'],
    link: 'https://github.com/dantelarge/examready-nigeria',
    live: false,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'CheckCBT.ng',
    description: 'Multi-role school CBT platform — admins, teachers, and students. Timed tests, instant graded results.',
    tags: ['Web', 'Express', 'Multi-Role Auth'],
    category: ['web'],
    link: 'https://cbt-system-rvb4.onrender.com',
    live: true,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    featured: false,
  },
  {
    id: 3,
    title: 'CheckResult.ng',
    description: 'School result checker — admins upload CSV sheets, students look up results by PIN with a print-ready slip.',
    tags: ['Node.js', 'CSV Upload', 'Express'],
    category: ['web'],
    link: 'https://result-checker-1r74.onrender.com',
    live: true,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    title: 'WhatsApp Automation',
    description: 'School comms platform on Meta WhatsApp Cloud API — broadcast by class, keyword auto-replies, scheduled messaging.',
    tags: ['Node.js', 'Meta API', 'Automation'],
    category: ['ai', 'automation'],
    link: 'https://whatsapp-automation-b7s2.onrender.com',
    live: true,
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80',
    featured: false,
  },
  {
    id: 5,
    title: 'Crypto Trading Bot',
    description: 'Automated Python bot trading on Binance with signal detection, backtesting engine, paper trading, and live alerts.',
    tags: ['Python', 'Binance API', 'Automation'],
    category: ['ai', 'automation'],
    link: 'https://crypto-bot-d1bt.onrender.com',
    live: true,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    featured: true,
  },
  {
    id: 6,
    title: 'MatCompat Pro',
    description: 'Materials compatibility dashboard analysing 8 materials across 28 pairings. Claude Opus AI generates risk assessments.',
    tags: ['Python', 'Claude API', 'Streamlit'],
    category: ['ai', 'data'],
    link: 'https://github.com/dantelarge/matcompat-pro',
    live: false,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    featured: false,
  },
  {
    id: 7,
    title: 'Study Habits Analysis',
    description: 'R data analysis project exploring how study habits influence academic performance, with rich ggplot2 visualisations.',
    tags: ['R', 'ggplot2', 'Data Analysis'],
    category: ['data'],
    link: 'https://github.com/dantelarge/Analysing_study_habits_vs_Academic_performance_of_students',
    live: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: false,
  },
  {
    id: 8,
    title: 'Sportify Dashboard',
    description: 'R-based sports analytics dashboard built for the Posit 2024 Table Contest with interactive visualisations.',
    tags: ['R', 'tidyverse', 'Dashboard'],
    category: ['data'],
    link: 'https://github.com/dantelarge/sportify-dashboard',
    live: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    featured: false,
  },
  {
    id: 9,
    title: 'Name Popularity App',
    description: 'Shiny web app visualising name popularity trends over decades using the babynames dataset.',
    tags: ['R', 'Shiny', 'Data Viz'],
    category: ['data'],
    link: 'https://github.com/dantelarge/name-popularity-app',
    live: false,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    featured: false,
  },
  {
    id: 10,
    title: 'Revenue Performance Dashboard',
    description: 'Interactive Power BI dashboard tracking product revenue, activation rates, and manager-level KPIs with DAX-driven time intelligence and drill-through analysis.',
    tags: ['Power BI', 'DAX', 'KPI Tracking'],
    category: ['data'],
    link: 'https://github.com/dantelarge',
    live: false,
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80',
    featured: true,
  },
  {
    id: 11,
    title: 'Economic Time Series Analysis',
    description: 'Multi-decade regression and time series analysis in R — exploring economic trends and structural patterns across historical datasets with tidyverse and ggplot2.',
    tags: ['R', 'Regression', 'Time Series'],
    category: ['data'],
    link: 'https://github.com/dantelarge',
    live: false,
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    featured: false,
  },
  {
    id: 12,
    title: 'Sales & Customer Insights Dashboard',
    description: 'Excel-based sales performance dashboard using Pivot Tables and Power Query — delivering dynamic customer segmentation and actionable revenue insights.',
    tags: ['Excel', 'Power Query', 'Pivot Tables'],
    category: ['data'],
    link: 'https://github.com/dantelarge',
    live: false,
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80',
    featured: false,
  },
]

const filters = [
  { label: 'All',        value: 'all'        },
  { label: 'AI',         value: 'ai'         },
  { label: 'Web',        value: 'web'        },
  { label: 'Data',       value: 'data'       },
  { label: 'Automation', value: 'automation' },
]

export function ProjectsSection() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? projects : projects.filter(p => p.category.includes(active))

  return (
    <section id="projects" className="py-28 border-t relative overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-teal-500/5 blur-[140px]" />

      <div className="mx-auto max-w-6xl px-6 relative">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-2">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What I&apos;ve Built</h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-md">
              {filtered.length} project{filtered.length !== 1 ? 's' : ''} — data dashboards, AI-powered apps, and full-stack web products shipped to production.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map(f => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  active === f.value
                    ? 'bg-teal-500 text-black border-teal-500 shadow-lg shadow-teal-500/25'
                    : 'text-muted-foreground border-border hover:border-teal-500/40 hover:text-foreground'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map(project => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block break-inside-avoid rounded-2xl overflow-hidden cursor-pointer"
              style={{
                boxShadow: '0 8px 40px rgba(0,0,0,0.4), 0 2px 10px rgba(0,0,0,0.25)',
              }}
            >
              {/* Image */}
              <div className={`relative w-full overflow-hidden ${project.featured ? 'h-72' : 'h-52'}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                {/* Teal shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/10 transition-all duration-500" />
              </div>

              {/* Floating card body */}
              <div className="relative bg-zinc-900/95 backdrop-blur-sm px-5 pt-4 pb-5 border border-white/5 group-hover:border-teal-500/20 transition-colors duration-300">

                {/* Title row */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-base leading-snug tracking-tight">{project.title}</h3>
                  <div className="flex items-center gap-2 shrink-0 mt-0.5">
                    {project.live && (
                      <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-emerald-300 bg-emerald-500/15 border border-emerald-500/25 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    )}
                    <ArrowUpRight className="size-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/55 text-xs leading-relaxed mb-3 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/8 border border-white/10 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom teal accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/0 to-transparent group-hover:via-teal-500/50 transition-all duration-500" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
