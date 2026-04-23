import { Link } from 'react-router-dom'
import BrandLogo from '../BrandLogo'
import { loginHighlights, signupHighlights } from '../../data/authContent'

function AuthTwoColumnLayout({ mode, children }) {
  const isSignup = mode === 'signup'
  const highlights = isSignup ? signupHighlights : loginHighlights

  return (
    <main className="overflow-x-hidden px-4 py-6 sm:px-6 sm:py-10 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">
          <div className="grid min-h-0 min-w-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:items-stretch">
            <aside className="relative order-2 flex h-full min-h-0 min-w-0 flex-col bg-gradient-to-br from-blue-600/25 via-slate-900 to-orange-500/20 p-8 sm:p-10 lg:order-none">
              <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 left-0 h-40 w-40 rounded-full bg-orange-400/15 blur-3xl" />
              <div className="relative z-10 flex h-full min-h-0 flex-col">
                <BrandLogo className="text-3xl" />
                <h1 className="mt-8 text-3xl font-black leading-tight text-white sm:text-4xl">
                  {isSignup ? 'Join thousands getting things done' : 'Welcome back to Deletask'}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                  {isSignup
                    ? 'Create your account to post tasks, compare offers, and book trusted taskers.'
                    : 'Sign in to manage tasks, messages, and payments in one place.'}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {highlights.map((line) => (
                    <li key={line} className="flex gap-3 text-sm text-slate-200">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-bold text-emerald-300">
                        ✓
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="relative z-10 mt-8 text-xs text-slate-500 lg:mt-auto lg:pt-8">
                  By continuing you agree to our terms and privacy practices.
                </p>
              </div>
            </aside>

            <section className="order-1 flex h-full min-h-0 min-w-0 flex-col border-b border-white/10 bg-slate-950/80 p-6 sm:p-10 lg:order-none lg:border-b-0 lg:border-l lg:border-t-0">
              <div className="mb-6 shrink-0">
                <Link
                  to="/"
                  className="text-sm font-semibold text-slate-400 transition hover:text-white"
                >
                  ← Back to home
                </Link>
              </div>
              <div className="min-w-0">{children}</div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AuthTwoColumnLayout
