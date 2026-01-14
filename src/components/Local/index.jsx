import './index.scss';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa';

export default function Location() {
  return (
    <section className="location">
      <div className="location__container">
        <div className="location__info">
          <span className="location__tag">Onde Estamos</span>
          <h2 className="location__title">Visite o nosso <span>Espaço.</span></h2>
          
          <div className="location__details">
            <div className="location__item">
              <div className="location__icon"><FaMapMarkerAlt /></div>
              <div>
                <h4>Endereço</h4>
                <p>Av. Nossa Sra. do Sabará, 1693<br />Vila Sofia, São Paulo - SP</p>
              </div>
            </div>

            <div className="location__item">
              <div className="location__icon"><FaClock /></div>
              <div>
                <h4>Horário de Atendimento</h4>
                <p>Segunda a Sexta: 08:00 – 20:00<br />Sábado: 08:00 – 13:00</p>
              </div>
            </div>

            <div className="location__item">
              <div className="location__icon"><FaPhoneAlt /></div>
              <div>
                <h4>Contato</h4>
                <p>+55 11 4673-3583</p>
              </div>
            </div>
          </div>

          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=PSI%26VOCÊ+-+Instituto+especializado+em+saúde+mental+e+física-Estúdio+de+Pilates" 
            target="_blank" 
            rel="noreferrer" 
            className="location__btn"
          >
            Como Chegar
          </a>
        </div>

        <div className="location__map">
          {/* Substitua o src abaixo pelo link de incorporação do seu Google Maps se necessário */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.562758652!2d-46.6887207!3d-23.6697076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51c9f99d1d7d%3A0x7442a8cb50b52671!2sPSI%26VOC%C3%8A%20-%20Instituto%20especializado%20em%20sa%C3%BAde%20mental%20e%20f%C3%ADsica-Est%C3%BAdio%20de%20Pilates!5e0!3m2!1spt-PT!2sbr!4v1700000000000!5m2!1spt-PT!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}