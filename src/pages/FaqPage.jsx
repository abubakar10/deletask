import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import { faqPageItems } from '../data/siteContent'

function FaqPage() {
  const [openId, setOpenId] = useState(0)

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <AnimatedSection>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-300">FAQ</p>
        <h1 className="mt-2 text-4xl font-black text-white sm:text-5xl">Marketplace questions, answered</h1>
        <p className="mt-4 text-slate-400">
          Straight answers about payments, trust, and how to get the most out of Deletask—as a client or a tasker.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mt-10 space-y-3">
        {faqPageItems.map((item, index) => {
          const isOpen = openId === index
          return (
            <div key={item.q} className="rounded-2xl border border-white/10 bg-slate-900/80">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white sm:text-base"
                aria-expanded={isOpen}
              >
                {item.q}
                <span className="shrink-0 text-slate-500">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className="border-t border-white/10 px-5 pb-4 pt-2 text-sm leading-relaxed text-slate-300">{item.a}</p>}
            </div>
          )
        })}
      </AnimatedSection>

      <AnimatedSection className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900 to-slate-950 p-6 text-center">
        <p className="text-sm text-slate-400">Still stuck?</p>
        <Link to="/contact" className="mt-2 inline-block text-base font-semibold text-blue-300 hover:text-blue-200">
          Contact the team →
        </Link>
      </AnimatedSection>
    </main>
  )
}

export default FaqPage
