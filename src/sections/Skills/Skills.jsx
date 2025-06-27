import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <motion.section
      id="skills"
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h1 className="sectionTitle">Skills</h1>
      {/* Languages */}
      <h2 className={styles.subTitle}>Languages</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="C" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />
      {/* backend */}
      <h2 className={styles.subTitle}>Backend</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="NodeJs" />
        <SkillList src={checkMarkIcon} skill="ExpressJs" />
        <SkillList src={checkMarkIcon} skill="RESTful APIs" />
        <SkillList src={checkMarkIcon} skill="JWT" />
        <SkillList src={checkMarkIcon} skill="Bcrypt" />
      </div>
      <hr />
      {/* frontend */}
      <h2 className={styles.subTitle}>Frontend</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Tailwind Css" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="Css" />
      </div>
      <hr />
      {/* Databases */}
      <h2 className={styles.subTitle}>Databases</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="PostgreSQL" />
      </div>
      <hr />
      {/* Deployment */}
      <h2 className={styles.subTitle}>Deployment</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Google Cloud" />
        <SkillList src={checkMarkIcon} skill="Azure" />
      </div>
      <hr />
      {/* tools & devops */}
      <h2 className={styles.subTitle}>Tools & DevOps</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="GitHub" />
        <SkillList src={checkMarkIcon} skill="Postman" />
        <SkillList src={checkMarkIcon} skill="Cloudinary" />
        <SkillList src={checkMarkIcon} skill="Dotenv" />
        <SkillList src={checkMarkIcon} skill="Nodemon" />
      </div>
    </motion.section>
  );
}

export default Skills;
