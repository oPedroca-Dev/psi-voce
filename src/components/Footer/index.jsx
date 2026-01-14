import './index.scss';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import logoImg from "/logo.png"; // Certifique-se de que a logo está na pasta public

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Coluna 1: Branding */}
        <div className="footer__brand">
          <img src={logoImg} alt="Instituto Psi & Você" className="footer__logo" />
          <p className="footer__description">
            Unindo a profundidade da mente ao movimento do corpo para uma vida plena e equilibrada. 
            Seu refúgio de saúde integrada na Vila Sofia.
          </p>
          <div className="footer__social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/551146733583" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="footer__nav">
          <h4 className="footer__title">Navegação</h4>
          <ul>
            <li><a href="/"><FaChevronRight /> Início</a></li>
            <li><a href="/profissionais"><FaChevronRight /> Profissionais</a></li>
            <li><a href="/o-espaco"><FaChevronRight /> O Espaço</a></li>
            <li><a href="#especialidades"><FaChevronRight /> Especialidades</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato Rápido */}
        <div className="footer__contact">
          <h4 className="footer__title">Contato</h4>
          <ul className="footer__contact-list">
            <li>
              <FaMapMarkerAlt />
              <span>Av. Nossa Sra. do Sabará, 1693<br />Vila Sofia, São Paulo - SP</span>
            </li>
            <li>
              <FaWhatsapp />
              <span>(11) 4673-3583</span>
            </li>
            <li>
              <FaEnvelope />
              <span>institutopsievoce@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Linha Final de Direitos */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p>&copy; {currentYear} Instituto Psi & Você. Todos os direitos reservados.</p>
          <p>Desenvolvido por <strong>Seu Nome/Agência</strong></p>
        </div>
      </div>
    </footer>
  );
}