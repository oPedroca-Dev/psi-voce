import './index.scss';

export default function Concept() {
  return (
    <section className="concept">
      <div className="concept__container">
        <div className="concept__visual">
          <div className="concept__image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop" 
              alt="Mulher praticando meditação e bem-estar" 
              className="concept__img"
            />
            {/* Selo de qualidade flutuante */}
            <div className="concept__experience">
              <span className="years">+10</span>
              <span className="text">Anos de <br/> Experiência</span>
            </div>
          </div>
          {/* Elementos decorativos geométricos */}
          <div className="concept__shape"></div>
        </div>

        <div className="concept__content">
          <span className="concept__tag">Essência do Instituto</span>
          <h2 className="concept__title">
            Saúde Integrativa: <br />
            <span className="concept__title--light">Onde tudo se conecta.</span>
          </h2>
          
          <p className="concept__description">
            Entendemos que o corpo manifesta o que a mente silencia. No Instituto Psi & Você, não olhamos apenas para o sintoma, mas para o <strong>ser humano integral</strong>. 
          </p>

          <div className="concept__features">
            <div className="concept__item">
              <div className="concept__number">01</div>
              <div className="concept__info">
                <h4>Cuidado Humanizado</h4>
                <p>Protocolos personalizados que respeitam seu tempo e sua história individual.</p>
              </div>
            </div>

            <div className="concept__item">
              <div className="concept__number">02</div>
              <div className="concept__info">
                <h4>Ambiente Refúgio</h4>
                <p>Um espaço projetado para oferecer conforto sensorial e máxima privacidade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}