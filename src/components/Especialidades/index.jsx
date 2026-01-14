import './index.scss';
import { 
  FiActivity, FiUsers, FiHeart, FiWind, 
  FiTarget, FiLifeBuoy, FiZap, FiCheckCircle 
} from 'react-icons/fi';

const mainServices = [
  {
    id: 1,
    title: "Psicoterapia",
    category: "Mente",
    description: "Espaço de acolhimento para ansiedade e autoconhecimento com base em evidências científicas.",
    icon: <FiUsers />,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1370&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Pilates",
    category: "Corpo",
    description: "Método personalizado para reabilitação, fortalecimento e consciência do movimento.",
    icon: <FiActivity />,
    image: "https://images.unsplash.com/photo-1518611012118-29a8d63ee0c2?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Nutrição",
    category: "Vida",
    description: "Planos alimentares que respeitam sua biologia e promovem um relacionamento saudável com a comida.",
    icon: <FiHeart />,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Fisioterapia",
    category: "Saúde",
    description: "Prevenção e tratamento de dores com técnicas manuais e exercícios funcionais específicos.",
    icon: <FiWind />,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop"
  }
];

const complementaryTherapies = [
  "Hipnoterapia", "Auriculoterapia", "Liberação Miofascial", 
  "Ventosaterapia", "Massagem Relaxante", "Drenagem Linfática"
];

export default function Specialties() {
  return (
    <section id="especialidades" className="specialties">
      <div className="specialties__container">
        <header className="specialties__header">
          <div className="specialties__badge">Abordagem Integrativa</div>
          <h2 className="specialties__title">Nossas <span>Especialidades.</span></h2>
          <p className="specialties__subtitle">Cuidado completo em um só lugar, unindo especialistas para sua saúde integral.</p>
        </header>

        <div className="specialties__grid">
          {mainServices.map((service) => (
            <div key={service.id} className="specialties__card">
              <div className="specialties__img-box">
                <span className="specialties__card-tag">{service.category}</span>
                <img src={service.image} alt={service.title} />
              </div>
              <div className="specialties__card-content">
                <div className="specialties__card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="specialties__plus">
          <div className="specialties__plus-header">
            <h4>Cuidados Complementares</h4>
            <div className="specialties__plus-line"></div>
          </div>
          <div className="specialties__plus-list">
            {complementaryTherapies.map((name, i) => (
              <div key={i} className="specialties__plus-item">
                <FiCheckCircle className="icon" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}