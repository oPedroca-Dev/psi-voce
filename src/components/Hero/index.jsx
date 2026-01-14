import './index.scss';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero">
      {/* Elementos decorativos de fundo */}
      <div className="hero__blur-element"></div>
      
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            <span className="hero__badge-text">Saúde Mental e Física Integrada</span>
          </div>
          
          <h1 className="hero__title">
            Psi & Você: Onde unimos <br />
            <span className="hero__title--italic">corpo e mente para cuidar de você.</span>
          </h1>

          <p className="hero__description">
            Proporcionamos saúde e bem-estar por meio de 
            <strong> pilates e psicoterapia</strong>, com suporte em 
            <strong> nutrição e fisioterapia</strong> para uma vida em equilíbrio.
          </p>

          <div className="hero__actions">
            <a href="https://wa.me/551146733583" className="hero__btn-premium">
              <span className="hero__btn-text">Agendar agora</span>
              <div className="hero__btn-circle">
                <FiArrowUpRight />
              </div>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            {/* Moldura elegante atrás da foto */}
            <div className="hero__image-frame"></div>
            
            <img 
              src="./teste.jpg" 
              alt="Ambiente de acolhimento Psi & Você" 
              className="hero__img"
            />
            
            {/* Tags flutuantes com ícones */}
            <div className="hero__floating-tag hero__floating-tag--1">
              <span className="icon">🌿</span>
              <span>Equilíbrio Real</span>
            </div>
            
            <div className="hero__floating-tag hero__floating-tag--2">
              <span className="icon">✨</span>
              <span>Cuidado Humanizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}