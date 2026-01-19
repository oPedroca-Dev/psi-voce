import './index.scss';
import { FiInstagram, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';

const professionals = [
  { 
    id: 1, 
    name: "Kelly Ferreira", 
    role: "Psicóloga & Neurocientista", 
    crp: "CRP-SP/112512",
    specialty: "Cognitiva Comportamental", 
    target: "Adolescentes, Adultos e Idosos",
    quote: "Tenha cuidado com o que você pensa, pois a sua vida é dirigida pelos seus pensamentos. Prov. 4.23",
    image: "./public/profissionais/kelly.jpg", 
    instagram: "https://instagram.com/seu_perfil", // Coloque seu link aqui
    linkedin: "https://linkedin.com/in/seu_perfil",
    isPartner: true 
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
    linkedin: "https://linkedin.com/in/perfil_jac",
    isPartner: true 
  },
  { 
    id: 3, 
    name: "Michelle Paixão", 
    role: "Psicóloga Clínica", 
    crp: "CRP-06/160530",
    specialty: "Abordagem Centrada na Pessoa", 
    target: "Crianças (6+), Adolescentes e Adultos",
    quote: "O autoconhecimento é libertador. Ele não te prende, ele te mostra caminhos.",
    image: "./public/profissionais/Michelle.jpg",
    instagram: "#",
    linkedin: "#"
  },
  { 
    id: 4, 
    name: "Bianca", 
    role: "Psicóloga Clínica", 
    crp: "CRP-06/163142",
    specialty: "Terapia Cognitivo Comportamental", 
    target: "Crianças (4+), Adultos, Idosos e Casais",
    quote: "A conexão consigo será ainda mais encantadora, e nada te arrancará isso jamais.",
    image: "./public/profissionais/bianca.jpg",
    instagram: "#",
    linkedin: "#"
  },
  { 
    id: 5, 
    name: "Letícia", 
    role: "Nutricionista", 
    crp: "CRN-3 62142",
    specialty: "Educação Alimentar e Nutricional", 
    target: "Público jovem e adulto (15+)",
    quote: "Comer vai muito além de ingerir nutrientes, cuidar da alimentação de acordo com sua realidade faz a diferença!",
    image: "./public/profissionais/leticia.jpg",
    instagram: "#",
    linkedin: "#"
  },
  { 
    id: 6, 
    name: "Karoline Rodrigues", 
    role: "Psicóloga Clínica", 
    crp: "CRP (Consulte)",
    specialty: "Terapia Cognitivo Comportamental", 
    target: "A partir de 13 anos",
    quote: "Cada pessoa carrega uma história única — meu papel é acolher, escutar e caminhar junto.",
    image: "./public/profissionais/karol.jpg",
    instagram: "#",
    linkedin: "#"
  },
  { 
    id: 7, 
    name: "Geralda", 
    role: "Fisioterapeuta", 
    crp: "CREFITO (Consulte)",
    specialty: "Fisioterapia Geral", 
    target: "Público Geral",
    quote: "Quando a técnica encontra o cuidado, nasce o verdadeiro tratamento.",
    image: "./public/profissionais/geralda.jpg",
    instagram: "#",
    linkedin: "#"
  }
];

export default function Professionals() {
  return (
    <section id="profissionais" className="professionals">
      <div className="professionals__container">
        
        <header className="professionals__header">
          <div className="professionals__title-block">
            <span className="professionals__tag">Corpo Clínico</span>
            <h2 className="professionals__title">
              Especialistas em <br /> 
              <span>Excelência Humana</span>
            </h2>
          </div>
          <div className="professionals__stats">
            <span className="number">0{professionals.length}</span>
            <span className="text">Mentes <br />Integradas</span>
          </div>
        </header>

        <div className="professionals__grid">
          {professionals.map((pro) => (
            <div key={pro.id} className={`professionals__card ${pro.isPartner ? 'professionals__card--partner' : ''}`}>
              <div className="professionals__visual">
                <img src={pro.image} alt={pro.name} className="professionals__img" />
                
                <div className="professionals__overlay">
                  {pro.quote && <p className="professionals__quote">"{pro.quote}"</p>}
                  
                  <div className="professionals__socials">
                    {/* Link Dinâmico */}
                    <a href={pro.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                      <FiInstagram />
                    </a>
                    <a href={pro.linkedin} target="_blank" rel="noreferrer" aria-label="Linkedin">
                      <FiLinkedin />
                    </a>
                  </div>
                  
                  <button className="professionals__btn">
                    Ver Currículo <FiArrowUpRight />
                  </button>
                </div>
              </div>
              
              <div className="professionals__content">
                <div className="professionals__meta">
                  <span className="professionals__role">{pro.role}</span>
                  {pro.crp && <span className="professionals__crp">{pro.crp}</span>}
                  <span className="professionals__line"></span>
                </div>
                
                <h3 className="professionals__name">
                  {pro.isPartner && <span className="partner-label">Sócia</span>}
                  {pro.name}
                </h3>
                
                <div className="professionals__details">
                  <p className="professionals__specialty">{pro.specialty}</p>
                  <p className="professionals__target"><strong>Foco:</strong> {pro.target}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}