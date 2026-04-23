import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import clientPortrait from '../assets/Client Image.png'
import taskerPortrait from '../assets/Tasker Story.png'
import {
  browseTasks,
  homeCategories,
  popularTasks,
  reviews,
  trustStats,
  userStoriesIntro,
  userStoryCards,
  valuePillars,
} from '../data/siteContent'

function HomePage() {
  const MotionDiv = motion.div
  const MotionArticle = motion.article

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 inline-flex rounded-full border border-blue-300/30 bg-blue-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">
              One platform. Endless possibilities.
            </p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
              Find a tasker for anything, really
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Deletask connects clients with rated taskers, digital professionals, and rental providers.
              Faster booking, clearer pricing, and better outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/browse"
                className="rounded-xl bg-orange-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300"
              >
                Browse open tasks
              </Link>
              <Link
                to="/how-it-works"
                className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                How it works
              </Link>
              <Link
                to="/for-taskers"
                className="rounded-xl border border-blue-400/40 bg-blue-500/15 px-5 py-3 text-sm font-semibold text-blue-100 transition hover:bg-blue-500/25"
              >
                Earn as a tasker
              </Link>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="rounded-3xl border border-white/15 bg-slate-900/70 p-6 shadow-2xl shadow-black/40"
          >
            <h2 className="text-xl font-bold text-white">Live opportunities now</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {popularTasks.slice(0, 4).map((task) => (
                <article key={task.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-widest text-blue-200">{task.tag}</p>
                  <h3 className="mt-2 font-semibold text-white">{task.title}</h3>
                  <p className="text-sm text-slate-300">{task.price}</p>
                  <p className="mt-1 text-xs text-slate-400">{task.eta}</p>
                </article>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-10 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">Live marketplace</p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">See what clients are posting right now</h2>
              <p className="mt-2 max-w-xl text-sm text-slate-400">
                Real briefs, budgets, and locations—filter by category and save tasks while you decide.
              </p>
            </div>
            <Link
              to="/browse"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Open task feed
            </Link>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {browseTasks.slice(0, 3).map((task) => (
              <article key={task.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-widest text-blue-200">{task.category}</p>
                <h3 className="mt-2 text-sm font-semibold text-white">{task.title}</h3>
                <p className="mt-2 text-xs text-slate-500">{task.location} · {task.posted}</p>
                <p className="mt-2 text-sm font-semibold text-emerald-300">{task.budget}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900 p-5 text-center">
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">Popular tasks</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Most requested services this week</h2>
          </div>
          <Link to="/contact" className="hidden rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 sm:inline-flex">
            Need something else?
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularTasks.map((task) => (
            <MotionArticle
              key={task.title}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-slate-900 p-5"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{task.tag}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{task.title}</h3>
              <p className="text-sm text-slate-300">{task.price}</p>
              <p className="mt-1 text-xs text-slate-500">{task.eta}</p>
            </MotionArticle>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">Categories</p>
        <h2 className="mt-2 text-3xl font-bold text-white">Hire across physical, digital, and rental work</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {homeCategories.map((cat) => (
            <article key={cat.title} className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{cat.tag}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{cat.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{cat.desc}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-purple-100">
            <span className="text-base text-orange-300" aria-hidden>
              ★
            </span>
            {userStoriesIntro.hint}
          </p>
          <p className="mt-3 text-sm italic text-slate-500">{userStoriesIntro.disclaimer}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {userStoryCards.map((story) => {
            const imageSrc = story.id === 'client' ? clientPortrait : taskerPortrait
            return (
              <article
                key={story.id}
                className={`flex flex-col overflow-hidden rounded-3xl border bg-slate-900/60 p-6 shadow-lg shadow-black/20 sm:p-8 ${story.borderClass}`}
              >
                <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50">
                  <img
                    src={imageSrc}
                    alt={story.id === 'client' ? 'Samir N, Deletask client' : 'Markus V, chef and Deletask tasker'}
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{story.title}</h3>
                <div className="mt-4 space-y-3 text-left text-sm leading-relaxed text-slate-300">
                  {story.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <blockquote className="mt-5 border-l-2 border-white/15 pl-4 text-left text-sm italic text-slate-200">
                  “{story.quote}”
                </blockquote>
                <p className="mt-4 text-left text-sm font-medium text-slate-400">{story.signature}</p>
              </article>
            )
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-white">{review.name}</p>
                <p className="text-xs uppercase text-slate-400">{review.role}</p>
              </div>
              <p className="mt-4 text-sm text-slate-300">{review.text}</p>
              <p className="mt-4 text-amber-300">★★★★★</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-blue-300/20 bg-gradient-to-br from-blue-500/20 via-slate-900 to-purple-500/20 p-8">
            <div className="absolute -top-12 right-6 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
            <p className="relative text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">Why users choose us</p>
            <h2 className="relative mt-3 text-3xl font-bold text-white sm:text-4xl">Built to convert interest into action</h2>
            <p className="relative mt-4 max-w-xl text-slate-200">
              The platform design removes guesswork with clear steps, trust signals, and fast booking decisions.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Link
                to="/how-it-works"
                className="rounded-xl bg-orange-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300"
              >
                See full process
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact team
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {valuePillars.map((pillar) => (
              <MotionArticle
                key={pillar.title}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-slate-900/90 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{pillar.text}</p>
              </MotionArticle>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-orange-500/20 via-slate-900 to-blue-500/20 p-8 text-center sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-200">Ready today</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Post your first task in under a minute</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Designed for speed and clarity so users can move from idea to completed task without friction.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/signup"
              className="rounded-xl bg-orange-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300"
            >
              Create free account
            </Link>
            <Link
              to="/browse"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Browse tasks
            </Link>
            <Link
              to="/about"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              About Deletask
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}

export default HomePage
