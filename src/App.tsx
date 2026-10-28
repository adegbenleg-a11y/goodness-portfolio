import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Training } from './components/Training';
import { KindWords } from './components/KindWords';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand text-tide flex flex-col font-sans selection:bg-seagreen/30 selection:text-tide">
      {/* 1. Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About (Mist Band) */}
        <About />

        {/* 4. Projects (Sand Base) */}
        <Projects />

        {/* 5. Skills (Mist Band) */}
        <Skills />

        {/* 6. Training (Sand Base) */}
        <Training />

        {/* 7. Kind words (Mist Band) */}
        <KindWords />

        {/* 8. Contact (Sand Base) */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
};

export default App;
