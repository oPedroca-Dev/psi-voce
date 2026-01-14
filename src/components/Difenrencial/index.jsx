import './index.scss';

export default function Concept() {
  return (
    <section id="conceito" className="concept">
      <div className="concept__container">
        
        <div className="concept__content">
          <span className="concept__overline">Institucional</span>
          <h2 className="concept__title">
            Excelência em <br /> 
            <span className="concept__title--highlight">Saúde Integrativa</span>
          </h2>
          
          <div className="concept__text">
            <p>
              O Instituto Psi & Você redefine o cuidado com o bem-estar através de uma abordagem clínica rigorosa e humanizada. Unimos a ciência da mente à vitalidade do corpo em um ambiente planejado para a sua evolução plena.
            </p>
          </div>

          <div className="concept__stats">
            <div className="concept__stat-item">
              <span className="number">10+</span>
              <p>Anos de <br/>Experiência</p>
            </div>
            <div className="concept__stat-item">
              <span className="number">2k+</span>
              <p>Vidas <br/>Transformadas</p>
            </div>
          </div>
        </div>

        <div className="concept__visual">
          <div className="concept__image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format&fit=crop" 
              alt="Ambiente de acolhimento profissional" 
            />
          </div>
          {/* Card com tom de lavanda muito suave e borda roxa fina */}
          <div className="concept__floating-card">
            <h4>Atendimento Premium</h4>
            <p>Sessões individuais focadas na sua singularidade e equilíbrio.</p>
          </div>
        </div>

      </div>
    </section>
  );
}