const links = [
  { icon: '✉',  label: 'danielenantomhen@gmail.com', href: 'mailto:danielenantomhen@gmail.com', external: false },
  { icon: '💬', label: 'WhatsApp',  href: 'https://wa.me/2348160630956',                         external: true  },
  { icon: '⌥',  label: 'GitHub',    href: 'https://github.com/dantelarge',                        external: true  },
  { icon: 'in', label: 'LinkedIn',  href: 'https://linkedin.com/in/daniel-enantomhen-97259612b',  external: true  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-2">Let&apos;s Work</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Get in Touch</h2>
          <p className="text-muted-foreground max-w-md text-[0.95rem]">
            Available for freelance projects, AI integrations, and data work. Reach out via any channel below.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border bg-background hover:border-foreground/30 hover:bg-accent transition-all text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <span className="text-base leading-none">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
