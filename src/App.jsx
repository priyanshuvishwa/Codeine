import React from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';

function App() {
  return (
    <>
      {/* Custom Mouse Cursor with link hover hide */}
      <CustomCursor />

      {/* Header & Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      <ScrollUp />
    </>
  );
}

export default App;
