import AnimatedSection from '../components/AnimatedSection'
import { aboutBlocks, aboutTeam, companyTimeline, impactStats, valuePillars } from '../data/siteContent'

function AboutPage() {
  return (
    <main>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <AnimatedSection className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/20 via-slate-900 to-purple-500/20 p-8 sm:p-12">
          <div className="absolute left-6 top-6 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
          <p className="relative text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">About us</p>
          <h1 className="relative mt-2 max-w-3xl text-4xl font-black text-white sm:text-5xl">Built to help people move faster</h1>
          <p className="relative mt-4 max-w-2xl text-slate-200">
            Deletask combines service discovery, trusted taskers, and clean communication in one modern experience.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-10 grid gap-4 md:grid-cols-3">
          {valuePillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <h2 className="text-xl font-bold text-white">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{pillar.text}</p>
            </article>
          ))}
        </AnimatedSection>

        <div className="mt-10 space-y-6">
          {aboutBlocks.map((block) => (
            <AnimatedSection
              key={block.heading}
              className="rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900 to-slate-900/80 p-6 shadow-lg shadow-black/20"
            >
              <h2 className="text-2xl font-bold text-white">{block.heading}</h2>
              <p className="mt-3 leading-7 text-slate-300">{block.text}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 rounded-3xl border border-emerald-300/20 bg-emerald-500/10 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-200">Our journey</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {companyTimeline.map((milestone) => (
              <article key={milestone.year} className="rounded-2xl border border-emerald-200/20 bg-slate-950/50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-300">{milestone.year}</p>
                <p className="mt-2 text-sm text-slate-200">{milestone.text}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-10 grid gap-4 sm:grid-cols-3">
          {impactStats.map((row) => (
            <article key={row.label} className="rounded-2xl border border-white/10 bg-slate-900 p-6 text-center">
              <p className="text-3xl font-black text-white">{row.value}</p>
              <p className="mt-2 text-sm text-slate-400">{row.label}</p>
            </article>
          ))}
        </AnimatedSection>

        <AnimatedSection className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">Team</p>
          <h2 className="mt-2 text-3xl font-bold text-white">People behind the marketplace</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {aboutTeam.map((person) => (
              <article key={person.name} className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
                <p className="text-lg font-semibold text-white">{person.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-blue-300">{person.role}</p>
                <p className="mt-3 text-sm text-slate-400">{person.blurb}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}

export default AboutPage
