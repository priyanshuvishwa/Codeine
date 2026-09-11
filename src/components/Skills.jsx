import React from 'react';
import {
  Palette,
  Layout,
  Sparkles,
  Layers,
  Grid,
  Type,
  Figma,
  Image,
  Cpu,
  Box,
  Globe,
  Code2,
  FileCode,
  Braces,
  Atom,
  Zap,
  Smartphone
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon string to component
const iconMap = {
  Palette,
  Layout,
  Sparkles,
  Layers,
  Grid,
  Type,
  Figma,
  Image,
  Cpu,
  Box,
  Globe,
  Code2,
  FileCode,
  Braces,
  Atom,
  Zap,
  Smartphone
};

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills & <span>Expertise</span></h2>
      <span className="section__subtitle">My Technical & Creative Level</span>

      <div className="skills__container container grid">
        {skillsData.map((category, idx) => (
          <div key={idx} className="skills__card">
            <div className="skills__header">
              <div className="skills__header-icon">
                {idx === 0 && <Palette size={20} />}
                {idx === 1 && <Figma size={20} />}
                {idx === 2 && <Code2 size={20} />}
              </div>
              <h3 className="skills__card-title">{category.category}</h3>
            </div>

            <div className="skills__list">
              {category.items.map((skill, sIdx) => {
                const IconComponent = iconMap[skill.icon] || Sparkles;
                return (
                  <div key={sIdx} className="skills__item">
                    <div className="skills__meta">
                      <span className="skills__name">
                        <IconComponent size={16} color="var(--first-color)" />
                        {skill.name}
                      </span>
                      <span className="skills__percentage">{skill.level}</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__percentage-bar"
                        style={{ width: skill.level }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
