import './index.scss';
import { FiInstagram, FiLinkedin, FiPlus } from 'react-icons/fi';

const partners = [
  { 
    id: 1, 
    name: "Kelly Ferreira", 
    role: "Psicóloga & Neurocientista", 
    crp: "CRP-SP/112512",
    specialty: "Cognitiva Comportamental", 
    target: "Adolescentes, Adultos e Idosos",
    quote: "Tenha cuidado com o que você pensa, pois a sua vida é dirigida pelos seus pensamentos. Prov. 4.23",
    image: "./public/profissionais/kelly.jpg", 
    instagram: "https://instagram.com/seu_perfil",
    linkedin: "https://linkedin.com/in/seu_perfil"
  },
  { 
    id: 2, 
    name: "Jacqueline Marques", 
    role: "Prof. de Pilates & Personal", 
    crp: "CREF: 072376-G/SP",
    specialty: "Gestora e Estudante de Psicologia", 
    target: "A partir de 15 anos",
    quote: "Vencer a si próprio é a maior das vitórias.",
    image: "./public/profissionais/jaque.jpg",
    instagram: "https://instagram.com/perfil_jac",
    linkedin: "https://linkedin.com/in/perfil_jac"
  }
];

const team = [
  { name: "Michelle Paixão", role: "Psicóloga Clínica", crp: "CRP-06/160530" },
  { name: "Bianca", role: "Psicóloga Clínica", crp: "CRP-06/163142" },
  { name: "Letícia", role: "Nutricionista", crp: "CRN-3 62142" },
  { name: "Karoline Rodrigues", role: "Psicóloga Clínica", crp: "CRP (Consulte)" },
  { name: "Geralda", role: "Fisioterapeuta", crp: "CREFITO (Consulte)" }
];

export default function Professionals() {
  return (
    <section id="profissionais" className="prof">
      <div className="prof__container">
        
        <header className="prof__header">
          <span className="prof__tag">Sócias Fundadoras</span>
          <h2 className="prof__title">Liderança e <span>Essência.</span></h2>
        </header>

        {/* Grid das Sócias com Foto */}
        <div className="prof__partners-grid">
          {partners.map((pro) => (
            <div key={pro.id} className="prof__card">
              <div className="prof__visual">
                <img src={pro.image} alt={pro.name} />
                <div className="prof__overlay">
                  <p className="prof__quote">"{pro.quote}"</p>
                  <div className="prof__socials">
                    <a href={pro.instagram} target="_blank" rel="noreferrer"><FiInstagram /></a>
                    <a href={pro.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /></a>
                  </div>
                </div>
              </div>
              <div className="prof__info">
                <span className="prof__role">{pro.role}</span>
                <h3 className="prof__name">{pro.name}</h3>
                <p className="prof__crp">{pro.crp}</p>
                <div className="prof__details">
                  <p><strong>Especialidade:</strong> {pro.specialty}</p>
                  <p><strong>Foco:</strong> {pro.target}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lista da Equipe sem Foto - Elegante e Organizada */}
        <div className="prof__team-section">
          <h4 className="prof__team-title">Corpo Clínico</h4>
          <div className="prof__team-list">
            {team.map((member, i) => (
              <div key={i} className="prof__team-item">
                <div className="prof__team-info">
                  <FiPlus className="prof__icon" />
                  <span className="prof__team-name">{member.name}</span>
                  <span className="prof__team-role">{member.role}</span>
                </div>
                <span className="prof__team-crp">{member.crp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}