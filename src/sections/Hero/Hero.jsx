import React, { useEffect, useState } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/PXL_20250419_123732959~2-modified.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import leetcodeLight from '../../assets/leetcode-light.svg';
import leetcodeDark from '../../assets/leetcode-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const leetcodeIcon = theme === 'light' ? leetcodeLight : leetcodeDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            src={heroImg}
            className={styles.hero}
            alt="Profile picture of Dhruv Agarwal"
          />
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>
          <h1>
            Dhruv
            <br />
            Agarwal
          </h1>
          <h2>Full-Stack Developer</h2>
          <span>
            <a href="https://leetcode.com/dhruvagarwal086" target="_blank" rel="noopener noreferrer">
              <img src={leetcodeIcon} alt="LeetCode icon" />
            </a>
            <a href="https://github.com/dhruv086" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/dhruvagarwal08" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </span>
          <p className={styles.description}>
            Running on coffee, pushing pixels, pulling data, and deploying like it's magic.
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
      {(
        <div className={
          showScrollIndicator
            ? styles.scrollIndicator
            : styles.scrollIndicator + ' ' + styles.scrollIndicatorHidden
        }>
          <div className={styles.circle}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M10 16l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
