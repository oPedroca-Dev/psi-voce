import './index.scss';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero-refined">
      {/* Elementos de fundo para profundidade */}
      <div className="hero-refined__bg-glow"></div>
      
      <div className="hero-refined__container">
        <div className="hero-refined__content">
          <div className="hero-refined__eyebrow">
            <span className="line"></span>
            <span className="text">Saúde Mental & Movimento Consciente</span>
          </div>

          <h1 className="hero-refined__title">
            Reconecte-se com <br />
            sua <span>essência.</span>
          </h1>

          <p className="hero-refined__description">
            No Instituto <strong>Psi & Você</strong>, integramos a psicoterapia analítica ao Pilates clínico, proporcionando uma jornada de cura que começa na mente e reflete no corpo.
          </p>

          <div className="hero-refined__actions">
            <a href="https://wa.me/551146733583?text=Olá! Gostaria de agendar uma avaliação no Instituto Psi & Você." className="btn-luxury">
              <span>Agendar Avaliação</span>
              <FiArrowRight />
            </a>
            
          </div>
        </div>

        <div className="hero-refined__visual">
          <div className="hero-refined__image-stack">
            {/* Moldura arquitetônica para a imagem */}
            <div className="main-image-wrapper">
              <img src="./banner.jpg" alt="Equilíbrio e Bem-estar no Instituto" className="main-img" />
              <div className="image-overlay"></div>
            </div>
            
            {/* Badge de Autoridade Flutuante */}
            <div className="floating-card">
              <div className="floating-card__icon">🌿</div>
              <div className="floating-card__info">
                <p className="floating-card__title">Cuidado Integrado</p>
                <p className="floating-card__sub">Corpo, Mente e Espírito</p>
              </div>
            </div>

            {/* Círculos de acento geométrico */}
            <div className="shape-ring"></div>
            <div className="shape-blob"></div>
          </div>
        </div>
      </div>
      
      {/* Indicador de Scroll Minimalista */}
      <div className="hero-refined__scroll">
        <span className="scroll-text">Explore</span>
        <span className="scroll-line"></span>
      </div>
    </section>
  );
}