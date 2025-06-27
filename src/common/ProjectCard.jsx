import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ src, link, h3, p }) {
  // Only animate on small screens
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 800;
  const MotionTag = isMobile ? motion.a : 'a';
  const motionProps = isMobile
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: 'easeOut' },
        href: link,
        target: '_blank',
      }
    : { href: link, target: '_blank' };

  return (
    <MotionTag {...motionProps}>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </MotionTag>
  );
}

export default ProjectCard;
