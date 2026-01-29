// CTAFinal/index.jsx
import './index.scss';
import { FiArrowRight } from 'react-icons/fi';

export default function CTAFinal() {
  const whatsappNumber = "551146733583";
  const message = encodeURIComponent("Olá! Gostaria de agendar uma avaliação no Instituto.");

  return (
    <section className="cta-final">
      <div className="cta-final__container">
        <div className="cta-final__box">
          {/* Elementos Decorativos Geométricos */}
          <div className="cta-final__shape cta-final__shape--1" />
          <div className="cta-final__shape cta-final__shape--2" />
          
          <div className="cta-final__content">
            <span className="cta-final__badge">Inicie sua mudança</span>
            <h2 className="cta-final__title">
              Pronto para sua <br />
              <span>jornada de transformação?</span>
            </h2>
            <p className="cta-final__text">
              Agende uma avaliação e descubra como nosso cuidado integrado <br />
              pode mudar sua percepção de saúde e bem-estar.
            </p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${message}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-final__btn"
            >
              Agendar atendimento
               <FiArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}