import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import { forTaskersPerks, steps, trustStats } from '../data/siteContent'

function ForTaskersPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <AnimatedSection className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/15 via-slate-900 to-blue-500/15 p-8 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-200">For taskers</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-black text-white sm:text-5xl">Earn on your terms with a steady stream of real jobs</h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          Deletask is built like a freelance marketplace: clear briefs, competitive offers, and payouts you can trust.
          Build your reputation here and grow repeat clients over time.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/signup"
            className="rounded-xl bg-orange-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300"
          >
            Create tasker profile
          </Link>
          <Link
            to="/browse"
            className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Preview open tasks
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustStats.map((stat) => (
          <article key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900 p-5 text-center">
            <p className="text-3xl font-black text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
          </article>
        ))}
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">Why taskers stay</p>
        <h2 className="mt-2 text-3xl font-bold text-white">Built for serious providers</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {forTaskersPerks.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12 rounded-3xl border border-white/10 bg-slate-900/60 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-200">How you get paid</p>
        <h2 className="mt-2 text-2xl font-bold text-white">From offer to payout in three moves</h2>
        <ol className="mt-6 space-y-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-200">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-white">{step.title}</p>
                <p className="mt-1 text-sm text-slate-400">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </AnimatedSection>

      <AnimatedSection className="mt-12 rounded-3xl border border-blue-300/20 bg-blue-500/10 p-8 text-center">
        <h2 className="text-2xl font-bold text-white">Questions before you join?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
          Read the FAQ for fees, cancellations, and verification—or talk to us directly.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/faq" className="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
            Open FAQ
          </Link>
          <Link to="/contact" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-200">
            Contact support
          </Link>
        </div>
      </AnimatedSection>
    </main>
  )
}

export default ForTaskersPage
