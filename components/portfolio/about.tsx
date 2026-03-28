const highlights = [
  { icon: '🎓', text: 'B.Eng. Materials & Production Engineering — Ambrose Alli University (2nd Class Upper, 2016)' },
  { icon: '📜', text: 'Certified in R for Data Analysis — Bizzmarrow Technologies (2024)' },
  { icon: '📍', text: 'Kubwa, Abuja, Nigeria — Open to remote & international work' },
  { icon: '📊', text: 'Power BI · R · Excel — Building dashboards & data-driven reports' },
  { icon: '🤖', text: 'AI Developer — Claude Code, Node.js, Python, full-stack apps' },
  { icon: '⚡', text: 'Ships ideas to production in days' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 border-t">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-2">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Bio */}
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed text-[0.95rem]">
            <p>
              I&apos;m <strong className="text-foreground">Daniel Enantomhen</strong> — a certified Data Analyst and AI Developer
              based in Abuja, Nigeria. I have hands-on experience analysing and visualising data using
              R, Microsoft Power BI, and Excel, and I build production-ready AI tools and full-stack
              web applications using Claude Code and modern AI APIs.
            </p>
            <p>
              My analytics work spans dashboard development, KPI definition, statistical analysis,
              time series analysis, and data visualisation — transforming complex datasets into clear,
              actionable business insights. I&apos;ve built interactive Power BI dashboards tracking revenue
              performance, activation rates, and manager-level KPIs, as well as R-based regression and
              economic analyses on multi-decade datasets.
            </p>
            <p>
              With a background in Materials &amp; Production Engineering from Ambrose Alli University,
              I bring an engineering mindset — precise, systematic, and built to last — to every
              data and software project I take on.
            </p>

            {/* Core competencies */}
            <div className="pt-4">
              <p className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-3">Core Competencies</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Dashboard Development', 'KPI Definition', 'Data Cleaning & Transformation',
                  'Statistical Analysis', 'Time Series Analysis', 'Data Visualisation',
                  'Power BI (DAX)', 'R (tidyverse, ggplot2)', 'Excel (Pivot Tables, Power Query)',
                  'Insight Generation', 'Data Documentation & Reporting',
                ].map(skill => (
                  <span key={skill} className="text-xs px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/5 text-teal-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-4">At a Glance</p>
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl px-4 py-3 text-sm">
                <span className="text-base shrink-0 mt-0.5">{item.icon}</span>
                <span className="text-muted-foreground leading-snug">{item.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
