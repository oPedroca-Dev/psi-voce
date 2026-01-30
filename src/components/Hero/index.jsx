import './index.scss';

export default function Hero() {
  return (
    <section className="hero-statement">
      <div className="hero-statement__container">
        
        <div className="hero-statement__top">
          <span className="hero-statement__label">Instituto Psi & Você</span>
          <span className="hero-statement__year">Est. 2019</span>
        </div>

        <div className="hero-statement__main">
          <h1 className="hero-statement__title">
            Cuidar do que <span>você pensa</span> é o primeiro passo para <span>viver bem.</span>
          </h1>
        </div>

        <div className="hero-statement__footer">
          <div className="hero-statement__motto-box">
            <p>"Tenha cuidado com o que você pensa, pois a sua vida é dirigida pelos seus pensamentos."</p>
            <cite>Provérbios 4:23</cite>
          </div>
          
          <div className="hero-statement__cta">
            <a href="https://wa.me/551146733583?text=Olá,%20Gostaria%20de%20iniciar%20minha%20jornada%20no%20Instituto%20Psi%20%26%20Você.%20Vim%20pelo%20site." className="btn-cta">Iniciar meu acolhimento</a>
            <div className="professionals">
              <span>Neurociência</span>
              <span className="dot"></span>
              <span>Pilates</span>
            </div>
          </div>
        </div>

      </div>
      
      {/* Detalhe de fundo: apenas um gradiente de luz muito suave para não ser "branco vazio" */}
      <div className="hero-statement__light"></div>
    </section>
  );
}