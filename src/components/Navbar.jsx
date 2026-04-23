import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data/siteContent'
import BrandLogo from './BrandLogo'

function HamburgerIcon() {
  return (
    <span className="flex flex-col items-center justify-center gap-[5px]" aria-hidden>
      <span className="block h-0.5 w-[22px] rounded-full bg-white" />
      <span className="block h-0.5 w-[22px] rounded-full bg-white" />
      <span className="block h-0.5 w-[22px] rounded-full bg-white" />
    </span>
  )
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
      aria-hidden
    >
      <path
        d="M7 7L17 17M17 7L7 17"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-3.5">
        <BrandLogo className="shrink-0" />

        <nav className="hidden min-w-0 flex-1 md:block" aria-label="Main">
          <ul className="mx-auto flex max-w-4xl items-center justify-center gap-x-1 overflow-x-auto py-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-x-2 lg:gap-x-5 xl:gap-x-6 [&::-webkit-scrollbar]:hidden">
            {navLinks.map((link) => (
              <li key={link.to} className="shrink-0">
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-semibold transition sm:px-3 ${
                      isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 sm:gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-full px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white sm:px-4"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-full bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400 sm:px-4"
          >
            Sign up
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-white/25 hover:bg-white/10 active:scale-[0.97] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-slate-950 px-4 py-4 md:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                        isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-2 border-t border-white/10 pt-4">
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-lg border border-white/20 py-2.5 text-center text-sm font-semibold text-slate-200 hover:bg-white/5"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-lg bg-blue-500 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-400"
              >
                Sign up
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
