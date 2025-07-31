import React from 'react';
import '../pages/styles/footer.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2 className="title">Visitanos</h2>
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-title">Local Principal</h2>
          <div className="footer-info">
            <FaMapMarkerAlt className="footer-icon" />
            <div>
              <p>Ricardo Enrique Bochin 751, Avellaneda, Provincia de Buenos Aires</p>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h2 className="footer-title">Contacto</h2>
          <div className="footer-info">
            <FaPhone className="footer-icon" />
            <p>+362469420</p>
          </div>
          <div className="footer-info">
            <FaEnvelope className="footer-icon" />
            <p>eliberiaaminerva@gmail.com</p>
          </div>
        </div>

        <div className="footer-section">
          <h2 className="footer-title">Horarios</h2>
          <div className="footer-info">
            <FaClock className="footer-icon" />
            <div>
              <p>Lun - Vie: 8:00 am – 8:30 pm</p>
              <p>Sábados: 8:00 am – 12:00 pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map-section">
      </div>

      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Libreria Minerva. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;