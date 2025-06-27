import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />}
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <BackToTop />
       <Analytics />
    </>
  );
}

export default App;
