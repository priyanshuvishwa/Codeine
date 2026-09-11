import React, { useState } from 'react';
import {
  Sparkles,
  Layout,
  MonitorSmartphone,
  Compass,
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  Sparkles,
  Layout,
  MonitorSmartphone,
  Compass
};

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (service) => {
    setActiveModal(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services <span>Offered</span></h2>
      <span className="section__subtitle">What I Provide For Clients</span>

      <div className="services__container container grid">
        {servicesData.map((service) => {
          const IconComponent = iconMap[service.icon] || Sparkles;

          return (
            <div key={service.id} className="services__card">
              <div className="services__icon">
                <IconComponent size={28} />
              </div>
              <h3 className="services__title">{service.title}</h3>
              <p className="services__description">{service.shortDesc}</p>

              <button
                type="button"
                className="services__button"
                onClick={() => openModal(service)}
              >
                See More <ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Services Modal */}
      <div
        className={`services__modal ${activeModal ? 'services__modal--active' : ''}`}
        onClick={closeModal}
      >
        {activeModal && (
          <div
            className="services__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="services__modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X size={24} />
            </div>

            <h3 className="services__modal-title">{activeModal.title}</h3>
            <p className="services__modal-description">{activeModal.shortDesc}</p>

            <ul className="services__modal-list">
              {activeModal.deliverables.map((item, idx) => (
                <li key={idx} className="services__modal-item">
                  <CheckCircle2 size={18} className="services__modal-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <a href="#contact" className="button button--small" onClick={closeModal}>
                Request This Service
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
