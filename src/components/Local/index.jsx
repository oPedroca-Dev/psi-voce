// Location/index.jsx
import './index.scss';
import { FiMapPin, FiClock, FiPhone, FiArrowUpRight } from 'react-icons/fi';

export default function Location() {
  // Substitua pela URL real de incorporação do Google Maps
  const googleMapsIframe = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.4533!2d-46.6853!3d-23.6425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50f383!2sAv.%20Nossa%20Sra.%20do%20Sabar%C3%A1%2C%201693!5e0!3m2!1spt-BR!2sbr!4v1700000000000";

  return (
    <section id="localizacao" className="location">
      <div className="location__container">
        
        <div className="location__content">
          <header className="location__header">
            <span className="location__tag">Proximidade</span>
            <h2 className="location__title">Visite o nosso <br /><span>Espaço.</span></h2>
            <p className="location__subtitle">Ambiente projetado para oferecer o máximo de conforto, discrição e acolhimento.</p>
          </header>
          
          <div className="location__details">
            <div className="location__item">
              <FiMapPin className="location__icon" />
              <div className="location__text">
                <h4>Endereço</h4>
                <p>Av. Nossa Sra. do Sabará, 1693 — Vila Sofia, São Paulo - SP</p>
              </div>
            </div>

            <div className="location__item">
              <FiClock className="location__icon" />
              <div className="location__text">
                <h4>Atendimento</h4>
                <p>Segunda a Sexta: 08h às 20h<br />Sábados: 08h às 13h</p>
              </div>
            </div>

            <div className="location__item">
              <FiPhone className="location__icon" />
              <div className="location__text">
                <h4>Contato</h4>
                <p>+55 11 4673-3583</p>
              </div>
            </div>
          </div>

          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noreferrer" 
            className="location__cta"
          >
            Abrir no Google Maps <FiArrowUpRight />
          </a>
        </div>

        <div className="location__visual">
          <div className="location__map-frame">
            <iframe 
              src={googleMapsIframe}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Localização Instituto"
            ></iframe>
          </div>
          <div className="location__map-overlay"></div>
        </div>

      </div>
    </section>
  );
}