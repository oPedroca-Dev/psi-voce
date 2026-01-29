import './index.scss';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

const mainServices = [
  {
    id: 1,
    title: "Psicoterapia",
    category: "Mente",
    cta: "Iniciar Processo",
    description: "Um processo que permite maior reflexão sobre si e sobre a maneira como o indivíduo enxerga e enfrenta as dificuldades, favorecendo o desenvolvimento de ferramentas para lidar com situações adversas e fortalecimento da saúde emocional.",
    image: "./psi.jpg"
  },
  {
    id: 2,
    title: "Pilates",
    category: "Corpo",
    cta: "Marcar Aula",
    description: "Modalidade focada na Respiração, Concentração e Precisão. Fortalece o centro do corpo, corrige postura e previne dores, promovendo força e equilíbrio. Corpo mais leve, mente mais tranquila.",
    image: "./pilates.jpg"
  },
  {
    id: 3,
    title: "Fisioterapia",
    category: "Reabilitação",
    cta: "Avaliar Lesão",
    description: "Modalidade de reabilitação e tratamento de dores com técnicas manuais e exercícios específicos, sempre respeitando os limites biológicos e a individualidade de cada quadro clínico.",
    image: "./fisio.jpg"
  },
  {
    id: 4,
    title: "Nutrição",
    category: "Vida",
    cta: "Ver Método",
    description: "Processo clínico de avaliação e prescrição nutricional que respeita sua individualidade biológica e promove uma relação saudável e equilibrada com a comida.",
    image: "./nutri.jpg"
  }
];

const complementaryTherapies = [
  { 
    name: "Hipnoterapia", 
    text: "Recurso que utiliza o transe hipnótico para acessar emoções e memórias de forma direta, reduzindo defesas cognitivas." 
  },
  { 
    name: "Auriculoterapia", 
    text: "Estimulação de pontos no pavilhão auricular para promover equilíbrio físico e auxiliar na regulação de sintomas." 
  },
  { 
    name: "Liberação Miofascial", 
    text: "Técnica manual aplicada sobre a fáscia para reduzir tensões, melhorar a mobilidade e restabelecer o equilíbrio biomecânico." 
  },
  { 
    name: "Ventosaterapia", 
    text: "Utilização de ventosas para criar pressão negativa, auxiliando na circulação e liberação de tensões musculares." 
  },
  { 
    name: "Drenagem Linfática", 
    text: "Movimentos suaves que estimulam o sistema linfático, eliminando toxinas e reduzindo retenções de líquidos." 
  }
];

export default function Specialties() {
  const handleWhatsApp = (serviceTitle) => {
    const phone = "551146733583";
    const message = encodeURIComponent(`Olá Dra. Kelly! Gostaria de saber mais sobre o serviço de ${serviceTitle}.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="especialidades" className="spec">
      <div className="spec__container">
        <header className="spec__header">
          <span className="spec__badge">Nossa Expertise</span>
          <h2 className="spec__title">Nossas Especialidades </h2>
        </header>

        <div className="spec__grid">
          {mainServices.map((service, index) => (
            <div key={service.id} className="spec__card">
              <div className="spec__img-box">
                <img src={service.image} alt={service.title} />
                <div className="spec__category-tag">{service.category}</div>
              </div>
              <div className="spec__info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button onClick={() => handleWhatsApp(service.title)}>
                  {service.cta} <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="spec__extra">
          <div className="spec__extra-header">
            <h4>Terapias Especializadas</h4>
            <p>Recursos complementares para potencializar seu tratamento.</p>
          </div>
          <div className="spec__extra-grid">
            {complementaryTherapies.map((item, i) => (
              <div key={i} className="spec__extra-item">
                <div className="item-header">
                  <FiPlus />
                  <h5>{item.name}</h5>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}