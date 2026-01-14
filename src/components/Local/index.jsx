import './index.scss';
import { FiMapPin, FiClock, FiPhone, FiExternalLink } from 'react-icons/fi';

export default function Location() {
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.4371465227745!2d-46.6896172!3d-23.6603011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50363690d715%3A0x6a1f0a17f692994e!2sAv.%20Nossa%20Sra.%20do%20Sabar%C3%A1%2C%201693%20-%20Vila%20Sofia%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000";

  return (
    <section id="localizacao" className="location">
      <div className="location__container">
        <div className="location__content">
          <header className="location__header">
            <span className="location__tag">Proximidade</span>
            <h2 className="location__title">Visite o nosso <br /><span>Espaço.</span></h2>
          </header>
          
          <div className="location__cards">
            <div className="location__card">
              <div className="location__icon-wrapper"><FiMapPin /></div>
              <div className="location__info-text">
                <h4>Endereço</h4>
                <p>Av. Nossa Sra. do Sabará, 1693<br />Vila Sofia, São Paulo - SP</p>
              </div>
            </div>

            <div className="location__card">
              <div className="location__icon-wrapper"><FiClock /></div>
              <div className="location__info-text">
                <h4>Horário de Atendimento</h4>
                <p>Segunda a Sexta: 08:00 – 20:00<br />Sábado: 08:00 – 13:00</p>
              </div>
            </div>

            <div className="location__card">
              <div className="location__icon-wrapper"><FiPhone /></div>
              <div className="location__info-text">
                <h4>Contato</h4>
                <p>+55 11 4673-3583</p>
              </div>
            </div>
          </div>

          <a 
            href="https://maps.app.goo.gl/YourActualLink" 
            target="_blank" 
            rel="noreferrer" 
            className="location__cta"
          >
            <span>Como Chegar</span>
            <FiExternalLink />
          </a>
        </div>

        <div className="location__map-container">
          <div className="location__map-frame">
            <iframe 
              src={googleMapsUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização Psi & Você"
            ></iframe>
          </div>
          <div className="location__map-decoration"></div>
        </div>
      </div>
    </section>
  );
}