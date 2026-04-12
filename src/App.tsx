/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import AnimatedBackground from './components/AnimatedBackground';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30">
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <div key="content" className="relative z-10">
            <Navigation />
            <main>
              <HeroSection />
              <ContactSection />
              <EducationSection />
              <ExperienceSection />
              <ProjectsSection />
              <SkillsSection />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

