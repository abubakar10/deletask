import { Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function PageLayout() {
  const location = useLocation()
  const MotionPage = motion.div

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <AnimatePresence mode="wait">
        <MotionPage
          key={location.pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.28 }}
        >
          <Outlet />
        </MotionPage>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default PageLayout
