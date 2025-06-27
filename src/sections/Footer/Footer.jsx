import styles from './FooterStyles.module.css';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.section
      id="footer"
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <p>
        &copy;2025 Dhruv Agarwal. <br />
        All rights reserved.
      </p>
    </motion.section>
  );
}

export default Footer;
