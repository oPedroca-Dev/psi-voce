// Footer/index.jsx
import './index.scss';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FiMapPin, FiArrowUp } from 'react-icons/fi';
import logoImg from "/logo.png"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Branding & Manifesto */}
        <div className="footer__brand">
          <img src={logoImg} alt="Instituto Psi & Você" className="footer__logo" />
          <p className="footer__description">
            Unindo a profundidade da mente ao movimento do corpo para uma vida plena. 
            Seu refúgio de saúde integrada na Vila Sofia.
          </p>
          <div className="footer__social">
            <a href="https://www.instagram.com/institutopsievoce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/551146733583" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Navegação Estilo Menu de Luxo */}
        <div className="footer__nav">
          <h4 className="footer__title">Navegação</h4>
          <nav>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/profissionais">Profissionais</a></li>
              <li><a href="/espaco">Espaço</a></li>
              <li><a href="#especialidades">Especialidades</a></li>
            </ul>
          </nav>
        </div>

        {/* Contato Direto */}
        <div className="footer__contact">
          <h4 className="footer__title">Contato</h4>
          <ul className="footer__contact-list">
            <li>
              <FiMapPin />
              <span>Av. Nossa Sra. do Sabará, 1693<br />Vila Sofia, São Paulo - SP</span>
            </li>
            <li>
              <FaWhatsapp />
              <span>(11) 4673-3583</span>
            </li>
            <li>
              <FaEnvelope />
              <span>atendimento@psievoce.com.br</span>
            </li>
          </ul>
        </div>

        {/* Botão de Voltar ao Topo */}
        <button className="footer__back-to-top" onClick={scrollToTop} aria-label="Voltar ao topo">
          <FiArrowUp />
        </button>

      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p>&copy; {currentYear} Instituto Psi & Você. Todos os direitos reservados.</p>
          <p className="footer__dev">
            Feito Por <span>Pedro Henrique</span>
          </p>
        </div>
      </div>
    </footer>
  );
}