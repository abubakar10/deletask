import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'

const topics = [
  { value: 'general', label: 'General question' },
  { value: 'client', label: 'I want to post a task' },
  { value: 'tasker', label: 'I am a tasker' },
  { value: 'billing', label: 'Billing or payouts' },
  { value: 'press', label: 'Press or partnership' },
]

function ContactPage() {
  const [topic, setTopic] = useState('general')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', text: 'Please fill in name, email, and message.' })
      return
    }
    setStatus({ type: 'success', text: 'Thanks—your message is recorded for this demo. We would email you within 24h in production.' })
    setMessage('')
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <AnimatedSection className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/25 via-slate-900 to-blue-500/20 p-8 sm:p-12">
        <div className="absolute -right-10 top-4 h-44 w-44 rounded-full bg-orange-300/20 blur-3xl" />
        <p className="relative text-sm font-semibold uppercase tracking-[0.14em] text-orange-200">Contact us</p>
        <h1 className="relative mt-2 text-4xl font-black text-white sm:text-5xl">Let us build this for you</h1>
        <p className="relative mt-4 max-w-2xl text-slate-200">
          Have a question, feedback, or something you would like to share? Pick a topic so the right person can reply faster.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mt-10 grid gap-4 sm:grid-cols-3">
        <article className="rounded-2xl border border-white/10 bg-slate-900 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">Response time</p>
          <p className="mt-2 text-3xl font-black text-white">~24h</p>
          <p className="mt-1 text-sm text-slate-400">Most requests receive an answer within one business day.</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-slate-900 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">Support type</p>
          <p className="mt-2 text-3xl font-black text-white">Human</p>
          <p className="mt-1 text-sm text-slate-400">Real people for marketplace onboarding, disputes, and partnerships.</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-slate-900 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">Self-serve</p>
          <p className="mt-2 text-3xl font-black text-white">FAQ</p>
          <p className="mt-1 text-sm text-slate-400">
            <Link to="/faq" className="font-semibold text-blue-300 hover:text-blue-200">
              Browse answers →
            </Link>
          </p>
        </article>
      </AnimatedSection>

      <AnimatedSection className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold text-white">Quick contact</h2>
          <p className="mt-3 text-sm text-slate-300">
            Email:{' '}
            <a href="mailto:hello@deletask.fi" className="font-semibold text-blue-300">
              hello@deletask.fi
            </a>
          </p>
          <p className="mt-2 text-sm text-slate-400">We usually respond within 24 hours.</p>
          <div className="mt-6 rounded-xl border border-blue-300/20 bg-blue-500/10 p-4">
            <p className="text-sm text-blue-100">Include your city, role (client or tasker), and a link to any task if relevant.</p>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-400">
            <p>
              <span className="font-semibold text-slate-300">Mon–Fri</span> · 9:00–17:00 EET
            </p>
            <p>
              <span className="font-semibold text-slate-300">Escalations</span> · Same day for safety issues
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold text-white">Send a message</h2>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact-topic" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Topic
              </label>
              <select
                id="contact-topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="auth-field w-full rounded-xl px-4 py-2.5 text-sm"
              >
                {topics.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Name
              </label>
              <input
                id="contact-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="auth-field w-full rounded-xl px-4 py-2.5 text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-field w-full rounded-xl px-4 py-2.5 text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="auth-field w-full resize-y rounded-xl px-4 py-2.5 text-sm"
                placeholder="What can we help with?"
              />
            </div>
            {status && (
              <p
                className={`rounded-xl px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'border border-emerald-400/30 bg-emerald-500/10 text-emerald-100'
                    : 'border border-rose-400/30 bg-rose-500/10 text-rose-100'
                }`}
              >
                {status.text}
              </p>
            )}
            <button
              type="submit"
              className="w-full rounded-xl bg-orange-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300 sm:w-auto"
            >
              Send message
            </button>
          </form>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-10 rounded-3xl border border-emerald-300/20 bg-gradient-to-r from-emerald-500/15 via-slate-900 to-blue-500/15 p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-200">Explore first</p>
        <h3 className="mt-2 text-3xl font-bold text-white">See live tasks before you write to us</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-200">
          Many answers are already in the marketplace feed and FAQ—browse there, then reach out with specifics.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/browse" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-200">
            Browse tasks
          </Link>
          <Link to="/faq" className="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
            Open FAQ
          </Link>
        </div>
      </AnimatedSection>
    </main>
  )
}

export default ContactPage
