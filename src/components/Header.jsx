import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effects & active link detection (ScrollSpy)
  useEffect(() => {
    const handleScroll = () => {
      // Header shadow on scroll
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ScrollSpy for sections
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={closeMenu}>
          Bianca<span>.</span>
        </a>

        {/* Mobile menu wrapper */}
        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav__item">
                <a
                  href={link.href}
                  className={`nav__link ${activeSection === link.href.substring(1) ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Close button inside mobile menu */}
          <div className="nav__close" id="nav-close" onClick={closeMenu} aria-label="Close menu">
            <X size={24} />
          </div>
        </div>

        {/* Toggle button for mobile */}
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu} aria-label="Open menu">
          <Menu size={24} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
