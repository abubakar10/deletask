import { motion } from 'framer-motion'

function AnimatedSection({ children, className = '' }) {
  const MotionSection = motion.section

  return (
    <MotionSection
      initial={{ y: 18 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: '0px 0px 160px 0px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </MotionSection>
  )
}

export default AnimatedSection
