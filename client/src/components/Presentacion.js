import React from 'react';
import '../pages/styles/presentacion.css';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import logo from '../assets/img/Screenshot_261.png';

function Presentacion() {
    return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">SOMOS MINERVA</h2>
          <p className="about-subtitle">Tienda de libros y novelas</p>
          
          <div className="about-divider"></div>
          
          <p className="about-description">
            Bienvenidos a Minerva, tu paraíso literario. Descubre el poder de la lectura y déjate llevar 
            por la magia de las palabras en Minerva, donde los sueños toman forma entre las páginas de los libros.
          </p>
          
          <div className="about-social">
            <a href="#" className='social-icon'><FaFacebook /></a>
            <a href="#" className='social-icon'><FaPinterest /></a>
            <a href="#" className='social-icon'><FaInstagram /></a>
            <a href="#" className='social-icon'><FaTwitter /></a>

          </div>
        </div>
        <div className="about-image">
            <img src={logo} alt="Logo Minerva" className="about-logo" />
        </div>
      </div>
    </section>
  );
};

export default Presentacion;