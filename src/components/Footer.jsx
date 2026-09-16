import React from 'react';
import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* Title */}
        <h2 className="footer__title">
          COLLABORATE WITH BIANCA AND START YOUR <br />
          JOURNEY IN CREATIVE DESIGN TODAY.
        </h2>

        {/* Links */}
        <ul className="footer__links">
          <li>
            <a href="#work" className="footer__link">
              Work
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        {/* Social Links */}
        <div className="footer__social">
          <a
            href="https://www.facebook.com/profile.php?id=61594104881474"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://www.instagram.com/bedimcode/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/bedimcode"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>

        {/* Copy */}
        <span className="footer__copy">
          &#169; All Rights Reserved By Bedimcode
        </span>
      </div>
    </footer>
  );
};

export default Footer;
