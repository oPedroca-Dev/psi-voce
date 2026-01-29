import './index.scss';
import { FiStar, FiArrowRight, FiInstagram } from 'react-icons/fi';

export default function TestimonialsCards() {
  const cards = [
    {
      category: "Psicologia Clínica",
      text: "Você foi um sopro de Deus na vida dela. Ela está visivelmente mais autoconfiante. Parabéns, você faz a diferença.",
      author: "Feedback de Familiar",
      type: "destaque"
    },
    {
      category: "Pilates & Postura",
      text: "Em apenas 5 meses já melhorou muito minha postura, meu equilíbrio, minha labirintite e zumbido no ouvido.",
      author: "Aluna do Instituto",
      type: "padrao"
    },
    {
      category: "Atendimento",
      text: "Equipe maravilhosa, acolhedora, empática e muito competentes!! Super recomendo!!!",
      author: "Google Review",
      type: "google"
    },
    {
      category: "Cuidado Infantil/Adol.",
      text: "Eu tô feliz com resultado da última sessão com vc. Pq ela está mais alegre, mais conversando.",
      author: "Mãe de Paciente",
      type: "padrao"
    }
  ];

  return (
    <section className="t-cards">
      <div className="t-cards__container">
        <header className="t-cards__header">
          <h2 className="t-cards__title">Histórias que <span>inspiram.</span></h2>
          <p className="t-cards__subtitle">O reconhecimento do nosso propósito através da voz de quem cuidamos.</p>
        </header>

        <div className="t-cards__grid">
          {cards.map((card, index) => (
            <div key={index} className={`t-card t-card--${card.type}`}>
              <div className="t-card__head">
                <span className="t-card__cat">{card.category}</span>
                {card.type === 'google' && <div className="t-card__stars"><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>}
              </div>
              <p className="t-card__body">"{card.text}"</p>
              <div className="t-card__footer">
                <span className="t-card__author">{card.author}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="t-cards__action">
          <p>Venha escrever seu próximo capítulo conosco.</p>
          <a href="https://wa.me/551146733583?text=Olá,%20Visitei%20o%20site%20do%20Instituto%20Psi%20%26%20Você%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20atendimento." className="t-cards__btn">
            Agendar Atendimento <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}