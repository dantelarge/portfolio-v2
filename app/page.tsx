import { HeroSection }    from '@/components/portfolio/hero'
import { ProjectsSection } from '@/components/portfolio/projects'
import { SkillsSection }   from '@/components/portfolio/skills'
import { AboutSection }    from '@/components/portfolio/about'
import { ContactSection }  from '@/components/portfolio/contact'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <footer className="border-t py-6">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between flex-wrap gap-4">
          <span className="text-sm text-muted-foreground">© 2025 Daniel Enantomhen</span>
          <div className="flex gap-6">
            <a href="https://github.com/dantelarge" target="_blank" rel="noopener noreferrer"
               className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/daniel-enantomhen-97259612b" target="_blank" rel="noopener noreferrer"
               className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            <a href="mailto:danielenantomhen@gmail.com"
               className="text-sm text-muted-foreground hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </>
  )
}
