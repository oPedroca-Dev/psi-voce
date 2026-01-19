import './index.scss';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

const mainServices = [
  {
    id: 1,
    title: "Psicoterapia",
    category: "Mente",
    cta: "Iniciar Processo",
    description: "Acolhimento clínico para ansiedade e autoconhecimento com base em evidências científicas.",
    image: "./public/psi.jpg"
  },
  {
    id: 2,
    title: "Pilates",
    category: "Corpo",
    cta: "Marcar Aula",
    description: "Método personalizado focado em reabilitação e consciência do movimento funcional.",
    image: "./public/pilates.jpg"
  },
  {
    id: 3,
    title: "Nutrição",
    category: "Vida",
    cta: "Ver Método",
    description: "Planos que respeitam sua biologia e promovem uma relação saudável com a comida.",
    image: "./public/nutri.jpg"
  },
  {
    id: 4,
    title: "Fisioterapia",
    category: "Saúde",
    cta: "Avaliar Lesão",
    description: "Prevenção e tratamento de dores com técnicas manuais e exercícios específicos.",
    image: "./public/fisio.jpg"
  }
];

const therapies = ["Hipnoterapia", "Auriculoterapia", "Liberação Miofascial", "Ventosaterapia", "Drenagem Linfática"];

export default function Specialties() {
  const handleWhatsApp = (serviceTitle) => {
    const phone = "551146733583";
    const message = encodeURIComponent(`Olá! Vi o site e gostaria de saber mais sobre ${serviceTitle}.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="especialidades" className="spec">
      <div className="spec__container">
        <header className="spec__header">
          <span className="spec__badge">Nossa Expertise</span>
          <h2 className="spec__title">Especialidades <br/><span>Desenhadas para Você.</span></h2>
        </header>

        <div className="spec__grid">
          {mainServices.map((service, index) => (
            <div key={service.id} className={`spec__card spec__card--${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="spec__img-wrapper">
                <img src={service.image} alt={service.title} />
                <span className="spec__category">{service.category}</span>
              </div>
              <div className="spec__content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="spec__link" onClick={() => handleWhatsApp(service.title)}>
                  {service.cta} <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        <footer className="spec__complementary">
          <div className="spec__comp-box">
            <div className="spec__comp-info">
              <span className="spec__comp-overline">Abordagem 360°</span>
              <h4 className="spec__comp-title">Terapias <br/>Complementares</h4>
            </div>
            <div className="spec__comp-list">
              {therapies.map((item, i) => (
                <div key={i} className="spec__comp-item">
                  <FiPlus className="icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}