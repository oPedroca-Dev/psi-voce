import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './index.scss';
import logoImg from "/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchor = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia o scroll quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${isOpen ? 'header--open' : ''}`}>
      <div className="header__container">
        
        <Link to="/" className="header__logo" onClick={() => setIsOpen(false)}>
          <img src={logoImg} alt="Instituto Psi & Você" />
        </Link>

        <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
          <div className="header__nav-list">
            <Link to="/" className={`header__link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Início</Link>
            <Link to="/profissionais" className={`header__link ${location.pathname === '/profissionais' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Especialistas</Link>
            <a href="#especialidades" className="header__link" onClick={(e) => handleAnchor(e, "#especialidades")}>Método</a>
            <Link to="/espaco" className={`header__link ${location.pathname === '/espaco' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>O Espaço</Link>
          </div>
          
          <div className="header__mobile-footer">
             <small>Agendamentos e Informações</small>
             <a href="https://wa.me/551146733583" target="_blank" rel="noreferrer">+55 11 4673-3583</a>
          </div>
        </nav>

        <div className="header__actions">
          <a href="https://wa.me/551146733583" target="_blank" rel="noreferrer" className="header__btn">
            <span>Agendar Consulta</span>
          </a>
          
          <button className="header__toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>
      
      <div className={`header__overlay ${isOpen ? 'visible' : ''}`} onClick={() => setIsOpen(false)}></div>
    </header>
  );
}