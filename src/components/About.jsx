import React from 'react';
import { Award, Briefcase, Headphones, Download, Calendar } from 'lucide-react';
import { personalInfo, experienceData } from '../data/portfolioData';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About <span>Me</span></h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <div className="about__image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
            alt="Bianca working on design"
            className="about__img"
            loading="lazy"
          />
        </div>

        <div className="about__data">
          <p className="about__description">
            I am a passionate creative designer and art director specializing in UI/UX design, visual identities, and interactive web experiences. With over {personalInfo.experienceYears} of practice delivering solutions for startups and Fortune 500 companies, I merge user empathy with high-end aesthetic precision.
          </p>

          <div className="about__info">
            <div className="about__box">
              <Award className="about__icon" size={24} />
              <h3 className="about__title">{personalInfo.experienceYears}</h3>
              <span className="about__subtitle">Experience</span>
            </div>

            <div className="about__box">
              <Briefcase className="about__icon" size={24} />
              <h3 className="about__title">{personalInfo.completedProjects}</h3>
              <span className="about__subtitle">Completed</span>
            </div>

            <div className="about__box">
              <Headphones className="about__icon" size={24} />
              <h3 className="about__title">24/7</h3>
              <span className="about__subtitle">Client Support</span>
            </div>
          </div>

          <a
            href="#contact"
            className="button button--ghost"
            style={{ marginBottom: '2rem' }}
          >
            Download Resume <Download size={18} />
          </a>

          {/* Career Journey Timeline */}
          <h3 style={{ fontSize: 'var(--h3-font-size)', marginBottom: '1rem', color: 'var(--title-color)' }}>
            Experience & Journey
          </h3>
          <div className="about__timeline">
            {experienceData.map((exp, index) => (
              <div key={index} className="timeline__item">
                <div className="timeline__year">{exp.year}</div>
                <div className="timeline__role">{exp.role}</div>
                <div className="timeline__company">{exp.company}</div>
                <p className="timeline__desc">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
