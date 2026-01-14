import './index.scss';
import { 
  FiActivity, FiUsers, FiHeart, FiWind, 
  FiTarget, FiLifeBuoy, FiZap, FiCheckCircle 
} from 'react-icons/fi';

const mainServices = [
  {
    id: 1,
    title: "Psicoterapia",
    description: "Atendimento especializado em Terapia Cognitivo-Comportamental (TCC) e Abordagem Centrada na Pessoa.",
    icon: <FiUsers />,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1370&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Pilates",
    description: "Método focado no fortalecimento, flexibilidade e consciência corporal para todas as idades.",
    icon: <FiActivity />,
    image: "https://images.unsplash.com/photo-1518611012118-29a8d63ee0c2?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Nutrição",
    description: "Planejamento alimentar focado em saúde e bem-estar, respeitando sua individualidade biológica.",
    icon: <FiHeart />,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Fisioterapia",
    description: "Reabilitação física e prevenção com técnicas avançadas para sua mobilidade e qualidade de vida.",
    icon: <FiWind />,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop"
  }
];

const complementaryTherapies = [
  { name: "Hipnoterapia", icon: <FiTarget /> },
  { name: "Auriculoterapia", icon: <FiZap /> },
  { name: "Liberação Miofascial", icon: <FiLifeBuoy /> },
  { name: "Ventosaterapia", icon: <FiCheckCircle /> },
  { name: "Massagem Relaxante", icon: <FiHeart /> },
  { name: "Drenagem Linfática", icon: <FiActivity /> }
];

export default function Specialties() {
  return (
    <section id="especialidades" className="specialties">
      <div className="specialties__container">
        <header className="specialties__header">
          <span className="specialties__tag">Nossas Especialidades</span>
          <h2 className="specialties__title">Soluções integradas para <br /> <span>seu bem-estar.</span></h2>
        </header>

        {/* Grid de Serviços Principais */}
        <div className="specialties__grid">
          {mainServices.map((service) => (
            <div key={service.id} className="specialties__card">
              <div className="specialties__image-wrapper">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="specialties__info">
                <div className="specialties__card-header">
                  {service.icon}
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Terapias Complementares */}
        <div className="specialties__complementary">
          <h4 className="specialties__complementary-title">Terapias e Cuidados Complementares</h4>
          <div className="specialties__list">
            {complementaryTherapies.map((therapy, index) => (
              <div key={index} className="specialties__item">
                <span className="specialties__item-icon">{therapy.icon}</span>
                <span className="specialties__item-name">{therapy.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}