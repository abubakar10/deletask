import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">404</p>
      <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Page not found</h1>
      <p className="mt-4 text-slate-300">This page does not exist yet. Let us take you back to Deletask.</p>
      <Link to="/" className="mt-8 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white">
        Go to home
      </Link>
    </main>
  )
}

export default NotFoundPage
