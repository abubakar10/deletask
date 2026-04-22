import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { browseCategories, browseTasks } from '../data/siteContent'
import { useSavedTaskIds } from '../hooks/useSavedTaskIds'

function BrowseTasksPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('newest')
  const [activeId, setActiveId] = useState(null)
  const { toggle, isSaved, savedCount } = useSavedTaskIds()
  const MotionArticle = motion.article

  const filtered = useMemo(() => {
    let list = [...browseTasks]
    if (category !== 'all') {
      list = list.filter((t) => t.category === category)
    }
    const q = query.trim().toLowerCase()
    if (q) {
      list = list.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.summary.toLowerCase().includes(q) ||
          t.location.toLowerCase().includes(q),
      )
    }
    if (sort === 'budget-asc') {
      list.sort((a, b) => {
        const na = parseInt(a.budget.replace(/\D/g, ''), 10) || 0
        const nb = parseInt(b.budget.replace(/\D/g, ''), 10) || 0
        return na - nb
      })
    }
    return list
  }, [query, category, sort])

  const activeTask = activeId ? browseTasks.find((t) => t.id === activeId) : null

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <AnimatedSection className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-slate-900 to-orange-500/15 p-8 sm:p-10">
        <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
        <p className="relative text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">Marketplace</p>
        <h1 className="relative mt-2 text-4xl font-black text-white sm:text-5xl">Browse open tasks</h1>
        <p className="relative mt-4 max-w-2xl text-slate-300">
          Filter by category, search by keyword, save tasks you like, and preview details before you sign in to apply.
        </p>
        <div className="relative mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
            Saved: <strong className="text-white">{savedCount}</strong>
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
            Showing: <strong className="text-white">{filtered.length}</strong>
          </span>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-10 space-y-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 flex-1">
            <label htmlFor="task-search" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Search
            </label>
            <input
              id="task-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try “drone”, “Helsinki”, or “clean”…"
              className="auth-field mt-2 w-full max-w-xl rounded-xl px-4 py-3 text-sm"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Sort
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="auth-field ml-2 rounded-lg px-3 py-2 text-sm"
              >
                <option value="newest">Newest listed</option>
                <option value="budget-asc">Budget (low first)</option>
              </select>
            </label>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {browseCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                category === cat.id
                  ? 'bg-orange-400 text-slate-950'
                  : 'border border-white/15 bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-6 grid gap-4 sm:grid-cols-2">
        {filtered.map((task) => (
          <MotionArticle
            key={task.id}
            layout
            className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/90 p-5"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-blue-200">{task.category}</p>
                <h2 className="mt-1 text-lg font-semibold text-white">{task.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => toggle(task.id)}
                aria-label={isSaved(task.id) ? 'Remove from saved' : 'Save task'}
                className={`shrink-0 rounded-full border px-2.5 py-1 text-sm transition ${
                  isSaved(task.id)
                    ? 'border-orange-400/60 bg-orange-400/15 text-orange-200'
                    : 'border-white/15 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {isSaved(task.id) ? '♥' : '♡'}
              </button>
            </div>
            <p className="mt-2 text-sm text-slate-400">{task.summary}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
              <span>{task.location}</span>
              <span>{task.posted}</span>
              <span>{task.applicants} applicants</span>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4">
              <p className="text-sm font-semibold text-emerald-300">{task.budget}</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveId(task.id)}
                  className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10"
                >
                  Details
                </button>
                <Link
                  to="/signup"
                  className="rounded-lg bg-blue-500 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-400"
                >
                  Apply
                </Link>
              </div>
            </div>
          </MotionArticle>
        ))}
      </AnimatedSection>

      {filtered.length === 0 && (
        <p className="mt-8 rounded-2xl border border-white/10 bg-slate-900 p-6 text-center text-slate-400">
          No tasks match your filters. Clear search or pick <strong className="text-white">All</strong>.
        </p>
      )}

      {activeTask && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="task-detail-title"
          onClick={() => setActiveId(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-blue-200">{activeTask.category}</p>
                <h2 id="task-detail-title" className="mt-1 text-xl font-bold text-white">
                  {activeTask.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="rounded-lg border border-white/15 px-2 py-1 text-slate-300 hover:bg-white/10"
              >
                Close
              </button>
            </div>
            <p className="mt-4 text-sm text-slate-300">{activeTask.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <span className="text-slate-500">Where:</span> {activeTask.location}
              </li>
              <li>
                <span className="text-slate-500">Posted:</span> {activeTask.posted}
              </li>
              <li>
                <span className="text-slate-500">Budget:</span>{' '}
                <span className="font-semibold text-emerald-300">{activeTask.budget}</span>
              </li>
              <li>
                <span className="text-slate-500">Applicants:</span> {activeTask.applicants}
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => toggle(activeTask.id)}
                className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                {isSaved(activeTask.id) ? 'Saved' : 'Save task'}
              </button>
              <Link
                to="/signup"
                className="rounded-xl bg-orange-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-orange-300"
              >
                Sign up to apply
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default BrowseTasksPage
