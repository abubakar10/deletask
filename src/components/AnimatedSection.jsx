import { motion } from 'framer-motion'

function AnimatedSection({ children, className = '' }) {
  const MotionSection = motion.section

  return (
    <MotionSection
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </MotionSection>
  )
}

export default AnimatedSection
