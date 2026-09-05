// src/components/ContactSection/ContactSection.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-grid">
        <div className="contact-content">
          <span className="section-tag-light">Contact</span>
          <h1 className="contact-title">Avid Dental Clinic Lagos</h1>
          <p className="contact-description">
            Have questions about our dental services or need help booking an
            appointment? We're here for you! You can reach us using the
            contact details below.
          </p>
          
          <div className="contact-details">
            <a href="tel:07030708877">
              <strong>Phone:</strong> 0703 070 8877
            </a>
            <a href="https://wa.me/2347030708877" target="_blank" rel="noopener noreferrer">
              <strong>Whatsapp:</strong> 0703 070 8877
            </a>
          </div>

          <div className="contact-socials">
            <a href="https://web.facebook.com/people/Avid-Dental/61562784249253/?_rdc=1&_rdr#/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={28} />
            </a>
            <a href="https://www.instagram.com/avid_dental_clinic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={28} />
            </a>
            <a href="https://www.tiktok.com/@avid_dental_clinic" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok size={28} />
            </a>
          </div>
        </div>
        
        <div className="contact-map">
          <iframe
            title="Avid Dental Clinic Location on Google Maps" 
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126830.70957847485!2d3.3521664!3d6.5896448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x103b91e1db9e2ee5%3A0xcd83f1cef4aa229a!2sAvid%20Dental%20Clinic%20Lagos%2C%20Ile%20Zik%20Bus%20Stop%2C%20601%20Agege%20Motor%20Rd%2C%20Ile%20Zik%2C%20Ikeja%20101233%2C%20Lagos!3m2!1d6.6023837!2d3.3314089!5e0!3m2!1sen!2sng!4v1788597384320!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
