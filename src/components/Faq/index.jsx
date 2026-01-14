import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './index.scss';

// Dados centralizados e protegidos
const faqs = [
  {
    question: "Como funciona a primeira sessão de psicoterapia?",
    answer: "A primeira sessão é um momento de acolhimento e escuta ativa. Nela, o profissional busca compreender sua história e alinhar expectativas."
  },
  {
    question: "Preciso de experiência prévia para praticar Pilates?",
    answer: "Absolutamente não. Nossas aulas são personalizadas. Realizamos uma avaliação inicial para entender sua mobilidade e adaptar cada exercício."
  },
  {
    question: "O instituto trabalha com convênios médicos?",
    answer: "Atuamos de forma particular e via sistema de reembolso (Livre Escolha). Oferecemos todo o suporte documental necessário."
  },
  {
    question: "Quais os benefícios da saúde integrada?",
    answer: "O corpo e a mente não são compartimentados. O tratamento integrado potencializa resultados físicos e emocionais simultaneamente."
  }
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  // Função para garantir que apenas um item abra por vez de forma segura
  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="faq__container">
        <header className="faq__header">
          <span className="faq__tag">Transparência</span>
          <h2 className="faq__title">Dúvidas <br/><span>Frequentes.</span></h2>
          <p className="faq__subtitle">Informações essenciais para sua jornada no Instituto.</p>
        </header>

        <div className="faq__list">
          {faqs.map((item, index) => (
            <div 
              key={`faq-item-${index}`} 
              className={`faq__item ${active === index ? 'faq__item--active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq__question">
                <span className="faq__number">0{index + 1}</span>
                <h3>{item.question}</h3>
                <div className="faq__icon-box">
                  <FiArrowUpRight />
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