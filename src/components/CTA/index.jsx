import './index.scss';
import { FiWhatsapp, FiCalendar } from 'react-icons/fi';

export default function CTAFinal() {
  return (
    <section className="cta-final">
      <div className="cta-final__container">
        <div className="cta-final__box">
          {/* Elementos abstratos de fundo */}
          <div className="cta-final__circle cta-final__circle--1"></div>
          <div className="cta-final__circle cta-final__circle--2"></div>
          
          <div className="cta-final__content">
            <div className="cta-final__icon">
              <FiCalendar />
            </div>
            
            <h2 className="cta-final__title">
              Pronto para sua <br />
              <span>jornada de transformação?</span>
            </h2>
            
            <p className="cta-final__text">
              Agende uma avaliação e descubra como nosso cuidado integrado <br />
              pode mudar sua percepção de saúde e bem-estar.
            </p>

            <a 
              href="https://wa.me/551146733583" 
              className="cta-final__btn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FiWhatsapp className="btn-icon" />
              <span>Agendar via WhatsApp</span>
            </a>
            
            <p className="cta-final__footer-text">Resposta rápida em horário comercial</p>
          </div>
        </div>
      </div>
    </section>
  );
}