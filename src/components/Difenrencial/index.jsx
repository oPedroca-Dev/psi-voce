// Em um novo arquivo Concept/index.jsx
import './index.scss';

export default function Concept() {
 return (
 <section className="concept">
 <div className="concept__container">
 <div className="concept__content">
          <span className="concept__tag">Nosso Diferencial</span>
          <h2 className="concept__title">Saúde Integrativa: <br /><span>Onde tudo se conecta.</span></h2>
          <p className="concept__text">
            Não olhamos apenas para o sintoma, mas para o ser humano como um todo. 
            Ao unir a <strong>psicologia</strong> ao <strong>movimento do pilates</strong>, 
            proporcionamos uma recuperação mais rápida e um equilíbrio duradouro.
          </p>
          <div className="concept__features">
            <div className="concept__item">
              <span className="number">01</span>
              <div>
                <h4>Cuidado Humanizado</h4>
                <p>Atendimento focado na sua história e individualidade.</p>
              </div>
            </div>
            <div className="concept__item">
              <span className="number">02</span>
              <div>
                <h4>Ambiente Seguro</h4>
                <p>Infraestrutura premium com total privacidade e conforto.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="concept__visual">
           <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop" alt="Bem estar" />
        </div>
      </div>
    </section>
  );
}