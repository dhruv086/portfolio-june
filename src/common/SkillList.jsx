import { motion } from 'framer-motion';

function SkillList({ src, skill }) {
  // Only animate on small screens
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 800;
  const MotionTag = isMobile ? motion.span : 'span';
  const motionProps = isMobile
    ? {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.5, ease: 'easeOut' },
      }
    : {};

  return (
    <MotionTag {...motionProps}>
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
    </MotionTag>
  );
}

export default SkillList;
