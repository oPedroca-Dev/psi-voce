import './index.scss';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero-integrated">
      <div className="hero-integrated__container">
        
        <div className="hero-integrated__content">
          <div className="hero-integrated__reveal">
            <span className="hero-integrated__badge">Instituto Psi & Você</span>
            <h1 className="hero-integrated__title">
              Reconecte-se com <br />
              sua <span>essência.</span>
            </h1>
          </div>
          
          <div className="hero-integrated__box">
            <p className="hero-integrated__description">
              A psicoterapia clínica e o Pilates proporcionam uma jornada de 
              <strong> cuidados especiais</strong>, integrando corpo e mente de forma única.
            </p>
            <a href="https://wa.me/551146733583" className="hero-integrated__button">
              Começar minha jornada <FiArrowRight />
            </a>
          </div>
        </div>

        <div className="hero-integrated__visual">
          <div className="hero-integrated__image-frame">
            <img src="./banner.jpg" alt="Equilíbrio e Bem-estar" />
            {/* O "V" ou detalhe de marca sutil sobre a foto */}
            <div className="hero-integrated__decorative-text">Psi & Você</div>
          </div>
        </div>

      </div>
      
      {/* Detalhe de fundo que traz o roxo da marca de forma suave */}
      <div className="hero-integrated__shape"></div>
    </section>
  );
}