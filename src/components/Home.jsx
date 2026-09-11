import React from 'react';
import { ArrowDown, Send, Briefcase, Award, Sparkles, FolderCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Social icons mapping
import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Home = () => {
  return (
    <section className="home section" id="home">
      {/* Ambient background glow effect */}
      <div className="bg-glow" style={{ top: '10%', left: '-10%' }} />
      <div className="bg-glow" style={{ top: '50%', right: '-10%' }} />

      <div className="home__container container grid">
        {/* Text Content */}
        <div className="home__content">
          <span className="home__subtitle">
            <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Creative Designer & Art Director
          </span>

          <h1 className="home__title">
            Hello, I'm <span>{personalInfo.name}</span>
          </h1>

          <p className="home__description">
            {personalInfo.tagline} Based in {personalInfo.location}, crafting meaningful digital products and identities with high design standards.
          </p>

          <div className="home__buttons">
            <a href="#contact" className="button">
              Let's Talk <Send size={18} />
            </a>
            <a href="#work" className="button button--ghost">
              View Work <Briefcase size={18} />
            </a>
          </div>

          <div className="home__social">
            <span className="home__social-text">Follow Me</span>
            <a
              href={personalInfo.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href={personalInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          <a href="#about" className="home__scroll">
            <span className="home__scroll-name">Scroll Down</span>
            <ArrowDown size={18} className="home__scroll-icon" />
          </a>
        </div>

        {/* Hero Visual & Badges */}
        <div className="home__image-wrapper">
          <div className="home__blob">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"
              alt="Bianca - Creative Designer"
              className="home__img"
              loading="eager"
            />
          </div>

          {/* Floating Experience Badge */}
          <div className="home__badge home__badge--left">
            <div className="home__badge-icon">
              <Award size={18} />
            </div>
            <div>
              <div className="home__badge-number">{personalInfo.experienceYears}</div>
              <div className="home__badge-title">Years of Experience</div>
            </div>
          </div>

          {/* Floating Projects Badge */}
          <div className="home__badge home__badge--right">
            <div className="home__badge-icon">
              <FolderCheck size={18} />
            </div>
            <div>
              <div className="home__badge-number">{personalInfo.completedProjects}</div>
              <div className="home__badge-title">Completed Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
