import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteContent'
import BrandLogo from './BrandLogo'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <BrandLogo />

        <nav className="hidden max-w-2xl flex-wrap items-center justify-end gap-x-2 gap-y-1 text-xs font-semibold md:flex lg:max-w-none lg:gap-x-3 lg:text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/login"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
          >
            Sign up
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-lg border border-white/20 px-3 py-2 text-sm text-slate-200 md:hidden"
        >
          Menu
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-200"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex gap-2">
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg border border-white/20 px-3 py-2 text-sm text-slate-200"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg bg-blue-500 px-3 py-2 text-sm font-semibold text-white"
              >
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
