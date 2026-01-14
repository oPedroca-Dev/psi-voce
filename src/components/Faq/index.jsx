import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'; // Ícone mais elegante que o Plus/Minus
import './index.scss';

const faqs = [
  {
    question: "Como funciona a primeira sessão de psicoterapia?",
    answer: "A primeira sessão é um momento de acolhimento e escuta ativa. Nela, o profissional busca compreender sua história e alinhar expectativas, explicando como as abordagens de TCC ou Centrada na Pessoa guiarão seu processo de evolução."
  },
  {
    question: "Preciso de experiência prévia para praticar Pilates?",
    answer: "Absolutamente não. Nossas aulas são personalizadas. Realizamos uma avaliação inicial para entender sua mobilidade e objetivos, adaptando cada exercício ao seu ritmo, garantindo segurança e evolução constante."
  },
  {
    question: "O instituto trabalha com convênios médicos?",
    answer: "Atuamos de forma particular e via sistema de reembolso (Livre Escolha). Oferecemos todo o suporte documental necessário para que você possa solicitar o estorno junto à sua operadora de saúde com facilidade."
  },
  {
    question: "Quais os benefícios da saúde integrada (Pilates + Psi)?",
    answer: "O corpo e a mente não são compartimentados. Enquanto a Psicoterapia organiza o campo emocional, o Pilates libera endorfina e reduz tensões físicas causadas pelo estresse, criando um ciclo de bem-estar completo."
  }
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="faq">
      <div className="faq__container">
        <header className="faq__header">
          <span className="faq__tag">Transparência</span>
          <h2 className="faq__title">Dúvidas <span>Frequentes.</span></h2>
          <p className="faq__subtitle">Tudo o que você precisa saber para começar sua jornada conosco.</p>
        </header>

        <div className="faq__list">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className={`faq__item ${active === index ? 'faq__item--active' : ''}`}
              onClick={() => setActive(active === index ? null : index)}
            >
              <div className="faq__question">
                <h3>{item.question}</h3>
                <div className="faq__icon-box">
                  <FiChevronDown />
                </div>
              </div>
              <div className="faq__answer">
                <div className="faq__answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}