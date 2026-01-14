import './index.scss';
import { FiInstagram, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';

const professionals = [
  { id: 1, name: "Dra. Kelly Ferreira", role: "Psicóloga Clínica", specialty: "Fundadora - TCC", image: "./public/kelly.jpg" },
  { id: 2, name: "Dr. Ricardo Santos", role: "Fisioterapeuta", specialty: "Pilates Clínico", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop" },
  { id: 3, name: "Mariana Costa", role: "Nutricionista", specialty: "Nutrição Funcional", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=687&auto=format&fit=crop" },
  { id: 4, name: "Dr. Lucas Lima", role: "Psicólogo", specialty: "Ansiedade e Depressão", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop" },
  { id: 5, name: "Dra. Carla Dias", role: "Fisioterapeuta", specialty: "Reeducação Postural", image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=1470&auto=format&fit=crop" },
  { id: 6, name: "Juliana Mendes", role: "Psicopedagoga", specialty: "Desenvolvimento Infantil", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=687&auto=format&fit=crop" },
  { id: 7, name: "Dr. Felipe Arantes", role: "Psiquiatra", specialty: "Saúde Mental Integrativa", image: "https://images.unsplash.com/photo-1622902046580-2b47f47f0871?q=80&w=687&auto=format&fit=crop" },
];

export default function Professionals() {
  return (
    <section className="professionals">
      <div className="professionals__container">
        <header className="professionals__header">
          <div className="professionals__title-wrapper">
            <span className="professionals__tag">Corpo Clínico</span>
            <h2 className="professionals__title">
              Especialistas em <br /> 
              <span className="serif">Excelência Humana</span>
            </h2>
          </div>
          <div className="professionals__stats">
            <span className="number">07</span>
            <span className="text">Profissionais <br />Integrados</span>
          </div>
        </header>

        <div className="professionals__grid">
          {professionals.map((pro, index) => (
            <div key={pro.id} className={`professionals__card professionals__card--${index + 1}`}>
              <div className="professionals__image-area">
                <div className="professionals__image-frame">
                  <img src={pro.image} alt={pro.name} />
                </div>
                
                <div className="professionals__card-overlay">
                  <div className="professionals__socials">
                    <a href="#" className="social-link"><FiInstagram /></a>
                    <a href="#" className="social-link"><FiLinkedin /></a>
                  </div>
                  <button className="professionals__btn-explore">
                    Ver Currículo <FiArrowUpRight />
                  </button>
                </div>
              </div>
              
              <div className="professionals__info">
                <div className="professionals__role-group">
                  <span className="professionals__role">{pro.role}</span>
                  <div className="professionals__line"></div>
                </div>
                <h3 className="professionals__name">{pro.name}</h3>
                <p className="professionals__specialty">{pro.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}