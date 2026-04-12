import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 py-4 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-12 lg:px-24">
        <div className="text-xl font-bold tracking-tighter text-white">
          IN<span className="text-indigo-500">.</span>
        </div>
        
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 sm:flex">
          <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contact</button>
          <button onClick={() => scrollTo('education')} className="hover:text-white transition-colors">Education</button>
          <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors">Experience</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">Projects</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-white transition-colors">Skills</button>
        </div>

        {/* Mobile Nav (Simplified for now, could add a hamburger menu) */}
        <div className="flex sm:hidden">
          <button onClick={() => scrollTo('experience')} className="text-sm font-medium text-slate-300 hover:text-white">
            Menu
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
