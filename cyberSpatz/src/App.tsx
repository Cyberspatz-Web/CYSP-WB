import React from 'react';
import { CyberBackground } from './components/CyberBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <CyberBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;