import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-slate-400 sm:flex-row sm:px-6">
        <p>© 2026 Deletask. All rights reserved.</p>
        <div className="flex max-w-xl flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/browse" className="hover:text-white">Browse tasks</Link>
          <Link to="/how-it-works" className="hover:text-white">How it works</Link>
          <Link to="/for-taskers" className="hover:text-white">For taskers</Link>
          <Link to="/about" className="hover:text-white">About us</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
          <Link to="/faq" className="hover:text-white">FAQ</Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms and conditions</a>
          <a href="#" className="hover:text-white">Cancellation policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
