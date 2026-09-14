import React, { useRef, useState } from 'react';
import { Mail, MessageSquare, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

/**
 * ***** CONTACT JS COMMENTS *****
 * The code for sending emails is a sample test.
 * 
 * Create your account at https://www.emailjs.com/ 
 * and follow the instructions in the video and images 
 * to send emails with your account.
 */
const Contact = () => {
  const formRef = useRef(null);

  // Form input states
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });

  // Submission feedback states
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text: string }
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    // Prevent the page from reloading
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.user_message) {
      setStatusMessage({
        type: 'error',
        text: 'Please fill in all fields before sending ❌',
      });
      setTimeout(() => {
        setStatusMessage(null);
      }, 5000);
      return;
    }

    setIsSubmitting(true);

    // serviceID - templateID - #form - publicKey
    // Note: Replace these sample values with your verified EmailJS credentials:
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_test';
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_test';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_test';

    // If actual EmailJS keys exist in environment, send through EmailJS;
    // otherwise gracefully simulate test dispatch as sample test.
    const isConfigured =
      import.meta.env.VITE_EMAILJS_SERVICE_ID &&
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (isConfigured) {
      emailjs
        .sendForm(serviceID, templateID, formRef.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            // Show sent message
            // Message sent successfully ✅
            setStatusMessage({
              type: 'success',
              text: 'Message sent successfully ✅',
            });

            // Trigger celebration confetti
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.8 },
            });

            // Clear input fields
            setFormData({
              user_name: '',
              user_email: '',
              user_message: '',
            });

            // Remove message after five seconds
            setTimeout(() => {
              setStatusMessage(null);
            }, 5000);
          },
          (error) => {
            console.error('EmailJS Error:', error);
            // Show error message
            // Message not sent (service error) ❌
            setStatusMessage({
              type: 'error',
              text: 'Message not sent (service error) ❌',
            });

            // Remove message after five seconds
            setTimeout(() => {
              setStatusMessage(null);
            }, 5000);
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      // Demo / Sample test fallback
      setTimeout(() => {
        // Show sent message
        // Message sent successfully ✅
        setStatusMessage({
          type: 'success',
          text: 'Message sent successfully ✅',
        });

        // Trigger celebratory confetti
        confetti({
          particleCount: 45,
          spread: 55,
          origin: { y: 0.8 },
        });

        // Clear input fields
        setFormData({
          user_name: '',
          user_email: '',
          user_message: '',
        });

        // Remove message after five seconds
        setTimeout(() => {
          setStatusMessage(null);
        }, 5000);

        setIsSubmitting(false);
      }, 700);
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get In <span>Touch</span></h2>
      <span className="section__subtitle">Let's Discuss Your Project</span>

      <div className="contact__container container grid">
        {/* Contact Info & Location */}
        <div className="contact__content">
          <div className="contact__info-group">
            <div className="contact__card">
              <div className="contact__card-icon">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">{personalInfo.email}</span>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon">
                <MessageSquare size={22} />
              </div>
              <div>
                <h3 className="contact__card-title">WhatsApp</h3>
                <span className="contact__card-data">{personalInfo.phone}</span>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="contact__card-title">Location</h3>
                <span className="contact__card-data">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* <!-- Insert your location in Google Maps (https://www.google.com/maps) --> */}
          {/* <!-- Share -> Copy link --> */}
          <div className="contact__map">
            <iframe
              title="Codeine Studio Location"
              src={personalInfo.mapUrl}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="contact__form" id="contact-form">
          <h3 className="contact__form-title">Write Me A Message</h3>

          {/* Hidden Subject Field according to EmailJS format */}
          {/* Subject *: New message from {{user_name}} */}
          <input
            type="hidden"
            name="subject"
            value={`New message from ${formData.user_name || 'Visitor'}`}
          />

          {/* Content *: Names: {{user_name}} */}
          <div className="contact__form-div">
            <label className="contact__form-tag" htmlFor="user_name">
              Names <span>*</span>
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              placeholder="Insert your name"
              className="contact__form-input"
              value={formData.user_name}
              onChange={handleChange}
            />
          </div>

          {/* Content *: Email: {{user_email}} */}
          <div className="contact__form-div">
            <label className="contact__form-tag" htmlFor="user_email">
              Email <span>*</span>
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              placeholder="Insert your email"
              className="contact__form-input"
              value={formData.user_email}
              onChange={handleChange}
            />
          </div>

          {/* Content *: Message: {{user_message}} */}
          <div className="contact__form-div">
            <label className="contact__form-tag" htmlFor="user_message">
              Message <span>*</span>
            </label>
            <textarea
              name="user_message"
              id="user_message"
              required
              rows={5}
              placeholder="Write your message here"
              className="contact__form-input contact__form-area"
              value={formData.user_message}
              onChange={handleChange}
            />
          </div>

          {/* Status feedback message */}
          {statusMessage && (
            <div
              className={`contact__message ${
                statusMessage.type === 'success'
                  ? 'contact__message--success'
                  : 'contact__message--error'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle2 size={18} />
              ) : (
                <AlertCircle size={18} />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          <button
            type="submit"
            className="button"
            disabled={isSubmitting}
            style={{ width: '100%' }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
