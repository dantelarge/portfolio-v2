export function AboutSection() {
  return (
    <section id="about" className="py-24 border-t">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-2">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed text-[0.95rem]">
            <p>
              I&apos;m Daniel Enantomhen, an AI Developer and Data Analyst based in Abuja, Nigeria.
              I specialise in building production-ready AI tools, full-stack web applications, and
              data dashboards that solve real problems.
            </p>
            <p>
              With a background in Materials &amp; Production Engineering from Ambrose Alli University,
              I bring an analytical, systems-thinking approach to software. I use Claude Code and
              modern AI APIs daily to ship faster and smarter.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-4">Education</p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground text-sm">B.Eng. Materials &amp; Production Engineering</p>
                <p className="text-sm text-muted-foreground">Ambrose Alli University (AAU)</p>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Certified in R for Data Analysis</p>
                <p className="text-sm text-muted-foreground">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
