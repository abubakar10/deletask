import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

function PageLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PageLayout
