import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import { clientJourney, marketplaceFaq, steps, taskerJourney, trustStats } from '../data/siteContent'

function HowItWorksPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <AnimatedSection className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-black/40 sm:p-12">
        <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-14 bottom-0 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />
        <p className="relative text-sm font-semibold uppercase tracking-[0.16em] text-orange-300">How it works</p>
        <h1 className="relative mt-3 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
          A cleaner journey that turns visitors into bookings
        </h1>
        <p className="relative mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
          Same content, redesigned for clarity and confidence. Users instantly understand what to do next, whether
          they are posting a task or applying as a tasker.
        </p>
        <div className="relative mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-xl bg-orange-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300"
          >
            Post your first task
          </Link>
          <Link
            to="/"
            className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Explore homepage
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">Quick process</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">From idea to done in 3 steps</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="group rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-blue-300/40"
            >
              <p className="mb-4 text-4xl font-black text-blue-300/90">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12 grid gap-5 lg:grid-cols-2">
        <article className="rounded-3xl border border-emerald-300/20 bg-emerald-400/10 p-7">
          <div className="inline-flex rounded-full border border-emerald-200/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200">
            For clients
          </div>
          <h3 className="mt-4 text-2xl font-bold text-white">Simple path to hiring</h3>
          <ul className="mt-5 space-y-3">
            {clientJourney.map((item, index) => (
              <li key={item} className="flex gap-3 text-sm text-slate-100">
                <span className="mt-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-300/30 text-xs font-bold text-emerald-100">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-blue-300/20 bg-blue-400/10 p-7">
          <div className="inline-flex rounded-full border border-blue-200/30 bg-blue-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
            For taskers
          </div>
          <h3 className="mt-4 text-2xl font-bold text-white">Clear path to earning</h3>
          <ul className="mt-5 space-y-3">
            {taskerJourney.map((item, index) => (
              <li key={item} className="flex gap-3 text-sm text-slate-100">
                <span className="mt-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-300/30 text-xs font-bold text-blue-100">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </AnimatedSection>

      <AnimatedSection className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustStats.map((stat) => (
          <article key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900 p-5 text-center">
            <p className="text-3xl font-black text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
          </article>
        ))}
      </AnimatedSection>

      <AnimatedSection className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/20 via-slate-900 to-orange-500/20 p-8 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">Ready to start?</p>
            <h3 className="mt-2 text-3xl font-bold text-white">Turn this visit into your next completed task</h3>
            <p className="mt-3 max-w-xl text-sm text-slate-200">
              Strong social proof, transparent steps, and clear next actions help users convert without friction.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/browse"
              className="rounded-xl bg-orange-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300"
            >
              Browse tasks
            </Link>
            <Link
              to="/signup"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Sign up free
            </Link>
            <Link
              to="/about"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Learn more
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Fees & trust</p>
          <h3 className="mt-2 text-2xl font-bold text-white">Straight answers before you book</h3>
          <ul className="mt-6 space-y-4">
            {marketplaceFaq.slice(0, 3).map((item) => (
              <li key={item.q} className="rounded-2xl border border-white/5 bg-slate-950/50 p-4">
                <p className="font-semibold text-white">{item.q}</p>
                <p className="mt-2 text-sm text-slate-400">{item.a}</p>
              </li>
            ))}
          </ul>
          <Link to="/faq" className="mt-6 inline-block text-sm font-semibold text-blue-300 hover:text-blue-200">
            View full FAQ →
          </Link>
        </div>
        <div className="flex flex-col justify-between rounded-3xl border border-emerald-300/20 bg-emerald-500/10 p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-200">Taskers</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Looking for your next job?</h3>
            <p className="mt-3 text-sm text-slate-300">
              See real budgets and briefs, save tasks you like, and apply once your profile is ready.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/for-taskers"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              For taskers hub
            </Link>
            <Link
              to="/browse"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Browse marketplace
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}

export default HowItWorksPage
