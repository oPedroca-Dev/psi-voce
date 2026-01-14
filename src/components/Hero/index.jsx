import './index.scss';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Bem-vindos ao Instituto de Saúde Mental e Física
          </div>
          
          <h1 className="hero__title">
            Psi & Você: Onde unimos <br />
            <span className="hero__title--italic">corpo e mente para cuidar de você.</span>
          </h1>

          <p className="hero__description">
            Proporcionamos saúde e bem-estar para nossos clientes por meio de 
            <strong> aulas de pilates e psicoterapia</strong>, além de contarmos com 
            parcerias em <strong>nutrição e fisioterapia</strong> para suprir todas as suas necessidades.
          </p>

          <div className="hero__actions">
            <a href="#contato" className="hero__btn-premium">
              <span>Agendar Horário</span>
              <div className="hero__btn-circle">
                <FiArrowUpRight />
              </div>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <div className="hero__image-bg"></div>
            <img 
              src="./teste.jpg" 
              alt="Ambiente de acolhimento Psi & Você" 
              className="hero__img"
            />
            <div className="hero__floating-tag">
              🌿 Equilíbrio Real
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}