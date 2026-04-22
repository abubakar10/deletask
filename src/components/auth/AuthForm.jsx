import { Link } from 'react-router-dom'
import { authFieldClass } from '../../data/authContent'

function AuthForm({ mode }) {
  const isSignup = mode === 'signup'
  const id = (name) => `${mode}-${name}`

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-300/90">
        {isSignup ? 'New account' : 'Account access'}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
        {isSignup ? 'Create your account' : 'Log in to Deletask'}
      </h2>
      <p className="mt-2 max-w-md text-sm text-slate-400">
        {isSignup
          ? 'A few details and you are ready to post or apply.'
          : 'Use your email and password to continue.'}
      </p>

      <form className="mt-8 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        {isSignup && (
          <div>
            <label htmlFor={id('full-name')} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Full name
            </label>
            <input
              id={id('full-name')}
              type="text"
              autoComplete="name"
              placeholder="Your name"
              className={authFieldClass}
            />
          </div>
        )}

        <div>
          <label htmlFor={id('email')} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
            Email
          </label>
          <input
            id={id('email')}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={authFieldClass}
          />
        </div>

        <div>
          <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
            <label htmlFor={id('password')} className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Password
            </label>
            {!isSignup && (
              <button type="button" className="text-xs font-semibold text-blue-400 hover:text-blue-300">
                Forgot password?
              </button>
            )}
          </div>
          <input
            id={id('password')}
            type="password"
            autoComplete={isSignup ? 'new-password' : 'current-password'}
            placeholder="••••••••"
            className={authFieldClass}
          />
        </div>

        {isSignup && (
          <div>
            <label htmlFor={id('password-confirm')} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Confirm password
            </label>
            <input
              id={id('password-confirm')}
              type="password"
              autoComplete="new-password"
              placeholder="Repeat password"
              className={authFieldClass}
            />
          </div>
        )}

        {!isSignup && (
          <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              className="size-4 rounded border border-white/20 bg-slate-950 text-blue-500 focus:ring-blue-500/40"
            />
            Keep me signed in on this device
          </label>
        )}

        {isSignup && (
          <div className="space-y-2.5 rounded-xl border border-white/10 bg-slate-900/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Legal</p>
            <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-300">
              <input type="checkbox" className="mt-0.5 size-4 shrink-0 rounded border border-white/20 bg-slate-950" />
              <span>I agree to the terms and conditions</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-300">
              <input type="checkbox" className="mt-0.5 size-4 shrink-0 rounded border border-white/20 bg-slate-950" />
              <span>I agree to the cancellation and dispute policy</span>
            </label>
          </div>
        )}

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center" aria-hidden>
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-wider text-slate-500">
            <span className="bg-slate-950/95 px-3">Or</span>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <button
            type="button"
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-3 text-xs font-semibold text-slate-300 transition hover:bg-white/10"
          >
            Continue with Google
          </button>
          <button
            type="button"
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-3 text-xs font-semibold text-slate-300 transition hover:bg-white/10"
          >
            Continue with Apple
          </button>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            {isSignup ? 'Already have an account?' : 'New to Deletask?'}{' '}
            <Link to={isSignup ? '/login' : '/signup'} className="font-semibold text-blue-400 hover:text-blue-300">
              {isSignup ? 'Log in' : 'Sign up'}
            </Link>
          </p>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-transparent px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-orange-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition hover:bg-orange-300"
            >
              {isSignup ? 'Create account' : 'Log in'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AuthForm
