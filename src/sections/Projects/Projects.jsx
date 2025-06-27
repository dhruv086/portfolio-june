import styles from './ProjectsStyles.module.css';
import taptik from '../../assets/taptik.png';
import animatrix from '../../assets/animatrixlogo.jpg';
import vidaxa from '../../assets/vidaxa.png';
import seap from '../../assets/seap.jpg';
import ProjectCard from '../../common/ProjectCard';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.section
      id="projects"
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={taptik}
          link="https://github.com/dhruv086/taptik"
          h3="Taptik"
          p="Real-Time Chat App"
        />
        <ProjectCard
          src={animatrix}
          link="https://github.com/dhruv086/animatrix"
          h3="Animatrix"
          p="Interactive Metaverse Landing UI"
        />
        <ProjectCard
          src={vidaxa}
          link="https://github.com/dhruv086/vidaxa"
          h3="Vidaxa"
          p="Video Platform Backend"
        />
        <ProjectCard
          src={seap}
          link="https://github.com/dhruv086/seap"
          h3="SEAP"
          p=" Exam Authentication System"
        />
      </div>
    </motion.section>
  );
}

export default Projects;
