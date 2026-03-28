'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Menu, X, MapPin, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'

const navItems = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills',   href: '#skills'   },
  { name: 'About',    href: '#about'    },
  { name: 'Contact',  href: '#contact'  },
]

function HeroNav() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      <nav data-state={menuOpen ? 'active' : undefined} className="fixed z-50 w-full px-4 group">
        <div className={cn(
          'mx-auto mt-3 max-w-6xl px-6 transition-all duration-300',
          isScrolled ? 'bg-black/60 rounded-2xl border border-white/10 backdrop-blur-xl' : ''
        )}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/" className="font-black text-xl tracking-tight text-white">
                dantelarge
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-white"
              >
                <Menu className="group-data-[state=active]:hidden m-auto size-6" />
                <X className="group-data-[state=active]:block hidden absolute inset-0 m-auto size-6" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {navItems.map(item => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-white/70 hover:text-white block duration-150">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex items-center">
              <Button asChild size="sm" className="rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-semibold">
                <Link href="#contact">Hire Me +</Link>
              </Button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
              <div className="w-full pb-4 lg:hidden">
                <ul className="flex flex-col gap-3">
                  {navItems.map(item => (
                    <li key={item.name}>
                      <Link href={item.href} onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white block py-2 duration-150">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button asChild size="sm" className="mt-4 w-full rounded-lg bg-teal-500 text-black font-semibold">
                  <Link href="#contact">Hire Me +</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export function HeroSection() {
  return (
    <>
      <HeroNav />

      <main className="relative min-h-screen overflow-hidden">

        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        {/* Content — always visible, no opacity animations */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24 lg:pt-44">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* LEFT: Text */}
            <div className="flex-1 text-center lg:text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                Available for hire
              </div>

              {/* Name */}
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tight leading-tight mb-4">
                Daniel<br />
                <span className="text-teal-400">Enantomhen</span>
              </h1>

              {/* Role chips */}
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-5 flex-wrap">
                <span className="flex items-center gap-1.5 text-sm text-white/80 bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                  <Briefcase className="size-3.5 text-teal-400" /> AI Developer
                </span>
                <span className="flex items-center gap-1.5 text-sm text-white/80 bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                  <Briefcase className="size-3.5 text-indigo-400" /> Data Analyst
                </span>
                <span className="flex items-center gap-1.5 text-sm text-white/80 bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                  <MapPin className="size-3.5 text-rose-400" /> Abuja, Nigeria
                </span>
              </div>

              {/* Tagline */}
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
                I build smart, production-ready tools — from AI-powered apps and
                dashboards to full-stack web products — using Claude Code and modern AI APIs.
              </p>

              {/* CTA */}
              <div className="flex items-center gap-3 justify-center lg:justify-start flex-wrap mb-14">
                <Button asChild size="lg" className="rounded-xl bg-teal-500 hover:bg-teal-400 text-black font-bold px-6 shadow-lg shadow-teal-500/30">
                  <Link href="#projects" className="flex items-center gap-2">
                    View Projects <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="rounded-xl px-6 text-white hover:text-white border border-white/20 hover:bg-white/10">
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start border-t border-white/15 pt-8">
                {[
                  { num: '9+', label: 'Projects' },
                  { num: '4',  label: 'Live apps' },
                  { num: '6+', label: 'AI tools'  },
                  { num: '3',  label: 'Industries' },
                ].map((stat, i) => (
                  <React.Fragment key={stat.label}>
                    {i > 0 && <div className="mx-6 h-8 w-px bg-white/15 shrink-0" />}
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-black text-white tracking-tight">{stat.num}</div>
                      <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* RIGHT: Profile photo + stat cards */}
            <div className="flex flex-col items-center gap-6">

              {/* Profile photo with spinning ring */}
              <div className="relative">
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-teal-400 via-cyan-300 to-indigo-500 opacity-80 blur-sm animate-spin" style={{ animationDuration: '8s' }} />
                <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-white/30">
                  <Image
                    src="/profile.jpeg"
                    alt="Daniel Enantomhen"
                    fill
                    sizes="(max-width: 768px) 160px, 208px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-teal-400 border-2 border-black shadow-lg" />
              </div>

              {/* Name under photo */}
              <div className="text-center">
                <p className="text-white font-bold text-lg tracking-tight">Daniel Enantomhen</p>
                <p className="text-teal-400 text-sm font-medium">@dantelarge</p>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-2 gap-3 w-64">
                {[
                  { label: 'Projects', value: '9+',  color: 'border-teal-500/30',   text: 'text-teal-400'   },
                  { label: 'Live Apps', value: '4',  color: 'border-green-500/30',  text: 'text-green-400'  },
                  { label: 'AI Tools',  value: '6+', color: 'border-indigo-500/30', text: 'text-indigo-400' },
                  { label: 'Industries',value: '3',  color: 'border-cyan-500/30',   text: 'text-cyan-400'   },
                ].map(card => (
                  <div key={card.label} className={`rounded-xl bg-black/50 backdrop-blur-md border ${card.color} px-4 py-3 text-center`}>
                    <div className={`text-2xl font-black ${card.text} leading-none mb-0.5`}>{card.value}</div>
                    <div className="text-[11px] text-white/60">{card.label}</div>
                  </div>
                ))}
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 justify-center max-w-xs">
                {['Claude API', 'Node.js', 'Python', 'Power BI', 'Streamlit'].map(skill => (
                  <span key={skill} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/70">
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </main>
    </>
  )
}
