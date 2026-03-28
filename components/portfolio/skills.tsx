const skillGroups = [
  {
    label: 'AI & APIs',
    skills: ['Claude API', 'Claude Code', 'Google Gemini', 'Anthropic SDK', 'AI Agents', 'Prompt Engineering'],
  },
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'Node.js', 'Express.js', 'R', 'HTML / CSS', 'SQL'],
  },
  {
    label: 'Data & Analytics',
    skills: ['Streamlit', 'Power BI', 'Excel Power Query', 'ggplot2', 'tidyverse', 'DAX', 'Time Series Analysis'],
  },
  {
    label: 'DevOps & Cloud',
    skills: ['Render', 'GitHub', 'Cloudinary', 'Paystack', 'REST APIs', 'PWA'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills &amp; Tools</h2>
        </div>
        <div className="space-y-6">
          {skillGroups.map(group => (
            <div key={group.label} className="flex flex-col sm:flex-row sm:items-start gap-3">
              <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap min-w-[9rem] pt-0.5">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="text-sm px-3 py-1 rounded-full border border-border bg-background text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
