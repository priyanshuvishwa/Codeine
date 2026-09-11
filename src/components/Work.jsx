import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const Work = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((project) => project.category === filter);

  const filterTabs = [
    { key: 'all', label: 'All Projects' },
    { key: 'design', label: 'UI/UX Design' },
    { key: 'branding', label: 'Brand Identity' },
    { key: 'web', label: 'Web Development' },
  ];

  return (
    <section className="work section" id="work">
      <h2 className="section__title">Selected <span>Works</span></h2>
      <span className="section__subtitle">Recent Creative Projects</span>

      {/* Filter Tabs */}
      <div className="work__filters">
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`work__item ${filter === tab.key ? 'active-work' : ''}`}
            onClick={() => setFilter(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="work__container container grid">
        {filteredProjects.map((project) => (
          <article key={project.id} className="work__card">
            <div className="work__img-box">
              <img
                src={project.image}
                alt={project.title}
                className="work__img"
                loading="lazy"
              />
            </div>

            <span className="work__category">{project.categoryLabel}</span>
            <h3 className="work__title">{project.title}</h3>
            <p className="work__subtitle">{project.subtitle}</p>

            <div className="work__tags">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="work__tag">#{tag}</span>
              ))}
            </div>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="work__link"
            >
              Case Study <ArrowRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
