import { Link } from 'react-router-dom'

function BrandLogo({ className = '', onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`inline-block text-2xl font-bold tracking-tight text-white transition hover:opacity-90 ${className}`}
    >
      <span className="text-orange-400">Dele</span>
      <span className="text-blue-400">task</span>
    </Link>
  )
}

export default BrandLogo
