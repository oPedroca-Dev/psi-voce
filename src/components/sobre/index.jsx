import './index.scss';
import { FiArrowUpRight, FiMinus } from 'react-icons/fi';

export default function About() {
  return (
    <section id="quem-somos" className="about-ultra">
      {/* Marca d'água sutil ao fundo */}
      <div className="about-ultra__watermark">2017 — 2026</div>

      <div className="about-ultra__container">
        
        {/* Cabeçalho de Curadoria */}
        <header className="about-ultra__header">
          <div className="title-area">
            <div className="eyebrow">
              <FiMinus /> <span>A Trajetória</span>
            </div>
            <h2 className="main-title">
              Sete anos moldando o <br />
              <strong>Cuidado Integrado.</strong>
            </h2>
          </div>
          
          <div className="info-area">
            <p className="lead-text">
              Fundado pelas irmãs <strong>Kelly Ferreira</strong> e <strong>Jacqueline Campos</strong>, 
              o Instituto integra a ciência da mente ao movimento sob uma gestão estratégica de alta performance.
            </p>
          </div>
        </header>

        {/* Layout de Exposição */}
        <div className="about-ultra__main">
          
          <div className="visual-column">
            <div className="image-reveal">
              <img src="./irmas.jpg" alt="Instituto Psi & Você" />
              <div className="stat-overlay">
                <div className="stat-content">
                  <span className="number">07</span>
                  <span className="label">Anos de Legado</span>
                </div>
              </div>
            </div>
            {/* Legenda Lateral Estilo Museu */}
            <div className="visual-caption">📍 Unidade São Paulo — Excelência Clínica</div>
          </div>

          <div className="content-column">
            <div className="essence-block">
              <span className="section-label">A Essência</span>
              <h3>Onde a ciência encontra o acolhimento.</h3>
              <p>
                Não acreditamos em protocolos genéricos. Nossa abordagem <strong>multidisciplinar</strong> — 
                Psicoterapia, Pilates, Nutrição e Fisioterapia — é desenhada para a singularidade de cada jornada.
              </p>
            </div>

            <div className="tags-container">
              {['Integralidade', 'Humanização', 'Excelência', 'Ética'].map((tag) => (
                <span key={tag} className="tag-item">{tag}</span>
              ))}
            </div>

            <div className="quote-block">
              <p>"Encontramos o melhor caminho para você — com acompanhamento humanizado e profissionais que realmente se importam."</p>
            </div>
            
         
          </div>

        </div>

        {/* Footer com Tipografia Avançada */}
        <footer className="about-ultra__footer">
          <div className="footer-item">
            <span className="label">Missão</span>
            <p>Sincronizar corpo e mente através do rigor técnico e do olhar humano.</p>
          </div>
          <div className="footer-item">
            <span className="label">Visão</span>
            <p>Liderar a inovação em saúde multidisciplinar com resultados reais.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}